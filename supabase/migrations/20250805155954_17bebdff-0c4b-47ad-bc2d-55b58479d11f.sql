-- Add rank_change column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN rank_change integer DEFAULT 0;