import ProblemCard, { ProblemCardData } from '@/features/problems/components/ProblemCard';
import { memo } from 'react';
import { XP_VALUES } from '@/types/drill';

interface ProblemsListProps {
  questions: ProblemCardData[];
  isQuestionSolved: (id: string) => boolean;
  getQuestionXP: (id: string) => number;
  onStart: (id: string) => void;
}

const ProblemsList = ({ questions, isQuestionSolved, getQuestionXP, onStart }: ProblemsListProps) => {
  return (
    <div className="space-y-3">
      {questions.map((q, idx) => {
        const solved = isQuestionSolved(q.id);
        const earned = getQuestionXP(q.id);
        const baseXP = XP_VALUES[q.difficulty];
        return (
          <ProblemCard
            key={q.id}
            question={q}
            index={idx}
            isSolved={solved}
            earnedXP={earned}
            baseXP={baseXP}
            onStart={onStart}
          />
        );
      })}
    </div>
  );
};

export default memo(ProblemsList);
