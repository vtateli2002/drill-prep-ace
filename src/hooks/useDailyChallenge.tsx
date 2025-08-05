import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { Question, Track, Difficulty } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';

interface DailyChallenge {
  id: string;
  user_id: string;
  challenge_date: string;
  question_ids: string[];
  completed_questions: string[];
}

interface UseDailyChallengeReturn {
  todaysChallenge: Question[] | null;
  loading: boolean;
  error: string | null;
  generateTodaysChallenge: () => Promise<void>;
  completeChallengeQuestion: (questionId: string) => Promise<void>;
  isQuestionCompleted: (questionId: string) => boolean;
}

export const useDailyChallenge = (): UseDailyChallengeReturn => {
  const [todaysChallenge, setTodaysChallenge] = useState<Question[] | null>(null);
  const [challengeData, setChallengeData] = useState<DailyChallenge | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchTodaysChallenge = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const { data, error } = await supabase
        .from('daily_challenges')
        .select('*')
        .eq('user_id', user.id)
        .eq('challenge_date', today)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setChallengeData(data);
        const questions = data.question_ids.map(id => 
          QUESTIONS.find(q => q.id === id)
        ).filter(Boolean) as Question[];
        setTodaysChallenge(questions);
      } else {
        setTodaysChallenge(null);
        setChallengeData(null);
      }
    } catch (err) {
      console.error('Error fetching daily challenge:', err);
      setError('Failed to fetch daily challenge');
    } finally {
      setLoading(false);
    }
  };

  const generateTodaysChallenge = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const today = new Date().toISOString().split('T')[0];

      // Get user's completed questions from the last 7 days to avoid repeats
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const { data: recentChallenges } = await supabase
        .from('daily_challenges')
        .select('question_ids')
        .eq('user_id', user.id)
        .gte('challenge_date', sevenDaysAgo.toISOString().split('T')[0]);

      const recentQuestionIds = new Set(
        recentChallenges?.flatMap(c => c.question_ids) || []
      );

      // Generate 4 questions: 1 from each track, 1 from each difficulty
      const tracks: Track[] = ['accounting', 'valuation', 'lbo', 'ma'];
      const difficulties: Difficulty[] = ['easy', 'medium', 'hard', 'interview-ready'];
      
      const selectedQuestions: Question[] = [];
      const usedQuestions = new Set<string>();

      // Shuffle tracks and difficulties for random pairing
      const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);
      const shuffledDifficulties = [...difficulties].sort(() => Math.random() - 0.5);

      for (let i = 0; i < 4; i++) {
        const track = shuffledTracks[i];
        const difficulty = shuffledDifficulties[i];

        // Find available questions for this track/difficulty combination
        const availableQuestions = QUESTIONS.filter(q => 
          q.track === track && 
          q.difficulty === difficulty && 
          !recentQuestionIds.has(q.id) &&
          !usedQuestions.has(q.id)
        );

        if (availableQuestions.length > 0) {
          const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
          selectedQuestions.push(randomQuestion);
          usedQuestions.add(randomQuestion.id);
        } else {
          // Fallback: get any question from this track if no difficulty-specific questions available
          const fallbackQuestions = QUESTIONS.filter(q => 
            q.track === track && 
            !usedQuestions.has(q.id)
          );
          if (fallbackQuestions.length > 0) {
            const randomQuestion = fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
            selectedQuestions.push(randomQuestion);
            usedQuestions.add(randomQuestion.id);
          }
        }
      }

      if (selectedQuestions.length === 4) {
        const { data, error } = await supabase
          .from('daily_challenges')
          .insert({
            user_id: user.id,
            challenge_date: today,
            question_ids: selectedQuestions.map(q => q.id),
            completed_questions: []
          })
          .select()
          .single();

        if (error) throw error;

        setChallengeData(data);
        setTodaysChallenge(selectedQuestions);
      } else {
        throw new Error('Could not generate 4 unique questions for today');
      }
    } catch (err) {
      console.error('Error generating daily challenge:', err);
      setError('Failed to generate daily challenge');
    } finally {
      setLoading(false);
    }
  };

  const completeChallengeQuestion = async (questionId: string) => {
    if (!challengeData) return;

    try {
      const updatedCompletedQuestions = [...challengeData.completed_questions, questionId];
      
      const { error } = await supabase
        .from('daily_challenges')
        .update({ completed_questions: updatedCompletedQuestions })
        .eq('id', challengeData.id);

      if (error) throw error;

      setChallengeData(prev => prev ? {
        ...prev,
        completed_questions: updatedCompletedQuestions
      } : null);
    } catch (err) {
      console.error('Error completing challenge question:', err);
    }
  };

  const isQuestionCompleted = (questionId: string): boolean => {
    return challengeData?.completed_questions.includes(questionId) || false;
  };

  useEffect(() => {
    fetchTodaysChallenge();
  }, [user]);

  return {
    todaysChallenge,
    loading,
    error,
    generateTodaysChallenge,
    completeChallengeQuestion,
    isQuestionCompleted
  };
};