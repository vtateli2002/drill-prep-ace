-- Reset existing badges data while keeping schema intact
begin;

-- Clear badge unlock history
DELETE FROM public.badge_unlocks;

-- Remove all badge definitions
DELETE FROM public.badges;

-- Reset embedded badges JSON on profiles
UPDATE public.profiles SET badges = '[]'::json;

commit;