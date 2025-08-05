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
  generateTodaysChallenge: () => Promise<boolean>;
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

  const generateTodaysChallenge = async (): Promise<boolean> => {
    if (!user) return false;

    try {
      setLoading(true);
      const today = new Date().toISOString().split('T')[0];

      // Use the imported questions data
      const questions = QUESTIONS;
      
      // Get recently used questions (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const { data: recentChallenges } = await supabase
        .from('daily_challenges')
        .select('question_ids')
        .eq('user_id', user.id)
        .gte('challenge_date', sevenDaysAgo.toISOString().split('T')[0]);

      const recentQuestionIds = new Set<string>();
      recentChallenges?.forEach(challenge => {
        challenge.question_ids.forEach((qId: string) => recentQuestionIds.add(qId));
      });

      // Define required tracks and difficulties for daily challenge
      const requiredTracks = ['accounting', 'valuation', 'lbo', 'ma'];
      const requiredDifficulties = ['easy', 'medium', 'hard', 'interview_ready'];

      // Get questions by track and difficulty
      const questionsByTrack: { [key: string]: any[] } = {};
      const questionsByDifficulty: { [key: string]: any[] } = {};
      
      questions.forEach(question => {
        if (!questionsByTrack[question.track]) {
          questionsByTrack[question.track] = [];
        }
        if (!questionsByDifficulty[question.difficulty]) {
          questionsByDifficulty[question.difficulty] = [];
        }
        questionsByTrack[question.track].push(question);
        questionsByDifficulty[question.difficulty].push(question);
      });

      const selectedQuestions: string[] = [];
      const usedQuestions = new Set<string>();

      // First, select one question from each track
      for (const track of requiredTracks) {
        const trackQuestions = questionsByTrack[track] || [];
        const availableQuestions = trackQuestions.filter(q => 
          !recentQuestionIds.has(q.id) && !usedQuestions.has(q.id)
        );
        
        if (availableQuestions.length > 0) {
          const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
          selectedQuestions.push(randomQuestion.id);
          usedQuestions.add(randomQuestion.id);
        }
      }

      // Then ensure we have one of each difficulty, replacing if needed
      for (const difficulty of requiredDifficulties) {
        const hasThisDifficulty = selectedQuestions.some(qId => {
          const question = questions.find(q => q.id === qId);
          return question?.difficulty === difficulty;
        });

        if (!hasThisDifficulty) {
          const difficultyQuestions = questionsByDifficulty[difficulty] || [];
          const availableQuestions = difficultyQuestions.filter(q => 
            !recentQuestionIds.has(q.id) && !usedQuestions.has(q.id)
          );
          
          if (availableQuestions.length > 0) {
            const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
            // Replace a question if we already have 4, otherwise add
            if (selectedQuestions.length >= 4) {
              selectedQuestions[Math.floor(Math.random() * selectedQuestions.length)] = randomQuestion.id;
            } else {
              selectedQuestions.push(randomQuestion.id);
            }
            usedQuestions.add(randomQuestion.id);
          }
        }
      }

      // Ensure we have exactly 4 questions
      if (selectedQuestions.length !== 4) {
        console.warn('Could not generate daily challenge with 4 unique questions');
        return false;
      }

      // Save the challenge to database
      const { data, error } = await supabase
        .from('daily_challenges')
        .insert({
          user_id: user.id,
          challenge_date: today,
          question_ids: selectedQuestions,
          completed_questions: []
        })
        .select()
        .single();

      if (error) throw error;

      // Get the actual question objects
      const challengeQuestions = selectedQuestions.map(id => 
        questions.find(q => q.id === id)
      ).filter(Boolean) as Question[];

      setChallengeData(data);
      setTodaysChallenge(challengeQuestions);
      return true;
    } catch (err) {
      console.error('Error generating daily challenge:', err);
      setError('Failed to generate daily challenge');
      return false;
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