export type Track = 'accounting' | 'valuation' | 'lbo' | 'ma';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  track: Track;
  difficulty: Difficulty;
  title: string;
  description: string;
  answer: number | string;
  unit?: string;
  hint?: string;
  explanation?: string;
  learnContent?: {
    concept: string;
    formula: string;
    example: string;
  };
}

export interface UserProgress {
  totalXP: number;
  level: number;
  streak: number;
  trackProgress: Record<Track, {
    completed: number;
    total: number;
    xp: number;
  }>;
}

export interface AIRival {
  name: string;
  totalXP: number;
  dailyXPGoal: number;
  daysRemaining: number;
}

export interface GameSession {
  showInstruction: boolean;
  currentTrack?: Track;
  currentQuestion?: Question;
}

export const XP_VALUES: Record<Difficulty, number> = {
  'easy': 10,
  'medium': 50,
  'hard': 100
};

export const TRACK_NAMES: Record<Track, string> = {
  'accounting': 'Accounting',
  'valuation': 'Valuation',
  'lbo': 'LBO',
  'ma': 'M&A'
};

export const TRACK_COLORS: Record<Track, string> = {
  'accounting': 'tracks-accounting',
  'valuation': 'tracks-valuation',
  'lbo': 'tracks-lbo',
  'ma': 'tracks-ma'
};