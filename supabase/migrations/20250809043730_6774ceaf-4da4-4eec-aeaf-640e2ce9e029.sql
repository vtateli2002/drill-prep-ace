-- Tier 4: add hidden flag and seed badges
ALTER TABLE public.badges
  ADD COLUMN IF NOT EXISTS hidden_until_unlock boolean NOT NULL DEFAULT false;

-- Visible Tier 4 badges
SELECT public._upsert_badge('level_20','Level 20','Reach Level 20.',4,'medal');
SELECT public._upsert_badge('relentless_30','Relentless','30-day streak (≥1 correct/day).',4,'flame');
SELECT public._upsert_badge('iron_will_10h','Iron Will','10 Hard problems: first try, no hints.',4,'shield');
SELECT public._upsert_badge('cross_track_50','Cross-Track 50','50 correct across ≥3 tracks.',4,'layers');

-- Hidden Tier 4 badges
SELECT public._upsert_badge('legend_1','Legend','Finish #1 on the leaderboard once.',4,'crown');
SELECT public._upsert_badge('shark_all','Shark','Solve every active question on Drill.',4,'trophy');

-- Mark hidden ones
UPDATE public.badges SET hidden_until_unlock = true WHERE slug IN ('legend_1','shark_all');

-- Award logic for Tier 4
CREATE OR REPLACE FUNCTION public.check_and_award_tier4(p_user uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE
  lvl int := 0;
  streak int := 0;
  hard_clean int := 0;
  cross_tracks int := 0;
  total_correct int := 0;
  is_legend boolean := false;
  all_solved boolean := false;
BEGIN
  -- Level
  SELECT COALESCE(level, 0) INTO lvl FROM public.profiles WHERE id = p_user;

  -- Streak (try function, else 30 distinct days)
  BEGIN
    streak := public.get_current_streak(p_user, 'UTC');
  EXCEPTION WHEN OTHERS THEN
    WITH days AS (
      SELECT DISTINCT (uq.solved_at AT TIME ZONE 'UTC')::date d
      FROM public.user_questions uq
      WHERE uq.user_id = p_user AND uq.solved_correctly = true
        AND (uq.solved_at AT TIME ZONE 'UTC')::date >= ((now() at time zone 'UTC')::date - INTERVAL '29 day')::date
    )
    SELECT COUNT(*) INTO streak FROM days;
  END;

  -- Hard first-try no-hint count
  BEGIN
    SELECT COUNT(*) INTO hard_clean
    FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true
      AND COALESCE(attempt_count,1) = 1
      AND COALESCE((user_questions.used_hint)::boolean, false) = false
      AND difficulty = 'hard';
  EXCEPTION WHEN undefined_column THEN
    SELECT COUNT(*) INTO hard_clean
    FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true
      AND COALESCE(attempt_count,1) = 1
      AND difficulty = 'hard';
  END;

  -- Total correct + cross-track coverage
  WITH solved AS (
    SELECT public._normalized_track(track) t, COUNT(*) c
    FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true
    GROUP BY 1
  )
  SELECT COALESCE(SUM(c), 0), COUNT(*) INTO total_correct, cross_tracks FROM solved;

  -- Legend (rank func preferred, else percentile column if present)
  BEGIN
    is_legend := (public.get_leaderboard_rank(p_user) = 1);
  EXCEPTION WHEN undefined_function THEN
    BEGIN
      is_legend := EXISTS (
        SELECT 1 FROM public.profiles WHERE id = p_user AND COALESCE((profiles.percentile)::numeric, 100) <= 1
      );
    EXCEPTION WHEN undefined_column THEN
      is_legend := false;
    END;
  END;

  -- Shark — solve all catalog questions; fallback if catalog missing
  BEGIN
    IF EXISTS (
      SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'questions'
    ) THEN
      WITH tot AS (
        SELECT COUNT(*) n FROM public.questions WHERE COALESCE(is_active, true) = true
      ),
      got AS (
        SELECT COUNT(DISTINCT question_id) n FROM public.user_questions WHERE user_id = p_user AND solved_correctly = true
      )
      SELECT (got.n >= tot.n) INTO all_solved FROM tot, got;
    ELSE
      WITH tot AS (
        SELECT COUNT(DISTINCT question_id) n FROM public.user_questions
      ),
      got AS (
        SELECT COUNT(DISTINCT question_id) n FROM public.user_questions WHERE user_id = p_user AND solved_correctly = true
      )
      SELECT (got.n >= tot.n) INTO all_solved FROM tot, got;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    all_solved := false;
  END;

  -- Awards
  IF lvl >= 20 THEN PERFORM public._award_badge_if_missing(p_user, 'level_20'); END IF;
  IF streak >= 30 THEN PERFORM public._award_badge_if_missing(p_user, 'relentless_30'); END IF;
  IF hard_clean >= 10 THEN PERFORM public._award_badge_if_missing(p_user, 'iron_will_10h'); END IF;
  IF (total_correct >= 50 AND cross_tracks >= 3) THEN PERFORM public._award_badge_if_missing(p_user, 'cross_track_50'); END IF;
  IF is_legend THEN PERFORM public._award_badge_if_missing(p_user, 'legend_1'); END IF;
  IF all_solved THEN PERFORM public._award_badge_if_missing(p_user, 'shark_all'); END IF;
END;
$$;

-- Triggers for Tier 4
CREATE OR REPLACE FUNCTION public._award_tier4_after_user_questions()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  PERFORM public.check_and_award_tier4(NEW.user_id);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_award_tier4 ON public.user_questions;
CREATE TRIGGER trg_award_tier4
AFTER INSERT OR UPDATE ON public.user_questions
FOR EACH ROW EXECUTE FUNCTION public._award_tier4_after_user_questions();

DROP TRIGGER IF EXISTS trg_award_tier4_notes ON public.user_notes;
CREATE TRIGGER trg_award_tier4_notes
AFTER INSERT ON public.user_notes
FOR EACH ROW EXECUTE FUNCTION public._award_tier4_after_user_questions();

-- Backfill Tier 4
SELECT public.check_and_award_tier4(id)
FROM public.profiles
WHERE COALESCE(is_bot, false) = false;