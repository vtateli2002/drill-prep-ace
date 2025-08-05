-- Update existing user XP values to reflect new system
-- This will reset everyone's difficulty XP to demonstrate the new values

UPDATE public.profiles 
SET difficulty_xp = jsonb_build_object(
  'easy', 10,
  'medium', 50, 
  'hard', 100,
  'interview_ready', 250
)
WHERE NOT is_bot;