-- Fix security warnings by setting search_path for all functions

-- Update calculate_xp_for_level function
CREATE OR REPLACE FUNCTION public.calculate_xp_for_level(level_num integer)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  -- Incremental leveling: XP_required = 100 * level + (level ^ 2) * 5
  RETURN (100 * level_num) + (level_num * level_num * 5);
END;
$$;

-- Update calculate_level_from_xp function
CREATE OR REPLACE FUNCTION public.calculate_level_from_xp(total_xp integer)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
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

-- Update calculate_title_from_rank function
CREATE OR REPLACE FUNCTION public.calculate_title_from_rank(user_rank integer, total_users integer)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
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

-- Update update_level_on_xp_change function
CREATE OR REPLACE FUNCTION public.update_level_on_xp_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.level := public.calculate_level_from_xp(NEW.xp);
  RETURN NEW;
END;
$$;