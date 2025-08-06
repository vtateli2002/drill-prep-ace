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

      // Define required difficulties for daily challenge: 2 easy, 1 medium, 1 hard
      const requiredQuestionCounts = [
        { difficulty: 'easy', count: 2 },
        { difficulty: 'medium', count: 1 },
        { difficulty: 'hard', count: 1 }
      ];

      // Get questions by difficulty and track
      const questionsByDifficulty: { [key: string]: any[] } = {};
      
      questions.forEach(question => {
        if (!questionsByDifficulty[question.difficulty]) {
          questionsByDifficulty[question.difficulty] = [];
        }
        questionsByDifficulty[question.difficulty].push(question);
      });

      const selectedQuestions: string[] = [];
      const usedQuestions = new Set<string>();

      // Select questions according to the required difficulty distribution
      for (const requirement of requiredQuestionCounts) {
        const difficultyQuestions = questionsByDifficulty[requirement.difficulty] || [];
        const availableQuestions = difficultyQuestions.filter(q => 
          !recentQuestionIds.has(q.id) && !usedQuestions.has(q.id)
        );
        
        // Select the required number of questions for this difficulty
        for (let i = 0; i < requirement.count && availableQuestions.length > 0; i++) {
          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          const selectedQuestion = availableQuestions.splice(randomIndex, 1)[0];
          selectedQuestions.push(selectedQuestion.id);
          usedQuestions.add(selectedQuestion.id);
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
    console.log('Checking if question completed:', questionId);
    console.log('Challenge data:', challengeData);
    console.log('Completed questions:', challengeData?.completed_questions);
    return challengeData?.completed_questions?.includes(questionId) || false;
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