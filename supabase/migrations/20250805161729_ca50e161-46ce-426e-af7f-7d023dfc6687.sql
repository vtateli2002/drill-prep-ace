-- Add attempt tracking to user_questions table
ALTER TABLE public.user_questions ADD COLUMN IF NOT EXISTS attempt_count integer DEFAULT 1;
ALTER TABLE public.user_questions ADD COLUMN IF NOT EXISTS max_attempts_reached boolean DEFAULT false;

-- Create a function to calculate XP requirements based on incremental leveling
CREATE OR REPLACE FUNCTION public.calculate_xp_for_level(level_num integer)
RETURNS integer
LANGUAGE plpgsql
AS $$
BEGIN
  -- Incremental leveling: XP_required = 100 * level + (level ^ 2) * 5
  RETURN (100 * level_num) + (level_num * level_num * 5);
END;
$$;

-- Create a function to calculate level from XP
CREATE OR REPLACE FUNCTION public.calculate_level_from_xp(total_xp integer)
RETURNS integer
LANGUAGE plpgsql
AS $$
DECLARE
  level_num integer := 1;
  cumulative_xp integer := 0;
  level_xp integer;
BEGIN
  WHILE cumulative_xp <= total_xp LOOP
    level_xp := public.calculate_xp_for_level(level_num);
    cumulative_xp := cumulative_xp + level_xp;
    
    IF cumulative_xp <= total_xp THEN
      level_num := level_num + 1;
    END IF;
    
    -- Safety check to prevent infinite loops
    IF level_num > 100 THEN
      EXIT;
    END IF;
  END LOOP;
  
  RETURN level_num;
END;
$$;

-- Create a function to calculate title based on rank percentile
CREATE OR REPLACE FUNCTION public.calculate_title_from_rank(user_rank integer, total_users integer)
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
  percentile numeric;
BEGIN
  -- Special titles for top 3
  IF user_rank = 1 THEN
    RETURN 'CEO';
  ELSIF user_rank = 2 THEN
    RETURN 'CFO';
  ELSIF user_rank = 3 THEN
    RETURN 'CIO';
  END IF;
  
  -- Calculate percentile (higher rank = lower percentile)
  percentile := (1.0 - (user_rank - 1.0) / total_users::numeric) * 100;
  
  -- Assign titles based on percentile
  IF percentile >= 99.9 THEN
    RETURN 'Partner';
  ELSIF percentile >= 99 THEN
    RETURN 'Managing Director';
  ELSIF percentile >= 95 THEN
    RETURN 'Vice President';
  ELSIF percentile >= 90 THEN
    RETURN 'Associate';
  ELSIF percentile >= 80 THEN
    RETURN 'Analyst';
  ELSE
    RETURN 'Intern';
  END IF;
END;
$$;

-- Update all user levels based on new incremental system
UPDATE public.profiles 
SET level = public.calculate_level_from_xp(xp);

-- Add a trigger to automatically update levels when XP changes
CREATE OR REPLACE FUNCTION public.update_level_on_xp_change()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.level := public.calculate_level_from_xp(NEW.xp);
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_level_trigger
  BEFORE UPDATE OF xp ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_level_on_xp_change();