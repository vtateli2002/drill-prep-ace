-- Enable required extensions for scheduling HTTP calls
create extension if not exists pg_net with schema extensions;
create extension if not exists pg_cron with schema extensions;

-- Schedule ai-leaderboard-tick to run every 10 minutes
select cron.schedule(
  'ai-leaderboard-tick-every-10-min',
  '*/10 * * * *',
  $$
  select
    net.http_post(
      url:='https://mvyhclgxuraxphrnjbsi.supabase.co/functions/v1/ai-leaderboard-tick',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eWhjbGd4dXJheHBocm5qYnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDMzMzgsImV4cCI6MjA2OTkxOTMzOH0.-ZneUZMRvVw4RFICgDoxbEPnlvJfgsLqfYgvdlEBuag"}'::jsonb,
      body:='{}'::jsonb
    ) as request_id;
  $$
);
