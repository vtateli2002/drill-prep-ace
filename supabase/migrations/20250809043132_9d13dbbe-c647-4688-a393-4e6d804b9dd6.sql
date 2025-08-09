-- Remove Quick Math awarding from Tier 1 awarder
CREATE OR REPLACE FUNCTION public.check_and_award_tier1(p_user uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE
  total_correct int := 0;
  streak int := 0;
  acct_correct int := 0;
  last3_all_correct int := 0;
BEGIN
  -- Total correct
  SELECT COUNT(*) INTO total_correct
  FROM public.user_questions
  WHERE user_id = p_user AND solved_correctly = true;

  -- first_win
  IF total_correct >= 1 THEN
    PERFORM public._award_badge_if_missing(p_user, 'first_win');
  END IF;

  -- getting_warm
  IF total_correct >= 5 THEN
    PERFORM public._award_badge_if_missing(p_user, 'getting_warm');
  END IF;

  -- on_a_roll using existing function if available
  BEGIN
    streak := public.get_current_streak(p_user, 'UTC');
  EXCEPTION WHEN OTHERS THEN
    streak := 0;
  END;

  IF streak >= 3 THEN
    PERFORM public._award_badge_if_missing(p_user, 'on_a_roll');
  ELSE
    -- Fallback: compute from user_questions over last 3 days
    WITH days AS (
      SELECT DISTINCT (uq.solved_at AT TIME ZONE 'UTC')::date AS d
      FROM public.user_questions uq
      WHERE uq.user_id = p_user AND uq.solved_correctly = true
        AND (uq.solved_at AT TIME ZONE 'UTC')::date >= ((now() at time zone 'UTC')::date - INTERVAL '2 day')::date
    )
    SELECT COUNT(*) INTO streak FROM days;

    IF streak >= 3 THEN
      PERFORM public._award_badge_if_missing(p_user, 'on_a_roll');
    END IF;
  END IF;

  -- note_taker
  IF EXISTS (SELECT 1 FROM public.user_notes WHERE user_id = p_user) THEN
    PERFORM public._award_badge_if_missing(p_user, 'note_taker');
  END IF;

  -- Removed quick_math awarding

  -- accounting_rookie: 5 correct in Accounting track
  SELECT COUNT(*) INTO acct_correct
  FROM public.user_questions
  WHERE user_id = p_user AND solved_correctly = true AND track = 'accounting';
  IF acct_correct >= 5 THEN
    PERFORM public._award_badge_if_missing(p_user, 'accounting_rookie');
  END IF;

  -- quick_learner: 3 consecutive correct with no hints (approximate as first-try correct)
  SELECT COUNT(*) INTO last3_all_correct
  FROM (
    SELECT solved_correctly, attempt_count
    FROM public.user_questions
    WHERE user_id = p_user
    ORDER BY solved_at DESC
    LIMIT 3
  ) t
  WHERE t.solved_correctly = true AND COALESCE(t.attempt_count, 1) = 1;

  IF last3_all_correct = 3 THEN
    PERFORM public._award_badge_if_missing(p_user, 'quick_learner');
  END IF;
END;
$$;