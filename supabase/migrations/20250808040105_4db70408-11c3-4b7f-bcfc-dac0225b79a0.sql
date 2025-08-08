-- Schedule ai-leaderboard-tick every 10 minutes
-- Ensure pg_cron/pg_net are available in the project; create or replace the cron job idempotently
select cron.unschedule('ai-leaderboard-tick-every-10m');
select cron.schedule(
  'ai-leaderboard-tick-every-10m',
  '*/10 * * * *',
  $$
  select
    net.http_post(
      url := 'https://mvyhclgxuraxphrnjbsi.supabase.co/functions/v1/ai-leaderboard-tick',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eWhjbGd4dXJheHBocm5qYnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDMzMzgsImV4cCI6MjA2OTkxOTMzOH0.-ZneUZMRvVw4RFICgDoxbEPnlvJfgsLqfYgvdlEBuag"}'::jsonb,
      body := jsonb_build_object('source', 'cron', 'invoked_at', now())
    );
  $$
);