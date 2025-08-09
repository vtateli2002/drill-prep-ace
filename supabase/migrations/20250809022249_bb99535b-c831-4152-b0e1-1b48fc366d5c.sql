-- Set XP for specific user to 9050 for leaderboard testing
UPDATE public.profiles
SET xp = 9050, updated_at = now()
WHERE id = '4ce315a4-de7c-4388-81f8-4c9f813aa7da';