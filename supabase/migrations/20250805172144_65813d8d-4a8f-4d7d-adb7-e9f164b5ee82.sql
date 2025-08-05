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

UPDATE public.profiles 
SET difficulty_xp = jsonb_set(
  COALESCE(difficulty_xp, '{}'::jsonb),
  '{interview_ready}',
  COALESCE(difficulty_xp->'Interview Ready', difficulty_xp->'interview-ready', '0'::jsonb)
)
WHERE difficulty_xp ? 'Interview Ready' OR difficulty_xp ? 'interview-ready';

-- Remove old keys
UPDATE public.profiles 
SET difficulty_xp = difficulty_xp - 'Interview Ready' - 'interview-ready'
WHERE difficulty_xp ? 'Interview Ready' OR difficulty_xp ? 'interview-ready';