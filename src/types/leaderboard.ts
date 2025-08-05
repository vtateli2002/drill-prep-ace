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
  'Partner': { threshold: 99.9, emoji: '👑' },
  'Managing Director': { threshold: 99, emoji: '🏦' },
  'Vice President': { threshold: 95, emoji: '📊' },
  'Associate': { threshold: 90, emoji: '📈' },
  'Analyst': { threshold: 80, emoji: '💼' },
  'Intern': { threshold: 50, emoji: '🎓' },
} as const;

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