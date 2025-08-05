-- Add rank_change column to profiles table for leaderboard movement tracking
ALTER TABLE public.profiles 
ADD COLUMN rank_change INTEGER DEFAULT 0;