import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useProfile } from './useProfile';
import { XP_VALUES } from '@/types/drill';
import { BADGES } from '@/types/leaderboard';

export interface SolvedQuestion {
  id: string;
  user_id: string;
  question_id: string;
  solved_correctly: boolean;
  xp_earned: number;
  difficulty: string;
  track: string;
  solved_at: string;
}

export const useQuestions = () => {
  const { user } = useAuth();
  const { profile, addXP, updateTrackProgress, updateProfile } = useProfile();
  const [solvedQuestions, setSolvedQuestions] = useState<SolvedQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSolvedQuestions = async () => {
    if (!user) {
      setSolvedQuestions([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_questions')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      setSolvedQuestions(data || []);
    } catch (error) {
      console.error('Error fetching solved questions:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkBadgeUnlocked = (badgeId: string, currentBadges: any[], newSolvedQuestions: SolvedQuestion[], currentProfile: any): boolean => {
    // Don't re-award badges
    if (currentBadges.some((badge: any) => badge.id === badgeId)) return false;

    const correctAnswers = newSolvedQuestions.filter(q => q.solved_correctly);
    
    switch (badgeId) {
      case 'accounting-apprentice':
        return correctAnswers.filter(q => q.track === 'accounting').length >= 4;
      
      case 'valuation-strategist':
        return correctAnswers.some(q => q.track === 'valuation' && q.difficulty === 'medium');
      
      case 'lbo-operator':
        return correctAnswers.some(q => q.track === 'lbo' && q.difficulty === 'interview-ready');
      
      case 'ma-architect':
        return correctAnswers.filter(q => q.track === 'ma' && (q.difficulty === 'hard' || q.difficulty === 'interview-ready')).length >= 10;
      
      case 'weekend-warrior':
        return currentProfile?.streak >= 3;
      
      case 'ten-day-tear':
        return currentProfile?.streak >= 10;
      
      case 'technical-titan':
        return currentProfile?.xp >= 5000;
      
      case 'all-track-master':
        const tracks = ['accounting', 'valuation', 'lbo', 'ma'];
        return tracks.every(track => 
          correctAnswers.some(q => q.track === track && q.difficulty === 'interview-ready')
        );
      
      default:
        return false;
    }
  };

  const submitAnswer = async (questionId: string, isCorrect: boolean, difficulty: string, track: string) => {
    if (!user || !profile) return false;

    try {
      // Check if question was already solved
      const existingAnswer = solvedQuestions.find(q => q.question_id === questionId);
      if (existingAnswer?.solved_correctly) {
        return false; // Already solved correctly, no XP awarded
      }

      const xpEarned = isCorrect ? XP_VALUES[difficulty as keyof typeof XP_VALUES] : 0;

      // Insert or update the question attempt
      const { error: insertError } = await supabase
        .from('user_questions')
        .upsert({
          user_id: user.id,
          question_id: questionId,
          solved_correctly: isCorrect,
          xp_earned: xpEarned,
          difficulty,
          track,
          solved_at: new Date().toISOString()
        });

      if (insertError) throw insertError;

      if (isCorrect && xpEarned > 0) {
        // Add XP and update profile
        await addXP(xpEarned, difficulty);

        // Update track progress
        const currentTrackProgress = profile.track_progress || {};
        const trackData = currentTrackProgress[track] || { completed: 0, total: 4 };
        
        if (!existingAnswer) {
          await updateTrackProgress(track, trackData.completed + 1, 4);
        }

        // Check for new badges
        const updatedSolvedQuestions = await fetchSolvedQuestions();
        const newBadges = [...(profile.badges || [])];
        
        BADGES.forEach(badge => {
          if (checkBadgeUnlocked(badge.id, newBadges, solvedQuestions, profile)) {
            newBadges.push({ ...badge, unlocked: true });
          }
        });

        if (newBadges.length > (profile.badges || []).length) {
          await updateProfile({ badges: newBadges });
        }
      }

      await fetchSolvedQuestions();
      return true;
    } catch (error) {
      console.error('Error submitting answer:', error);
      return false;
    }
  };

  const isQuestionSolved = (questionId: string): boolean => {
    return solvedQuestions.some(q => q.question_id === questionId && q.solved_correctly);
  };

  const getQuestionXP = (questionId: string): number => {
    const solved = solvedQuestions.find(q => q.question_id === questionId && q.solved_correctly);
    return solved ? solved.xp_earned : 0;
  };

  useEffect(() => {
    fetchSolvedQuestions();
  }, [user]);

  // Set up real-time subscription
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('user_questions_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_questions',
          filter: `user_id=eq.${user.id}`
        },
        () => {
          fetchSolvedQuestions();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  return {
    solvedQuestions,
    loading,
    submitAnswer,
    isQuestionSolved,
    getQuestionXP,
    refetch: fetchSolvedQuestions
  };
};