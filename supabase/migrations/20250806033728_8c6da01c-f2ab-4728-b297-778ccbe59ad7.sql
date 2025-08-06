-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Enable pg_net extension if not already enabled  
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a cron job to update AI rival XP daily at midnight UTC
SELECT cron.schedule(
  'update-ai-rival-xp-daily',
  '0 0 * * *', -- Run daily at midnight UTC
  $$
  SELECT
    net.http_post(
        url:='https://mvyhclgxuraxphrnjbsi.supabase.co/functions/v1/update-ai-rival-xp',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eWhjbGd4dXJheHBocm5qYnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDMzMzgsImV4cCI6MjA2OTkxOTMzOH0.-ZneUZMRvVw4RFICgDoxbEPnlvJfgsLqfYgvdlEBuag"}'::jsonb,
        body:='{"source": "cron"}'::jsonb
    ) as request_id;
  $$
);