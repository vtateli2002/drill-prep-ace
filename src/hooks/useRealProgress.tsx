import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { useQuestions } from './useQuestions';
import { QUESTIONS } from '@/data/questions';
import { Track, Difficulty, XP_VALUES } from '@/types/drill';

export interface TrackStats {
  completed: number;
  total: number;
  xp: number;
}

export interface DifficultyStats {
  easy: number;
  medium: number;
  hard: number;
  interview_ready: number;
}

export const useRealProgress = () => {
  const { user } = useAuth();
  const { solvedQuestions, loading } = useQuestions();
  const [trackStats, setTrackStats] = useState<Record<Track, TrackStats>>({
    accounting: { completed: 0, total: 0, xp: 0 },
    valuation: { completed: 0, total: 0, xp: 0 },
    lbo: { completed: 0, total: 0, xp: 0 },
    ma: { completed: 0, total: 0, xp: 0 }
  });
  const [difficultyXP, setDifficultyXP] = useState<DifficultyStats>({
    easy: 0,
    medium: 0,
    hard: 0,
    interview_ready: 0
  });

  useEffect(() => {
    if (!user || loading) return;

    // Count total questions per track from QUESTIONS data
    const totalsByTrack: Record<Track, number> = {
      accounting: QUESTIONS.filter(q => q.track === 'accounting').length,
      valuation: QUESTIONS.filter(q => q.track === 'valuation').length,
      lbo: QUESTIONS.filter(q => q.track === 'lbo').length,
      ma: QUESTIONS.filter(q => q.track === 'ma').length
    };

    // Calculate completed and XP per track from solved questions
    const correctlySolved = solvedQuestions.filter(q => q.solved_correctly);
    
    const newTrackStats: Record<Track, TrackStats> = {
      accounting: { completed: 0, total: totalsByTrack.accounting, xp: 0 },
      valuation: { completed: 0, total: totalsByTrack.valuation, xp: 0 },
      lbo: { completed: 0, total: totalsByTrack.lbo, xp: 0 },
      ma: { completed: 0, total: totalsByTrack.ma, xp: 0 }
    };

    // Calculate XP by difficulty
    const newDifficultyXP: DifficultyStats = {
      easy: 0,
      medium: 0,
      hard: 0,
      interview_ready: 0
    };

    correctlySolved.forEach(question => {
      const track = question.track as Track;
      const difficulty = question.difficulty as Difficulty;

      if (newTrackStats[track]) {
        newTrackStats[track].completed += 1;
        newTrackStats[track].xp += question.xp_earned;
      }

      if (newDifficultyXP.hasOwnProperty(difficulty)) {
        newDifficultyXP[difficulty] += question.xp_earned;
      }
    });

    setTrackStats(newTrackStats);
    setDifficultyXP(newDifficultyXP);
  }, [user, solvedQuestions, loading]);

  return {
    trackStats,
    difficultyXP,
    loading
  };
};