import { Difficulty, Track } from '@/types/drill';
import { getDifficultyConfig } from '@/features/problems/utils/configs';

export interface QuestionItem {
  id: string;
  title: string;
  track: Track;
  difficulty: Difficulty;
}

export type CompletionFilter = 'all' | 'completed' | 'incomplete';

export const getFilteredProblems = (
  questions: QuestionItem[],
  selectedTrack: Track | 'all',
  selectedDifficulty: Difficulty | 'all',
  completionFilter: CompletionFilter,
  isQuestionSolved: (id: string) => boolean,
) => {
  let filtered = questions;

  if (selectedDifficulty !== 'all') {
    filtered = filtered.filter((q) => q.difficulty === selectedDifficulty);
  }

  filtered = filtered.filter((q) => {
    const trackMatches = selectedTrack === 'all' || q.track === selectedTrack;
    const isSolved = isQuestionSolved(q.id);
    const completionMatches =
      completionFilter === 'all' ||
      (completionFilter === 'completed' && isSolved) ||
      (completionFilter === 'incomplete' && !isSolved);
    return trackMatches && completionMatches;
  });

  return filtered;
};
