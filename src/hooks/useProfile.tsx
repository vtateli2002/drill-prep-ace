import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';
import { RANK_TITLES } from '@/types/leaderboard';

export interface UserProfile {
  id: string;
  username: string;
  xp: number;
  rank: string;
  level: number;
  profile_pic?: string;
  badges: any;
  streak: number;
  track_progress: any;
  difficulty_xp: any;
  rival_xp: number;
  rival_id?: string | null;
  onboarding_plan?: any;
  onboarding_started_at?: string | null;
  interview_deadline?: string;
  created_at: string;
  updated_at: string;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !profile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) throw error;
      
      setProfile({ ...profile, ...updates });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const addXP = async (amount: number, difficulty: string) => {
    if (!profile) return;

    const newXP = profile.xp + amount;
    const newDifficultyXP = {
      ...profile.difficulty_xp,
      [difficulty]: (profile.difficulty_xp[difficulty] || 0) + amount
    };

    // Update XP and difficulty XP - level will be calculated automatically by trigger
    await updateProfile({
      xp: newXP,
      difficulty_xp: newDifficultyXP
    });
  };

  const updateTrackProgress = async (track: string, completed: number, total: number) => {
    if (!profile) return;

    const newTrackProgress = {
      ...profile.track_progress,
      [track]: { completed, total }
    };

    await updateProfile({
      track_progress: newTrackProgress
    });
  };

  const calculateXPForNextLevel = (currentLevel: number): number => {
    // Incremental leveling: XP_required = 100 * level + (level ^ 2) * 5
    return (100 * (currentLevel + 1)) + (Math.pow(currentLevel + 1, 2) * 5);
  };

  const calculatePercentile = async (currentXP: number): Promise<number> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('xp')
        .order('xp', { ascending: false });

      if (error || !data) return 50;

      const totalUsers = data.length;
      const usersAbove = data.filter(user => user.xp > currentXP).length;
      const percentile = Math.max(1, Math.round(((totalUsers - usersAbove) / totalUsers) * 100));
      
      return percentile;
    } catch (error) {
      console.error('Error calculating percentile:', error);
      return 50;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  // Set up real-time subscription
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('profile_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`
        },
        (payload) => {
          if (payload.eventType === 'UPDATE') {
            setProfile(payload.new as UserProfile);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  return {
    profile,
    loading,
    error,
    updateProfile,
    addXP,
    updateTrackProgress,
    calculatePercentile,
    calculateXPForNextLevel,
    refetch: fetchProfile
  };
};