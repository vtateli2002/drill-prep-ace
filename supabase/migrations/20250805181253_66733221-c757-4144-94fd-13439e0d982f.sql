-- Reset progress for user vtateli2002
-- First, get the user ID for vtateli2002
DO $$
DECLARE
    target_user_id uuid;
BEGIN
    -- Find the user ID for vtateli2002
    SELECT id INTO target_user_id 
    FROM public.profiles 
    WHERE username = 'vtateli2002';
    
    -- Only proceed if user exists
    IF target_user_id IS NOT NULL THEN
        -- Delete all solved questions for this user
        DELETE FROM public.user_questions 
        WHERE user_id = target_user_id;
        
        -- Reset profile progress
        UPDATE public.profiles 
        SET 
            xp = 0,
            level = 1,
            rank = 'Intern',
            streak = 0,
            badges = '[]'::json,
            track_progress = '{"accounting": {"completed": 0, "total": 4}, "valuation": {"completed": 0, "total": 4}, "lbo": {"completed": 0, "total": 4}, "ma": {"completed": 0, "total": 4}}'::json,
            difficulty_xp = '{"easy": 0, "medium": 0, "hard": 0, "interview_ready": 0}'::json,
            rival_xp = 0,
            updated_at = now()
        WHERE id = target_user_id;
        
        RAISE NOTICE 'Successfully reset progress for user vtateli2002';
    ELSE
        RAISE NOTICE 'User vtateli2002 not found';
    END IF;
END $$;