import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, BookOpen, Target } from 'lucide-react';
import { TRACK_NAMES, XP_VALUES, Question } from '@/types/drill';

interface AccountingProgress {
  completed: number;
  total: number;
}

interface QuestionHeaderProps {
  question: Question;
  isFromDailyChallenge: boolean;
  returnToModal: boolean;
  onBack: () => void;
  difficultyClass: string;
  accountingProgress?: AccountingProgress | null;
}

const QuestionHeader = ({
  question,
  isFromDailyChallenge,
  returnToModal,
  onBack,
  difficultyClass,
  accountingProgress,
}: QuestionHeaderProps) => {
  return (
    <div className="mb-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-4"
     >
        <ArrowLeft size={16} className="mr-2" />
        {returnToModal ? 'Back to Dashboard' : 'Back to Problems'}
      </Button>

      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-foreground">{question.title}</h1>
        <Badge variant="outline">{TRACK_NAMES[question.track]}</Badge>
        <Badge className={`${difficultyClass} text-white`}>
          {question.difficulty.replace('-', ' ').toUpperCase()}
        </Badge>
        <Badge variant="secondary">+{XP_VALUES[question.difficulty]}{isFromDailyChallenge ? ' × 2' : ''} XP</Badge>
        {isFromDailyChallenge && (
          <Badge className="bg-primary text-primary-foreground">
            <Target className="w-3 h-3 mr-1" />
            Daily Challenge
          </Badge>
        )}
        {question.track === 'accounting' && accountingProgress && (
          <div className="flex items-center space-x-2">
            <BookOpen size={16} className="text-primary" />
            <div className="text-sm">
              <div className="font-medium text-foreground">📘 Progress: Accounting</div>
              <div className="flex items-center space-x-2">
                <Progress
                  value={Math.round((accountingProgress.completed / accountingProgress.total) * 100)}
                  className="w-20 h-2"
                />
                <span className="text-xs text-muted-foreground">
                  {accountingProgress.completed} of {accountingProgress.total} completed
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionHeader;
