export interface LeaderboardUser {
  username: string;
  xp: number;
  level: number;
  daily_movement: string;
  rank?: number;
  title?: string;
  badges?: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  type: 'track' | 'streak' | 'mastery' | 'rank';
  unlocked: boolean;
}

export interface UserProfile extends LeaderboardUser {
  trackProgress: Record<string, {
    completed: number;
    total: number;
  }>;
  xpByDifficulty: Record<string, number>;
  activityStreak: number;
}

export const RANK_TITLES = {
  'CEO': { xp: 0, emoji: '🥇' },
  'CFO': { xp: 0, emoji: '🥈' },
  'CIO': { xp: 0, emoji: '🥉' },
  'Partner': { xp: 0, emoji: '👑' },
  'Managing Director': { xp: 0, emoji: '🏦' },
  'Vice President': { xp: 0, emoji: '📊' },
  'Associate': { xp: 0, emoji: '📈' },
  'Analyst': { xp: 0, emoji: '💼' },
  'Intern': { xp: 0, emoji: '🎓' }
};

export const BADGES: Badge[] = [];
