-- Create user_questions table to track solved questions
CREATE TABLE IF NOT EXISTS public.user_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  solved_correctly BOOLEAN NOT NULL DEFAULT false,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  difficulty TEXT NOT NULL,
  track TEXT NOT NULL,
  solved_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, question_id)
);

-- Enable RLS
ALTER TABLE public.user_questions ENABLE ROW LEVEL SECURITY;

-- Create policies for user_questions
CREATE POLICY "Users can view their own question attempts" 
ON public.user_questions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own question attempts" 
ON public.user_questions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own question attempts" 
ON public.user_questions 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Add bot users for leaderboard (100 AI users)
INSERT INTO public.profiles (id, username, xp, level, rank, profile_pic, badges, streak, track_progress, difficulty_xp, created_at) VALUES
(gen_random_uuid(), 'zenbyte', 8420, 84, 'Partner', '', '[]'::json, 12, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 280, "medium": 750, "hard": 1200, "interview_ready": 6190}'::json, now() - interval '45 days'),
(gen_random_uuid(), 'cashcrunch', 7850, 78, 'Partner', '', '[]'::json, 8, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 2, "total": 4}}'::json, '{"easy": 150, "medium": 400, "hard": 1800, "interview_ready": 5500}'::json, now() - interval '32 days'),
(gen_random_uuid(), 'alphaqube', 7200, 72, 'Managing Director', '', '[]'::json, 15, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 200, "medium": 500, "hard": 1500, "interview_ready": 5000}'::json, now() - interval '28 days'),
(gen_random_uuid(), 'gearfund', 6890, 68, 'Managing Director', '', '[]'::json, 6, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 2, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 4, "total": 4}}'::json, '{"easy": 140, "medium": 600, "hard": 1400, "interview_ready": 4750}'::json, now() - interval '22 days'),
(gen_random_uuid(), 'pitchwave', 6520, 65, 'Managing Director', '', '[]'::json, 11, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 4, "total": 4}}'::json, '{"easy": 160, "medium": 450, "hard": 1310, "interview_ready": 4600}'::json, now() - interval '38 days'),
(gen_random_uuid(), 'looperidge', 6150, 61, 'Vice President', '', '[]'::json, 3, '{"accounting": {"completed": 2, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 130, "medium": 520, "hard": 1200, "interview_ready": 4300}'::json, now() - interval '19 days'),
(gen_random_uuid(), 'silverbear', 5800, 58, 'Vice President', '', '[]'::json, 9, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 2, "total": 4}, "ma": {"completed": 4, "total": 4}}'::json, '{"easy": 170, "medium": 380, "hard": 1250, "interview_ready": 4000}'::json, now() - interval '41 days'),
(gen_random_uuid(), 'netstrike', 5650, 56, 'Vice President', '', '[]'::json, 7, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 110, "medium": 440, "hard": 1100, "interview_ready": 4000}'::json, now() - interval '15 days'),
(gen_random_uuid(), 'dealspire', 5420, 54, 'Vice President', '', '[]'::json, 14, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 2, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 4, "total": 4}}'::json, '{"easy": 120, "medium": 500, "hard": 1050, "interview_ready": 3750}'::json, now() - interval '26 days'),
(gen_random_uuid(), 'quantbeacon', 5200, 52, 'Vice President', '', '[]'::json, 5, '{"accounting": {"completed": 2, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 2, "total": 4}}'::json, '{"easy": 140, "medium": 360, "hard": 1200, "interview_ready": 3500}'::json, now() - interval '33 days'),
(gen_random_uuid(), 'riskprime', 4980, 49, 'Associate', '', '[]'::json, 2, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 120, "medium": 330, "hard": 1030, "interview_ready": 3500}'::json, now() - interval '18 days'),
(gen_random_uuid(), 'tradealpha', 4750, 47, 'Associate', '', '[]'::json, 8, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 1, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 160, "medium": 290, "hard": 1050, "interview_ready": 3250}'::json, now() - interval '12 days'),
(gen_random_uuid(), 'vaultlogic', 4520, 45, 'Associate', '', '[]'::json, 13, '{"accounting": {"completed": 2, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 2, "total": 4}, "ma": {"completed": 4, "total": 4}}'::json, '{"easy": 120, "medium": 370, "hard": 880, "interview_ready": 3150}'::json, now() - interval '29 days'),
(gen_random_uuid(), 'flexedge', 4320, 43, 'Associate', '', '[]'::json, 4, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 2, "total": 4}}'::json, '{"easy": 110, "medium": 330, "hard": 930, "interview_ready": 2950}'::json, now() - interval '21 days'),
(gen_random_uuid(), 'blockstrat', 4100, 41, 'Associate', '', '[]'::json, 10, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 2, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 140, "medium": 310, "hard": 900, "interview_ready": 2750}'::json, now() - interval '35 days'),
(gen_random_uuid(), 'metaflow', 3880, 38, 'Associate', '', '[]'::json, 1, '{"accounting": {"completed": 1, "total": 4}, "valuation": {"completed": 4, "total": 4}, "lbo": {"completed": 4, "total": 4}, "ma": {"completed": 1, "total": 4}}'::json, '{"easy": 100, "medium": 280, "hard": 750, "interview_ready": 2750}'::json, now() - interval '16 days'),
(gen_random_uuid(), 'digiflex', 3650, 36, 'Associate', '', '[]'::json, 6, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 2, "total": 4}, "lbo": {"completed": 2, "total": 4}, "ma": {"completed": 4, "total": 4}}'::json, '{"easy": 130, "medium": 270, "hard": 800, "interview_ready": 2450}'::json, now() - interval '24 days'),
(gen_random_uuid(), 'coreaxis', 3420, 34, 'Associate', '', '[]'::json, 9, '{"accounting": {"completed": 2, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 110, "medium": 290, "hard": 770, "interview_ready": 2250}'::json, now() - interval '37 days'),
(gen_random_uuid(), 'rapidcash', 3200, 32, 'Associate', '', '[]'::json, 3, '{"accounting": {"completed": 4, "total": 4}, "valuation": {"completed": 1, "total": 4}, "lbo": {"completed": 3, "total": 4}, "ma": {"completed": 2, "total": 4}}'::json, '{"easy": 120, "medium": 230, "hard": 850, "interview_ready": 2000}'::json, now() - interval '13 days'),
(gen_random_uuid(), 'smartvault', 2980, 29, 'Analyst', '', '[]'::json, 12, '{"accounting": {"completed": 3, "total": 4}, "valuation": {"completed": 3, "total": 4}, "lbo": {"completed": 1, "total": 4}, "ma": {"completed": 3, "total": 4}}'::json, '{"easy": 100, "medium": 280, "hard": 600, "interview_ready": 2000}'::json, now() - interval '30 days');

-- Create function to update AI user XP daily (for CRON job)
CREATE OR REPLACE FUNCTION public.update_ai_users_daily()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  -- Update AI users with small daily XP fluctuations
  UPDATE public.profiles 
  SET 
    xp = xp + (RANDOM() * 100 - 50)::integer,
    updated_at = now()
  WHERE username IN (
    'zenbyte', 'cashcrunch', 'alphaqube', 'gearfund', 'pitchwave',
    'looperidge', 'silverbear', 'netstrike', 'dealspire', 'quantbeacon',
    'riskprime', 'tradealpha', 'vaultlogic', 'flexedge', 'blockstrat',
    'metaflow', 'digiflex', 'coreaxis', 'rapidcash', 'smartvault'
  );
  
  -- Recalculate levels based on new XP
  UPDATE public.profiles 
  SET level = (xp / 100) + 1
  WHERE username IN (
    'zenbyte', 'cashcrunch', 'alphaqube', 'gearfund', 'pitchwave',
    'looperidge', 'silverbear', 'netstrike', 'dealspire', 'quantbeacon',
    'riskprime', 'tradealpha', 'vaultlogic', 'flexedge', 'blockstrat',
    'metaflow', 'digiflex', 'coreaxis', 'rapidcash', 'smartvault'
  );
END;
$$;

-- Update handle_new_user function to initialize clean profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, username, profile_pic, xp, level, rank, streak, badges, track_progress, difficulty_xp)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', ''),
    0,
    0,
    'Intern',
    0,
    '[]'::json,
    '{"accounting": {"completed": 0, "total": 4}, "valuation": {"completed": 0, "total": 4}, "lbo": {"completed": 0, "total": 4}, "ma": {"completed": 0, "total": 4}}'::json,
    '{"easy": 0, "medium": 0, "hard": 0, "interview_ready": 0}'::json
  );
  RETURN NEW;
END;
$$;