-- Drop the existing trigger first
DROP TRIGGER IF EXISTS update_level_on_xp_change ON public.profiles;

-- Update the level calculation function with exponential curve
CREATE OR REPLACE FUNCTION public.calculate_level_from_xp(total_xp integer)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  level_num integer := 1;
  cumulative_xp_required integer := 0;
  level_xp_required integer;
BEGIN
  WHILE true LOOP
    -- Exponential curve: XP required = 100 * level + (level ^ 2) * 5
    level_xp_required := (100 * level_num) + (level_num * level_num * 5);
    cumulative_xp_required := cumulative_xp_required + level_xp_required;
    
    IF total_xp < cumulative_xp_required THEN
      RETURN level_num;
    END IF;
    
    level_num := level_num + 1;
    
    -- Safety check to prevent infinite loops
    IF level_num > 100 THEN
      RETURN 100;
    END IF;
  END LOOP;
END;
$function$;

-- Update the calculate_xp_for_level function to match
CREATE OR REPLACE FUNCTION public.calculate_xp_for_level(level_num integer)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
  -- Exponential curve: XP required for this level = 100 * level + (level ^ 2) * 5
  RETURN (100 * level_num) + (level_num * level_num * 5);
END;
$function$;

-- Create trigger to update level when XP changes
CREATE TRIGGER update_level_on_xp_change
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  WHEN (OLD.xp IS DISTINCT FROM NEW.xp)
  EXECUTE FUNCTION public.update_level_on_xp_change();

-- Update existing users' levels based on corrected formula
UPDATE public.profiles 
SET level = public.calculate_level_from_xp(xp)
WHERE level != public.calculate_level_from_xp(xp);

-- Standardize difficulty naming to "interview_ready" (with underscore)
UPDATE public.user_questions 
SET difficulty = 'interview_ready' 
WHERE difficulty IN ('Interview Ready', 'interview-ready');

-- Create a new function to help with JSON manipulation for difficulty_xp
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
    -- Build standardized difficulty_xp object
    new_difficulty_xp := json_build_object(
      'easy', COALESCE((profile_record.difficulty_xp->>'easy')::integer, 0),
      'medium', COALESCE((profile_record.difficulty_xp->>'medium')::integer, 0),
      'hard', COALESCE((profile_record.difficulty_xp->>'hard')::integer, 0),
      'interview_ready', COALESCE(
        (profile_record.difficulty_xp->>'interview_ready')::integer,
        (profile_record.difficulty_xp->>'Interview Ready')::integer,
        (profile_record.difficulty_xp->>'interview-ready')::integer,
        0
      )
    );
    
    UPDATE public.profiles 
    SET difficulty_xp = new_difficulty_xp
    WHERE id = profile_record.id;
  END LOOP;
END;
$function$;

-- Execute the standardization
SELECT public.standardize_difficulty_xp();