-- Seed Tier 3 (Rainmaker) badges
SELECT public._upsert_badge('closer','Closer','Complete any one full track.',3,'flag');
SELECT public._upsert_badge('mastery_i','Mastery I','Reach 100 total correct solves.',3,'target');
SELECT public._upsert_badge('long_game','Long Game','14-day streak (≥1 correct/day).',3,'calendar-days');
SELECT public._upsert_badge('deep_focus','Deep Focus','20 first-try correct solves with no hints.',3,'focus');
SELECT public._upsert_badge('mentor','Mentor','Add 10 notes.',3,'graduation-cap');

-- Award logic for Tier 3 (defensive, reuses helpers)
CREATE OR REPLACE FUNCTION public.check_and_award_tier3(p_user uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE
  total_correct int := 0;
  first_try_no_hint int := 0;
  notes_count int := 0;
  streak int := 0;
  any_track_complete boolean := false;
BEGIN
  -- totals
  SELECT COUNT(*) INTO total_correct
  FROM public.user_questions
  WHERE user_id = p_user AND solved_correctly = true;

  -- first-try no-hint solves; fallback if used_hint column missing
  BEGIN
    SELECT COUNT(*) INTO first_try_no_hint
    FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true
      AND COALESCE(attempt_count,1) = 1
      AND COALESCE((user_questions.used_hint)::boolean, false) = false;
  EXCEPTION WHEN undefined_column THEN
    SELECT COUNT(*) INTO first_try_no_hint
    FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true
      AND COALESCE(attempt_count,1) = 1;
  END;

  -- notes
  SELECT COUNT(*) INTO notes_count
  FROM public.user_notes
  WHERE user_id = p_user;

  -- streak (use existing function if available, else compute last 14 days)
  BEGIN
    streak := public.get_current_streak(p_user, 'UTC');
  EXCEPTION WHEN OTHERS THEN
    WITH days AS (
      SELECT DISTINCT (uq.solved_at AT TIME ZONE 'UTC')::date AS d
      FROM public.user_questions uq
      WHERE uq.user_id = p_user AND uq.solved_correctly = true
        AND (uq.solved_at AT TIME ZONE 'UTC')::date >= ((now() at time zone 'UTC')::date - INTERVAL '13 day')::date
    )
    SELECT COUNT(*) INTO streak FROM days;
  END;

  -- track completion snapshot: prefer public.questions; fallback to user_questions coverage
  BEGIN
    IF EXISTS (
      SELECT 1 FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'questions'
    ) THEN
      WITH tracks AS (
        SELECT public._normalized_track(q.track) AS t, COUNT(*) AS total
        FROM public.questions q
        GROUP BY 1
      ),
      solved AS (
        SELECT public._normalized_track(uq.track) AS t, COUNT(DISTINCT uq.question_id) AS solved
        FROM public.user_questions uq
        WHERE uq.user_id = p_user AND uq.solved_correctly = true
        GROUP BY 1
      )
      SELECT BOOL_OR(s.solved >= t.total) INTO any_track_complete
      FROM tracks t
      JOIN solved s ON s.t = t.t
      WHERE t.t IS NOT NULL;
    ELSE
      -- Fallback: treat full track as all known question_ids per track in user_questions
      WITH solved_by_track AS (
        SELECT public._normalized_track(uq.track) AS t, COUNT(DISTINCT uq.question_id) AS solved
        FROM public.user_questions uq
        WHERE uq.user_id = p_user AND uq.solved_correctly = true
        GROUP BY 1
      ),
      totals AS (
        SELECT public._normalized_track(uq.track) AS t, COUNT(DISTINCT uq.question_id) AS total
        FROM public.user_questions uq
        GROUP BY 1
      )
      SELECT BOOL_OR(s.solved >= t.total) INTO any_track_complete
      FROM totals t
      JOIN solved_by_track s ON s.t = t.t
      WHERE t.t IS NOT NULL;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    any_track_complete := false;
  END;

  -- awards
  IF any_track_complete THEN PERFORM public._award_badge_if_missing(p_user, 'closer'); END IF;
  IF total_correct >= 100 THEN PERFORM public._award_badge_if_missing(p_user, 'mastery_i'); END IF;
  IF streak >= 14 THEN PERFORM public._award_badge_if_missing(p_user, 'long_game'); END IF;
  IF first_try_no_hint >= 20 THEN PERFORM public._award_badge_if_missing(p_user, 'deep_focus'); END IF;
  IF notes_count >= 10 THEN PERFORM public._award_badge_if_missing(p_user, 'mentor'); END IF;
END;
$$;

-- Triggers for Tier 3 awards
CREATE OR REPLACE FUNCTION public._award_tier3_after_user_questions()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  PERFORM public.check_and_award_tier3(NEW.user_id);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_award_tier3 ON public.user_questions;
CREATE TRIGGER trg_award_tier3
AFTER INSERT OR UPDATE ON public.user_questions
FOR EACH ROW EXECUTE FUNCTION public._award_tier3_after_user_questions();

DROP TRIGGER IF EXISTS trg_award_tier3_notes ON public.user_notes;
CREATE TRIGGER trg_award_tier3_notes
AFTER INSERT ON public.user_notes
FOR EACH ROW EXECUTE FUNCTION public._award_tier3_after_user_questions();

-- Backfill immediately
SELECT public.check_and_award_tier3(id)
FROM public.profiles
WHERE COALESCE(is_bot, false) = false;