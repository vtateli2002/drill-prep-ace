-- Remove Interview Ready from defaults and functions; add attempts and badges; add profiles triggers

-- 1) Update profiles.difficulty_xp default and backfill existing rows
ALTER TABLE public.profiles
  ALTER COLUMN difficulty_xp SET DEFAULT '{"easy": 0, "medium": 0, "hard": 0}'::json;

UPDATE public.profiles
SET difficulty_xp = json_build_object(
  'easy', COALESCE((difficulty_xp->>'easy')::integer, 0),
  'medium', COALESCE((difficulty_xp->>'medium')::integer, 0),
  'hard', COALESCE((difficulty_xp->>'hard')::integer, 0)
)::json
WHERE difficulty_xp IS NOT NULL;

-- 2) Update handle_new_user() to remove interview_ready
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
  INSERT INTO public.profiles (
    id, 
    username, 
    profile_pic, 
    xp, 
    level, 
    rank, 
    streak, 
    badges, 
    track_progress, 
    difficulty_xp, 
    is_bot,
    rival_xp
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', ''),
    0,
    1,
    'Intern',
    0,
    '[]'::json,
    '{"accounting": {"completed": 0, "total": 4}, "valuation": {"completed": 0, "total": 4}, "lbo": {"completed": 0, "total": 4}, "ma": {"completed": 0, "total": 4}}'::json,
    '{"easy": 0, "medium": 0, "hard": 0}'::json,
    false,
    0
  );
  RETURN NEW;
END;
$function$;

-- 3) Update standardize_difficulty_xp() to only keep easy/medium/hard
CREATE OR REPLACE FUNCTION public.standardize_difficulty_xp()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  profile_record RECORD;
  new_difficulty_xp json;
BEGIN
  FOR profile_record IN 
    SELECT id, difficulty_xp 
    FROM public.profiles 
    WHERE difficulty_xp IS NOT NULL
  LOOP
    new_difficulty_xp := json_build_object(
      'easy', COALESCE((profile_record.difficulty_xp->>'easy')::integer, 0),
      'medium', COALESCE((profile_record.difficulty_xp->>'medium')::integer, 0),
      'hard', COALESCE((profile_record.difficulty_xp->>'hard')::integer, 0)
    );
    
    UPDATE public.profiles 
    SET difficulty_xp = new_difficulty_xp
    WHERE id = profile_record.id;
  END LOOP;
END;
$function$;

-- 4) Create attempts table with RLS
CREATE TABLE IF NOT EXISTS public.attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  question_id TEXT NOT NULL,
  track TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  attempt_number INTEGER NOT NULL DEFAULT 1,
  submitted_answer NUMERIC,
  is_correct BOOLEAN NOT NULL DEFAULT false,
  xp_awarded INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'attempts' AND policyname = 'Users can view their own attempts'
  ) THEN
    CREATE POLICY "Users can view their own attempts"
    ON public.attempts
    FOR SELECT
    USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'attempts' AND policyname = 'Users can insert their own attempts'
  ) THEN
    CREATE POLICY "Users can insert their own attempts"
    ON public.attempts
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'attempts' AND policyname = 'Users can update their own attempts'
  ) THEN
    CREATE POLICY "Users can update their own attempts"
    ON public.attempts
    FOR UPDATE
    USING (auth.uid() = user_id);
  END IF;
END $$;

-- 5) Create badges and badge_unlocks with RLS
CREATE TABLE IF NOT EXISTS public.badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  xp_reward INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'badges' AND policyname = 'Badges are viewable by everyone'
  ) THEN
    CREATE POLICY "Badges are viewable by everyone"
    ON public.badges
    FOR SELECT
    USING (true);
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.badge_unlocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  badge_id UUID NOT NULL REFERENCES public.badges(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  metadata JSON,
  CONSTRAINT uniq_user_badge UNIQUE (user_id, badge_id)
);

ALTER TABLE public.badge_unlocks ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'badge_unlocks' AND policyname = 'Users can view their own badge unlocks'
  ) THEN
    CREATE POLICY "Users can view their own badge unlocks"
    ON public.badge_unlocks
    FOR SELECT
    USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'badge_unlocks' AND policyname = 'Users can insert their own badge unlocks'
  ) THEN
    CREATE POLICY "Users can insert their own badge unlocks"
    ON public.badge_unlocks
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

-- 6) Add triggers on profiles for updated_at and level calculation
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_profiles_updated_at') THEN
    DROP TRIGGER set_profiles_updated_at ON public.profiles;
  END IF;
END $$;

CREATE TRIGGER set_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_profiles_level') THEN
    DROP TRIGGER set_profiles_level ON public.profiles;
  END IF;
END $$;

CREATE TRIGGER set_profiles_level
BEFORE UPDATE OF xp ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_level_on_xp_change();
