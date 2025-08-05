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
    
    // Get total questions available in database for dynamic badge logic
    const { data: allQuestions } = await supabase
      .from('user_questions')
      .select('question_id, track, difficulty')
      .limit(1000); // Get a large sample to understand available questions

    // Count unique questions per track from database
    const uniqueQuestions = [...new Set(allQuestions?.map(q => q.question_id) || [])];
    const questionsByTrack = {
      accounting: uniqueQuestions.filter(id => id.startsWith('acc-')).length,
      valuation: uniqueQuestions.filter(id => id.startsWith('val-')).length,
      lbo: uniqueQuestions.filter(id => id.startsWith('lbo-')).length,
      ma: uniqueQuestions.filter(id => id.startsWith('ma-')).length
    };
    
    switch (badgeId) {
      case 'accounting-apprentice':
        // Must solve ALL accounting questions available
        const accountingSolved = correctAnswers.filter(q => q.track === 'accounting').length;
        return accountingSolved >= Math.max(4, questionsByTrack.accounting);
      
      case 'valuation-strategist':
        // Must solve ALL valuation questions available
        const valuationSolved = correctAnswers.filter(q => q.track === 'valuation').length;
        return valuationSolved >= Math.max(4, questionsByTrack.valuation);
      
      case 'lbo-operator':
        // Must solve ALL LBO questions available
        const lboSolved = correctAnswers.filter(q => q.track === 'lbo').length;
        return lboSolved >= Math.max(4, questionsByTrack.lbo);
      
      case 'ma-architect':
        // Must solve ALL M&A questions available
        const maSolved = correctAnswers.filter(q => q.track === 'ma').length;
        return maSolved >= Math.max(4, questionsByTrack.ma);
      
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
          return trackSolved >= Math.max(4, questionsByTrack[track as keyof typeof questionsByTrack]);
        });
      
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
        await fetchSolvedQuestions();
        const newBadges = [...(profile.badges || [])];
        
        for (const badge of BADGES) {
          const isUnlocked = await checkBadgeUnlocked(badge.id, newBadges, solvedQuestions, profile);
          if (isUnlocked) {
            newBadges.push({ ...badge, unlocked: true });
            setNewBadge(badge); // Show congratulations modal
          }
        }

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
    refetch: fetchSolvedQuestions,
    newBadge,
    clearNewBadge: () => setNewBadge(null)
  };
};