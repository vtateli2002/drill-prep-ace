-- Add rival XP tracking and interview deadline to profiles
ALTER TABLE public.profiles 
ADD COLUMN rival_xp integer NOT NULL DEFAULT 0,
ADD COLUMN interview_deadline date;

-- Create daily challenges table
CREATE TABLE public.daily_challenges (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_date date NOT NULL DEFAULT CURRENT_DATE,
  question_ids text[] NOT NULL,
  completed_questions text[] DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id, challenge_date)
);

-- Enable RLS on daily_challenges
ALTER TABLE public.daily_challenges ENABLE ROW LEVEL SECURITY;

-- Create policies for daily_challenges
CREATE POLICY "Users can view their own daily challenges" 
ON public.daily_challenges 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own daily challenges" 
ON public.daily_challenges 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own daily challenges" 
ON public.daily_challenges 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Update handle_new_user function to include rival XP initialization
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
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
    '{"easy": 0, "medium": 0, "hard": 0, "interview_ready": 0}'::json,
    false,
    0
  );
  RETURN NEW;
END;
$$;

-- Create function to update rival XP daily
CREATE OR REPLACE FUNCTION public.update_rival_xp_daily()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
DECLARE
  profile_record RECORD;
  days_until_interview INTEGER;
  daily_xp_gain INTEGER;
  total_target_xp INTEGER := 800; -- Total XP for completing all 16 questions
BEGIN
  -- Update each user's rival XP based on their interview deadline
  FOR profile_record IN 
    SELECT id, rival_xp, interview_deadline, created_at 
    FROM public.profiles 
    WHERE is_bot = false AND interview_deadline IS NOT NULL
  LOOP
    -- Calculate days until interview
    days_until_interview := profile_record.interview_deadline - CURRENT_DATE;
    
    -- Only update if interview hasn't passed
    IF days_until_interview > 0 THEN
      -- Calculate daily XP gain (round to nearest 10)
      daily_xp_gain := ROUND((total_target_xp::FLOAT / (profile_record.interview_deadline - profile_record.created_at::date + 1)) / 10) * 10;
      
      -- Ensure minimum 10 XP gain per day
      IF daily_xp_gain < 10 THEN
        daily_xp_gain := 10;
      END IF;
      
      -- Update rival XP
      UPDATE public.profiles 
      SET 
        rival_xp = rival_xp + daily_xp_gain,
        updated_at = now()
      WHERE id = profile_record.id;
    END IF;
  END LOOP;
END;
$$;