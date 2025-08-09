-- Update level and title for user vtateli2002 based on current XP and ranking
WITH totals AS (
  SELECT COUNT(*)::int AS total_users FROM public.profiles
),
user_ranks AS (
  SELECT id, RANK() OVER (ORDER BY xp DESC) AS user_rank
  FROM public.profiles
)
UPDATE public.profiles p
SET 
  level = public.calculate_level_from_xp(p.xp),
  current_rank = r.user_rank,
  rank = public.calculate_title_from_rank(r.user_rank, t.total_users),
  updated_at = now()
FROM user_ranks r, totals t
WHERE p.id = r.id AND p.id = '4ce315a4-de7c-4388-81f8-4c9f813aa7da';

-- Ensure level auto-updates whenever XP changes in the future
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_update_level_on_xp_change'
  ) THEN
    CREATE TRIGGER trg_update_level_on_xp_change
    BEFORE UPDATE OF xp ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_level_on_xp_change();
  END IF;
END $$;