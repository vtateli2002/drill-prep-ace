-- 2) NORMALIZE TRACKS
CREATE OR REPLACE FUNCTION public._normalized_track(p text)
RETURNS text
LANGUAGE sql
IMMUTABLE
AS $$
  select case
    when p ilike 'accounting%' then 'accounting'
    when p ilike 'valuation%'  then 'valuation'
    when p ~* 'm.?&.?a' or p ilike 'ma%' then 'mna' -- matches 'M&A', 'm&a', 'ma'
    when p ilike 'lbo%'        then 'lbo'
    else null
  end
$$;

-- 3) TIER-2 AWARDER (robust to track casing and XP column drift)
CREATE OR REPLACE FUNCTION public.check_and_award_tier2(p_user uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE
  c_acc int := 0; c_val int := 0; c_mna int := 0; c_lbo int := 0;
  has_2k_xp boolean := false;
BEGIN
  -- Count correct answers by normalized track
  SELECT count(*) INTO c_acc FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true AND public._normalized_track(track) = 'accounting';

  SELECT count(*) INTO c_val FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true AND public._normalized_track(track) = 'valuation';

  SELECT count(*) INTO c_mna FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true AND public._normalized_track(track) = 'mna';

  SELECT count(*) INTO c_lbo FROM public.user_questions
    WHERE user_id = p_user AND solved_correctly = true AND public._normalized_track(track) = 'lbo';

  -- XP: guard xp/total_xp drift
  BEGIN
    SELECT (coalesce(p.xp, p.total_xp, 0) >= 2000)
    INTO has_2k_xp
    FROM public.profiles p WHERE p.id = p_user;
  EXCEPTION WHEN undefined_column THEN
    has_2k_xp := (SELECT coalesce(xp, 0) >= 2000 FROM public.profiles WHERE id = p_user);
  END;

  IF c_acc >= 20 THEN PERFORM public._award_badge_if_missing(p_user, 'accounting_ace'); END IF;
  IF c_val >= 20 THEN PERFORM public._award_badge_if_missing(p_user, 'valuation_veteran'); END IF;
  IF c_mna >= 20 THEN PERFORM public._award_badge_if_missing(p_user, 'ma_master'); END IF;
  IF c_lbo >= 20 THEN PERFORM public._award_badge_if_missing(p_user, 'lbo_lead'); END IF;
  IF has_2k_xp     THEN PERFORM public._award_badge_if_missing(p_user, 'steady_gains'); END IF;
END;
$$;

-- Trigger: award Tier-2 on user_questions changes
CREATE OR REPLACE FUNCTION public._award_tier2_after_user_questions()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
BEGIN
  PERFORM public.check_and_award_tier2(NEW.user_id);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_award_tier2 ON public.user_questions;
CREATE TRIGGER trg_award_tier2
AFTER INSERT OR UPDATE ON public.user_questions
FOR EACH ROW EXECUTE FUNCTION public._award_tier2_after_user_questions();

-- 4) RLS + REALTIME SAFETY
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "badges_read_all" ON public.badges FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

ALTER TABLE public.badge_unlocks ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "unlocks_read_own" ON public.badge_unlocks FOR SELECT USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'badge_unlocks'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.badge_unlocks;
  END IF;
END $$;

-- 5) ONE-TIME BACKFILL (award immediately based on existing data)
SELECT public.check_and_award_tier2(id)
FROM public.profiles
WHERE coalesce(is_bot, false) = false;