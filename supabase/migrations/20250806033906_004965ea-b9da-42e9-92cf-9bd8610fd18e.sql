-- Update the rival XP function to work even without interview deadlines
-- and provide a default daily XP gain of 100 for all users
CREATE OR REPLACE FUNCTION public.update_rival_xp_daily()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE
  profile_record RECORD;
  days_until_interview INTEGER;
  daily_xp_gain INTEGER;
  total_target_xp INTEGER := 800; -- Total XP for completing all 16 questions
  default_daily_xp INTEGER := 100; -- Default daily XP gain
BEGIN
  -- Update each user's rival XP
  FOR profile_record IN 
    SELECT id, rival_xp, interview_deadline, created_at 
    FROM public.profiles 
    WHERE is_bot = false
  LOOP
    -- If user has an interview deadline, calculate XP based on that
    IF profile_record.interview_deadline IS NOT NULL THEN
      days_until_interview := profile_record.interview_deadline - CURRENT_DATE;
      
      -- Only update if interview hasn't passed
      IF days_until_interview > 0 THEN
        -- Calculate daily XP gain (round to nearest 10)
        daily_xp_gain := ROUND((total_target_xp::FLOAT / (profile_record.interview_deadline - profile_record.created_at::date + 1)) / 10) * 10;
        
        -- Ensure minimum 10 XP gain per day
        IF daily_xp_gain < 10 THEN
          daily_xp_gain := 10;
        END IF;
      ELSE
        -- Interview has passed, use default XP
        daily_xp_gain := default_daily_xp;
      END IF;
    ELSE
      -- No interview deadline set, use default XP
      daily_xp_gain := default_daily_xp;
    END IF;
    
    -- Update rival XP
    UPDATE public.profiles 
    SET 
      rival_xp = rival_xp + daily_xp_gain,
      updated_at = now()
    WHERE id = profile_record.id;
  END LOOP;
END;
$function$;