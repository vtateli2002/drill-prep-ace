import { Difficulty, Track } from '@/types/drill';
import { Target, Zap, Star } from 'lucide-react';

export const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
export const tracks: Track[] = ['accounting', 'valuation', 'ma', 'lbo'];

export const getDifficultyConfig = (difficulty: Difficulty) => {
  const configs = {
    easy: { color: 'bg-green-500 text-white border-green-400', icon: Target, label: 'Easy', gradient: 'from-green-500 to-green-600' },
    medium: { color: 'bg-blue-500 text-white border-blue-400', icon: Zap, label: 'Medium', gradient: 'from-blue-500 to-blue-600' },
    hard: { color: 'bg-orange-500 text-white border-orange-400', icon: Star, label: 'Hard', gradient: 'from-orange-500 to-orange-600' },
  } as const;
  return configs[difficulty];
};

export const getTrackConfig = (track: Track) => {
  const configs = {
    accounting: { label: 'Accounting', color: 'bg-blue-500 hover:bg-blue-600', icon: '📊' },
    valuation: { label: 'Valuation', color: 'bg-purple-500 hover:bg-purple-600', icon: '💰' },
    ma: { label: 'M&A', color: 'bg-green-500 hover:bg-green-600', icon: '🤝' },
    lbo: { label: 'LBO', color: 'bg-orange-500 hover:bg-orange-600', icon: '⚡' },
  } as const;
  return configs[track];
};
