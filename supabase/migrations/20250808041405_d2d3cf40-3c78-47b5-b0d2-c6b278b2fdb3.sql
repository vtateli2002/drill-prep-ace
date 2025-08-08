-- Ensure required extensions (idempotent)
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- Recompute titles and current_rank with proper casts
WITH ordered AS (
  SELECT 
    id,
    row_number() OVER (ORDER BY xp DESC) AS rnk,
    count(*) OVER () AS total
  FROM public.profiles
)
UPDATE public.profiles p
SET 
  current_rank = (o.rnk)::integer,
  rank = public.calculate_title_from_rank((o.rnk)::integer, (o.total)::integer),
  updated_at = now()
FROM ordered o
WHERE p.id = o.id;

-- Idempotently reschedule ai-leaderboard-tick every 10 minutes
DO $$
BEGIN
  PERFORM cron.unschedule('ai-leaderboard-tick-every-10m');
EXCEPTION WHEN OTHERS THEN
  NULL;
END $$;

SELECT cron.schedule(
  'ai-leaderboard-tick-every-10m',
  '*/10 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://mvyhclgxuraxphrnjbsi.supabase.co/functions/v1/ai-leaderboard-tick',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eWhjbGd4dXJheHBocm5qYnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDMzMzgsImV4cCI6MjA2OTkxOTMzOH0.-ZneUZMRvVw4RFICgDoxbEPnlvJfgsLqfYgvdlEBuag"}'::jsonb,
    body := jsonb_build_object('source', 'cron', 'invoked_at', now())
  );
  $$
);

-- Immediate one-off run
SELECT net.http_post(
  url := 'https://mvyhclgxuraxphrnjbsi.supabase.co/functions/v1/ai-leaderboard-tick',
  headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eWhjbGd4dXJheHBocm5qYnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDMzMzgsImV4cCI6MjA2OTkxOTMzOH0.-ZneUZMRvVw4RFICgDoxbEPnlvJfgsLqfYgvdlEBuag"}'::jsonb,
  body := '{"source":"manual-migration"}'::jsonb
);