import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useProfile } from './useProfile';
import { XP_VALUES } from '@/types/drill';


export interface SolvedQuestion {
  id: string;
  user_id: string;
  question_id: string;
  solved_correctly: boolean;
  xp_earned: number;
  difficulty: string;
  track: string;
  solved_at: string;
  attempt_count?: number;
  max_attempts_reached?: boolean;
}

export const useQuestions = () => {
  const { user } = useAuth();
  const { profile, addXP, updateTrackProgress, updateProfile } = useProfile();
  const [solvedQuestions, setSolvedQuestions] = useState<SolvedQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [newBadge, setNewBadge] = useState<any>(null);

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

  const checkBadgeUnlocked = async (badgeId: string, currentBadges: any[], newSolvedQuestions: SolvedQuestion[], currentProfile: any): Promise<boolean> => {
    // Don't re-award badges
    if (currentBadges.some((badge: any) => badge.id === badgeId)) return false;

    const correctAnswers = newSolvedQuestions.filter(q => q.solved_correctly);
    
    // Import questions data to count actual available questions by track
    const { QUESTIONS } = await import('@/data/questions');
    
    // Count actual questions per track from the questions data
    const questionsByTrack = {
      accounting: QUESTIONS.filter(q => q.track === 'accounting').length,
      valuation: QUESTIONS.filter(q => q.track === 'valuation').length,
      lbo: QUESTIONS.filter(q => q.track === 'lbo').length,
      ma: QUESTIONS.filter(q => q.track === 'ma').length
    };
    
    switch (badgeId) {
      case 'accounting-apprentice':
        // Must solve ALL accounting questions available
        const accountingSolved = correctAnswers.filter(q => q.track === 'accounting').length;
        return accountingSolved >= questionsByTrack.accounting;
      
      case 'valuation-strategist':
        // Must solve ALL valuation questions available
        const valuationSolved = correctAnswers.filter(q => q.track === 'valuation').length;
        return valuationSolved >= questionsByTrack.valuation;
      
      case 'lbo-operator':
        // Must solve ALL LBO questions available
        const lboSolved = correctAnswers.filter(q => q.track === 'lbo').length;
        return lboSolved >= questionsByTrack.lbo;
      
      case 'ma-architect':
        // Must solve ALL M&A questions available
        const maSolved = correctAnswers.filter(q => q.track === 'ma').length;
        return maSolved >= questionsByTrack.ma;
      
      case 'weekend-warrior':
        return currentProfile?.streak >= 3;
      
      case 'ten-day-tear':
        return currentProfile?.streak >= 10;
      
      case 'technical-titan':
        return currentProfile?.xp >= 5000;
      
      case 'all-track-master':
        // Must complete ALL questions in ALL tracks
        const tracks = ['accounting', 'valuation', 'lbo', 'ma'];
        return tracks.every(track => {
          const trackSolved = correctAnswers.filter(q => q.track === track).length;
          return trackSolved >= questionsByTrack[track as keyof typeof questionsByTrack];
        });
      
      default:
        return false;
    }
  };

  const submitAnswer = async (questionId: string, isCorrect: boolean, difficulty: string, track: string) => {
    if (!user || !profile) return false;

    try {
      // Check if question was already solved correctly
      const existingAnswer = solvedQuestions.find(q => q.question_id === questionId);
      if (existingAnswer?.solved_correctly) {
        return false; // Already solved correctly, no XP awarded
      }

      // Check attempt count - max 3 attempts for XP
      const currentAttempts = existingAnswer?.attempt_count || 0;
      if (currentAttempts >= 3) {
        return false; // Max attempts reached, no XP possible even if correct
      }

      const xpEarned = isCorrect ? XP_VALUES[difficulty as keyof typeof XP_VALUES] : 0;
      const newAttemptCount = currentAttempts + 1;
      const maxAttemptsReached = newAttemptCount >= 3 && !isCorrect;

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
          solved_at: new Date().toISOString(),
          attempt_count: newAttemptCount,
          max_attempts_reached: maxAttemptsReached
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

        // Badges temporarily disabled during new tier rollout
        await fetchSolvedQuestions();
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
    refetch: fetchSolvedQuestions,
    newBadge,
    clearNewBadge: () => setNewBadge(null)
  };
};