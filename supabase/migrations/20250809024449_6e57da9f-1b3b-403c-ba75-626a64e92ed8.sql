-- Overloaded RPC to support client usage: rpc('get_current_streak', { p_user, p_tz })
-- Uses attempts table and enforces auth.uid() = p_user; respects timezone parameter
CREATE OR REPLACE FUNCTION public.get_current_streak(p_user uuid, p_tz text DEFAULT 'UTC')
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  tz text := coalesce(nullif(p_tz, ''), 'UTC');
  uid uuid := auth.uid();
  d date := (now() at time zone tz)::date;
  streak int := 0;
BEGIN
  -- Only allow fetching your own streak
  IF uid IS NULL OR uid <> p_user THEN
    RETURN 0;
  END IF;

  LOOP
    EXIT WHEN NOT EXISTS (
      SELECT 1
      FROM public.attempts a
      WHERE a.user_id = p_user
        AND a.is_correct = true
        AND (a.created_at at time zone tz)::date = d
    );
    streak := streak + 1;
    d := d - interval '1 day';
  END LOOP;
  RETURN streak;
END;
$function$;