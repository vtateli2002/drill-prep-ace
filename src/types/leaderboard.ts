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

export const BADGES: Badge[] = [
  // Track-Based Badges
  {
    id: 'accounting-apprentice',
    name: 'Accounting Apprentice',
    emoji: '📘',
    description: 'Complete 5 Accounting questions',
    type: 'track',
    unlocked: false
  },
  {
    id: 'valuation-strategist',
    name: 'Valuation Strategist',
    emoji: '📗',
    description: 'Complete all Medium Valuation questions',
    type: 'track',
    unlocked: false
  },
  {
    id: 'lbo-operator',
    name: 'LBO Operator',
    emoji: '📙',
    description: 'Complete all LBO Interview Ready questions',
    type: 'track',
    unlocked: false
  },
  {
    id: 'ma-architect',
    name: 'M&A Architect',
    emoji: '📕',
    description: 'Solve 10 M&A Hard+ questions',
    type: 'track',
    unlocked: false
  },
  // Streak-Based Badges
  {
    id: 'weekend-warrior',
    name: 'Weekend Warrior',
    emoji: '🔥',
    description: 'Solve questions 3 days in a row',
    type: 'streak',
    unlocked: false
  },
  {
    id: 'ten-day-tear',
    name: 'Ten Day Tear',
    emoji: '🔥',
    description: 'Maintain a 10-day activity streak',
    type: 'streak',
    unlocked: false
  },
  // Mastery Badges
  {
    id: 'technical-titan',
    name: 'Technical Titan',
    emoji: '🧠',
    description: 'Earn 5,000+ total XP',
    type: 'mastery',
    unlocked: false
  },
  {
    id: 'all-track-master',
    name: 'All-Track Master',
    emoji: '🧠',
    description: 'Solve at least one Interview Ready question in each track',
    type: 'mastery',
    unlocked: false
  }
];