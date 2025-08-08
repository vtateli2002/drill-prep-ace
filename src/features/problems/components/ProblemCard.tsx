import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Difficulty, Track } from '@/types/drill';
import { formatTrackName } from '@/features/problems/utils/formatTrackName';
import { getDifficultyConfig } from '@/features/problems/utils/configs';
import QuestionProgress from '@/features/problems/components/QuestionProgress';
import { memo } from 'react';

export interface ProblemCardData {
  id: string;
  title: string;
  track: Track;
  difficulty: Difficulty;
}

interface ProblemCardProps {
  question: ProblemCardData;
  index: number;
  isSolved: boolean;
  earnedXP: number;
  baseXP: number;
  onStart: (id: string) => void;
}

const ProblemCard = ({ question, index, isSolved, earnedXP, baseXP, onStart }: ProblemCardProps) => {
  const diffCfg = getDifficultyConfig(question.difficulty);

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-200 cursor-pointer ${
        isSolved
          ? 'border-l-4 border-l-success bg-success/5 ring-2 ring-success/40 bg-gradient-to-r from-success/10 to-success/5 border-success/30'
          : 'border-l-4 border-l-blue-500 bg-blue-500/10 hover:bg-blue-500/15 border-blue-500/30'
      } hover:shadow-lg hover:scale-[1.01]`}
      onClick={() => onStart(question.id)}
    >
      <div className="p-5">
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              isSolved ? 'bg-success text-success-foreground' : 'bg-primary/10 text-primary'
            } font-bold text-sm border-2 ${isSolved ? 'border-success' : 'border-primary/20'}`}
          >
            {isSolved ? <CheckCircle className="h-5 w-5" /> : index + 1}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {question.title}
              </h3>
              <span className="text-xs bg-gray-600 text-white px-2 py-0.5 rounded font-mono">
                {question.difficulty}
              </span>
              {isSolved && (
                <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full font-medium">Solved</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground font-medium">{formatTrackName(question.track)}</p>
          </div>

          <div className="flex flex-col items-center gap-1 min-w-[100px]">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${diffCfg.color} shadow-sm`}>
              <diffCfg.icon className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold">{diffCfg.label}</span>
            </div>
          </div>

          <QuestionProgress value={isSolved ? earnedXP : baseXP} />

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onStart(question.id);
            }}
            size="sm"
            variant={isSolved ? 'outline' : 'default'}
            className="min-w-[80px] font-semibold"
          >
            {isSolved ? 'Review' : 'Solve'}
          </Button>
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-r ${diffCfg.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
    </Card>
  );
};

export default memo(ProblemCard);
