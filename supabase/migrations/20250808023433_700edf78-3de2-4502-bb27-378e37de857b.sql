-- 1) Add columns to store rival selection and onboarding plan
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS rival_id TEXT CHECK (rival_id IN ('constance','chadson','chartreuse')),
ADD COLUMN IF NOT EXISTS onboarding_plan JSONB DEFAULT '{}'::jsonb,
ADD COLUMN IF NOT EXISTS onboarding_started_at DATE;

-- 2) Helper function to safely read integer from JSONB
CREATE OR REPLACE FUNCTION public.jsonb_int(js JSONB, key TEXT, default_val INT)
RETURNS INT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $$
DECLARE
  val INT;
BEGIN
  BEGIN
    val := (js ->> key)::INT;
  EXCEPTION WHEN OTHERS THEN
    val := NULL;
  END;
  RETURN COALESCE(val, default_val);
END;
$$;

-- 3) Update daily rival XP logic to consider rival style and onboarding plan
CREATE OR REPLACE FUNCTION public.update_rival_xp_daily()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  profile_record RECORD;
  today_dow INT; -- 0=Sunday ... 6=Saturday
  total_site_xp INT := 15720; -- current total site XP
  target_share NUMERIC := 0.5; -- rival aims for ~50% of site XP over plan window
  plan_days INT;
  avg_daily INT;
  daily_xp_gain INT;
  started_at DATE;
  days_since_start INT;
BEGIN
  today_dow := EXTRACT(DOW FROM CURRENT_DATE)::INT;

  FOR profile_record IN 
    SELECT id, rival_xp, rival_id, onboarding_plan, onboarding_started_at, created_at
    FROM public.profiles
    WHERE is_bot = false
  LOOP
    -- Derive plan days: prefer explicit timeline_days in onboarding_plan; fallback to 30
    plan_days := public.jsonb_int(COALESCE(profile_record.onboarding_plan, '{}'::jsonb), 'timeline_days', 30);

    -- Average daily target so rival hits ~50% of site XP by end of plan
    avg_daily := GREATEST(10, CEIL((total_site_xp * target_share) / GREATEST(plan_days, 1))::INT);

    -- Start date for plan
    started_at := COALESCE(profile_record.onboarding_started_at, profile_record.created_at::date);
    days_since_start := GREATEST((CURRENT_DATE - started_at), 0);

    -- Default behavior if no rival selected
    IF profile_record.rival_id IS NULL THEN
      daily_xp_gain := avg_daily; -- sensible default aligned with plan length
    ELSE
      CASE profile_record.rival_id
        WHEN 'constance' THEN
          -- Consistent, technical grinder
          daily_xp_gain := avg_daily; -- constant pace
        WHEN 'chadson' THEN
          -- Erratic: spikes on Mon(1), Wed(3), Fri(5). Other days lighter.
          IF today_dow IN (1,3,5) THEN
            daily_xp_gain := ROUND(avg_daily * 2.2);
          ELSE
            daily_xp_gain := ROUND(avg_daily * 0.5);
          END IF;
        WHEN 'chartreuse' THEN
          -- Chaotic bursts: some days huge spikes, many days idle; average ~0.8x avg_daily
          IF random() < 0.22 THEN           -- ~2 bursts/week
            daily_xp_gain := ROUND(avg_daily * 5);
          ELSIF random() < 0.18 THEN        -- moderate burst
            daily_xp_gain := ROUND(avg_daily * 2);
          ELSE
            daily_xp_gain := 0;              -- quiet day
          END IF;
          -- Nudge towards 80% of avg over time by minimum floor on zero days
          IF daily_xp_gain = 0 THEN
            daily_xp_gain := CASE WHEN random() < 0.3 THEN 10 ELSE 0 END;
          END IF;
        ELSE
          daily_xp_gain := avg_daily; -- fallback
      END CASE;
    END IF;

    -- Safety bounds
    daily_xp_gain := GREATEST(daily_xp_gain, 0);

    -- Update rival XP
    UPDATE public.profiles 
    SET 
      rival_xp = GREATEST(0, rival_xp + daily_xp_gain),
      updated_at = now()
    WHERE id = profile_record.id;
  END LOOP;
END;
$function$;