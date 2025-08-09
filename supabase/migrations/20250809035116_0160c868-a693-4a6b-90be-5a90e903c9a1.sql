-- 1) POLICIES (SQL)
-- Ensure RLS enabled and idempotent policies exist
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "badges_read_all" ON public.badges FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

ALTER TABLE public.badge_unlocks ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  CREATE POLICY "unlocks_read_own" ON public.badge_unlocks FOR SELECT USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- 3) REALTIME: add to publication if not already present
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'badge_unlocks'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.badge_unlocks;
  END IF;
END $$;