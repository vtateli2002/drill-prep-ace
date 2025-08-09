-- Add tier column to badges and ensure unique slug
ALTER TABLE public.badges ADD COLUMN IF NOT EXISTS tier integer NOT NULL DEFAULT 1;
CREATE UNIQUE INDEX IF NOT EXISTS badges_slug_unique ON public.badges (slug);

-- Upsert helper for badges
CREATE OR REPLACE FUNCTION public._upsert_badge(p_slug text, p_name text, p_description text, p_tier integer, p_icon text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE v_id uuid;
BEGIN
  INSERT INTO public.badges (slug, name, description, tier, icon)
  VALUES (p_slug, p_name, p_description, p_tier, p_icon)
  ON CONFLICT (slug) DO UPDATE
  SET name = EXCLUDED.name,
      description = EXCLUDED.description,
      tier = EXCLUDED.tier,
      icon = EXCLUDED.icon
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;

-- Table for user notes
CREATE TABLE IF NOT EXISTS public.user_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  question_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.user_notes ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can insert their own notes"
  ON public.user_notes FOR INSERT
  WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can view their own notes"
  ON public.user_notes FOR SELECT
  USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Table for calculator usage events
CREATE TABLE IF NOT EXISTS public.calculator_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.calculator_events ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Users can insert their own calculator events"
  ON public.calculator_events FOR INSERT
  WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can view their own calculator events"
  ON public.calculator_events FOR SELECT
  USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Helper: award badge by slug if not already unlocked
CREATE OR REPLACE FUNCTION public._award_badge_if_missing(p_user uuid, p_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE b_id uuid;
BEGIN
  SELECT id INTO b_id FROM public.badges WHERE slug = p_slug;
  IF b_id IS NULL THEN
    RETURN;
  END IF;

  INSERT INTO public.badge_unlocks (user_id, badge_id)
  SELECT p_user, b_id
  WHERE NOT EXISTS (
    SELECT 1 FROM public.badge_unlocks bu WHERE bu.user_id = p_user AND bu.badge_id = b_id
  );
END;
$$;

-- Trigger shim to call the checker with NEW.user_id
CREATE OR REPLACE FUNCTION public._trigger_check_and_award_tier1()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  PERFORM public.check_and_award_tier1(NEW.user_id);
  RETURN NEW;
END;
$$;

-- Core checker for Tier 1 badges
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

  -- quick_math
  IF EXISTS (SELECT 1 FROM public.calculator_events WHERE user_id = p_user) THEN
    PERFORM public._award_badge_if_missing(p_user, 'quick_math');
  END IF;

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

-- Triggers on activity tables
DROP TRIGGER IF EXISTS trg_award_badges_on_user_questions ON public.user_questions;
CREATE TRIGGER trg_award_badges_on_user_questions
AFTER INSERT ON public.user_questions
FOR EACH ROW
EXECUTE FUNCTION public._trigger_check_and_award_tier1();

DROP TRIGGER IF EXISTS trg_award_badges_on_user_notes ON public.user_notes;
CREATE TRIGGER trg_award_badges_on_user_notes
AFTER INSERT ON public.user_notes
FOR EACH ROW
EXECUTE FUNCTION public._trigger_check_and_award_tier1();

DROP TRIGGER IF EXISTS trg_award_badges_on_calculator_events ON public.calculator_events;
CREATE TRIGGER trg_award_badges_on_calculator_events
AFTER INSERT ON public.calculator_events
FOR EACH ROW
EXECUTE FUNCTION public._trigger_check_and_award_tier1();

-- Daily helper function (schedule via dashboard if desired)
CREATE OR REPLACE FUNCTION public.award_tier1_streaks_daily()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE r record;
BEGIN
  FOR r IN SELECT id FROM public.profiles WHERE is_bot = false LOOP
    PERFORM public.check_and_award_tier1(r.id);
  END LOOP;
END;
$$;

-- Upsert Tier 1 badge copy
select public._upsert_badge('first_win','First Win','First correct answer submitted.',1,'medal');
select public._upsert_badge('getting_warm','Getting Warm','Solve 5 total problems.',1,'flame');
select public._upsert_badge('on_a_roll','On a Roll','3-day streak (≥1 correct per day).',1,'calendar');
select public._upsert_badge('note_taker','Note Taker','Add your first note.',1,'notepad');
select public._upsert_badge('quick_math','Quick Math','Use the calculator tool once.',1,'calculator');
select public._upsert_badge('accounting_rookie','Accounting Rookie','Get 5 Accounting problems correct.',1,'bar-chart');
select public._upsert_badge('quick_learner','Quick Learner','3 correct in a row without hints.',1,'zap');