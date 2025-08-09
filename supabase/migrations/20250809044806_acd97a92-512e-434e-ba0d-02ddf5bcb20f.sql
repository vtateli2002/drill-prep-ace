-- Step 8: Badge Progress View + Recompute RPC
-- 1) Normalization helper (idempotent)
CREATE OR REPLACE FUNCTION public._normalized_track(p text)
RETURNS text LANGUAGE sql IMMUTABLE SET search_path TO '' AS $$
  select case
    when p ilike 'accounting%' then 'accounting'
    when p ilike 'valuation%'  then 'valuation'
    when p ~* 'm.?&.?a' or p ilike 'ma%' then 'mna'
    when p ilike 'lbo%'        then 'lbo'
    else null
  end
$$;

-- 2) View with per-user aggregates used by progress UI
-- Note: we approximate "no hint" by first-try only since user_questions.used_hint may not exist
CREATE OR REPLACE VIEW public.v_badge_progress AS
SELECT
  u.id AS user_id,

  -- Totals
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true
  ) AS total_correct,

  -- Streak days in last 30 (fallback window)
  (
    WITH days AS (
      SELECT DISTINCT (q.solved_at AT TIME ZONE 'UTC')::date d
      FROM public.user_questions q
      WHERE q.user_id = u.id AND q.solved_correctly = true
        AND (q.solved_at AT TIME ZONE 'UTC')::date >= ((now() AT TIME ZONE 'UTC')::date - INTERVAL '29 day')::date
    ) SELECT COUNT(*) FROM days
  ) AS days_active_30,

  -- First-try solves (approximate: attempt_count = 1)
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true
      AND COALESCE(q.attempt_count, 1) = 1
  ) AS clean_first_try,

  -- Hard + clean (approximate: attempt_count = 1)
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true AND q.difficulty = 'hard'
      AND COALESCE(q.attempt_count, 1) = 1
  ) AS hard_clean,

  -- Track counts (normalized)
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true AND public._normalized_track(q.track) = 'accounting'
  ) AS acc_correct,
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true AND public._normalized_track(q.track) = 'valuation'
  ) AS val_correct,
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true AND public._normalized_track(q.track) = 'mna'
  ) AS mna_correct,
  (
    SELECT COUNT(*) FROM public.user_questions q
    WHERE q.user_id = u.id AND q.solved_correctly = true AND public._normalized_track(q.track) = 'lbo'
  ) AS lbo_correct,

  -- Cross-track coverage (how many tracks with at least one correct)
  (
     WITH s AS (
       SELECT public._normalized_track(q.track) t, COUNT(*) c
       FROM public.user_questions q
       WHERE q.user_id = u.id AND q.solved_correctly = true
       GROUP BY 1
     ) SELECT COUNT(*) FROM s WHERE t IS NOT NULL
  ) AS distinct_tracks,

  -- Level / XP
  (
    SELECT COALESCE(p.level, 0) FROM public.profiles p WHERE p.id = u.id
  ) AS level_now,
  (
    SELECT COALESCE(p.xp, p.total_xp, 0) FROM public.profiles p WHERE p.id = u.id
  ) AS xp_now,

  -- Notes count
  (
    SELECT COUNT(*) FROM public.user_notes n WHERE n.user_id = u.id
  ) AS notes_count

FROM public.profiles u
WHERE COALESCE(u.is_bot, false) = false;

ALTER VIEW public.v_badge_progress SET (security_barrier = true);

-- 3) RPC: secure progress fetch with extra computed fields
CREATE OR REPLACE FUNCTION public.get_badge_progress_for_user(p_user uuid)
RETURNS TABLE (
  user_id uuid,
  total_correct int,
  days_active_30 int,
  clean_first_try int,
  hard_clean int,
  acc_correct int,
  val_correct int,
  mna_correct int,
  lbo_correct int,
  distinct_tracks int,
  level_now int,
  xp_now int,
  notes_count int,
  streak_current int,
  catalog_total_active int,
  catalog_user_solved int,
  best_track_solved int,
  best_track_total int
) LANGUAGE plpgsql SECURITY DEFINER SET search_path TO '' AS $$
DECLARE
  v record;
  v_streak int := 0;
  v_catalog_total int := 0;
  v_catalog_user int := 0;
  v_best_solved int := 0;
  v_best_total int := 0;
BEGIN
  SELECT * INTO v FROM public.v_badge_progress WHERE user_id = p_user;
  IF NOT FOUND THEN
    RETURN; -- no row (e.g., not a profile)
  END IF;

  -- Streak: prefer function, else fallback window count
  BEGIN
    SELECT public.get_current_streak(p_user, 'UTC') INTO v_streak;
  EXCEPTION WHEN OTHERS THEN
    SELECT COUNT(*) INTO v_streak
    FROM (
      SELECT DISTINCT (q.solved_at AT TIME ZONE 'UTC')::date d
      FROM public.user_questions q
      WHERE q.user_id = p_user AND q.solved_correctly = true
        AND (q.solved_at AT TIME ZONE 'UTC')::date >= ((now() AT TIME ZONE 'UTC')::date - INTERVAL '29 day')::date
    ) s;
  END;

  -- Catalog totals (prefer questions table)
  IF EXISTS (
    SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'questions'
  ) THEN
    SELECT COUNT(*) INTO v_catalog_total FROM public.questions WHERE COALESCE(is_active, true) = true;
  ELSE
    SELECT COUNT(DISTINCT question_id) INTO v_catalog_total FROM public.user_questions;
  END IF;
  SELECT COUNT(DISTINCT question_id) INTO v_catalog_user
  FROM public.user_questions WHERE user_id = p_user AND solved_correctly = true;

  -- Best-track completion (prefer questions table)
  BEGIN
    IF EXISTS (
      SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'questions'
    ) THEN
      WITH tracks AS (
        SELECT public._normalized_track(q.track) AS t, COUNT(*) AS total
        FROM public.questions q
        WHERE COALESCE(q.is_active, true) = true
        GROUP BY 1
      ),
      solved AS (
        SELECT public._normalized_track(uq.track) AS t, COUNT(DISTINCT uq.question_id) AS solved
        FROM public.user_questions uq
        WHERE uq.user_id = p_user AND uq.solved_correctly = true
        GROUP BY 1
      )
      SELECT COALESCE(s.solved, 0), COALESCE(t.total, 0)
      INTO v_best_solved, v_best_total
      FROM solved s
      JOIN tracks t ON t.t = s.t
      ORDER BY (s.solved::float / NULLIF(t.total, 0)) DESC
      LIMIT 1;
    ELSE
      WITH totals AS (
        SELECT public._normalized_track(q.track) AS t, COUNT(DISTINCT q.question_id) AS total
        FROM public.user_questions q
        GROUP BY 1
      ),
      solved AS (
        SELECT public._normalized_track(uq.track) AS t, COUNT(DISTINCT uq.question_id) AS solved
        FROM public.user_questions uq
        WHERE uq.user_id = p_user AND uq.solved_correctly = true
        GROUP BY 1
      )
      SELECT COALESCE(s.solved, 0), COALESCE(t.total, 0)
      INTO v_best_solved, v_best_total
      FROM solved s
      JOIN totals t ON t.t = s.t
      ORDER BY (s.solved::float / NULLIF(t.total, 0)) DESC
      LIMIT 1;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    v_best_solved := 0;
    v_best_total := 0;
  END;

  RETURN QUERY SELECT
    v.user_id,
    v.total_correct,
    v.days_active_30,
    v.clean_first_try,
    v.hard_clean,
    v.acc_correct,
    v.val_correct,
    v.mna_correct,
    v.lbo_correct,
    v.distinct_tracks,
    v.level_now,
    v.xp_now,
    v.notes_count,
    v_streak,
    v_catalog_total,
    v_catalog_user,
    v_best_solved,
    v_best_total;
END;
$$;

-- 4) RPC: Recompute all badge tiers for current user
CREATE OR REPLACE FUNCTION public.recompute_all_badges_for_user(p_user uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO '' AS $$
BEGIN
  IF auth.uid() <> p_user THEN
    RAISE EXCEPTION 'forbidden';
  END IF;
  PERFORM public.check_and_award_tier1(p_user);
  PERFORM public.check_and_award_tier2(p_user);
  PERFORM public.check_and_award_tier3(p_user);
  PERFORM public.check_and_award_tier4(p_user);
END;
$$;