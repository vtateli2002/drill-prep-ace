import { Difficulty, XP_VALUES } from '@/types/drill';

export const calculateXP = (difficulty: Difficulty, isSolved: boolean, earnedXP: number) => {
  return isSolved ? earnedXP : XP_VALUES[difficulty];
};
