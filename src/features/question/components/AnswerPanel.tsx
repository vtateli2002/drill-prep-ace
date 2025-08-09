import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Lightbulb, XCircle } from 'lucide-react';
import { Question } from '@/types/drill';

interface AnswerPanelProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (v: string) => void;
  formatError: string;
  clearFormatError: () => void;
  isSubmitted: boolean;
  isCorrect: boolean | null;
  showExplanation: boolean;
  setShowExplanation: (v: boolean) => void;
  attemptCount: number;
  onSubmit: () => void;
  onHint: () => void;
  onReset: () => void;
  onPrev: () => void;
  onNext: () => void;
  returnToModal: boolean;
}

const AnswerPanel = ({
  question,
  userAnswer,
  setUserAnswer,
  formatError,
  clearFormatError,
  isSubmitted,
  isCorrect,
  showExplanation,
  setShowExplanation,
  attemptCount,
  onSubmit,
  onHint,
  onReset,
  onPrev,
  onNext,
  returnToModal,
}: AnswerPanelProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Answer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={userAnswer}
              onChange={(e) => {
                setUserAnswer(e.target.value);
                clearFormatError();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSubmit();
              }}
              placeholder="Enter your answer"
              className="flex-1"
              disabled={isSubmitted}
            />
            {question.unit && (
              <span className="text-muted-foreground font-medium">
                {question.unit}
              </span>
            )}
          </div>

          {formatError && (
            <div className="flex items-center space-x-2 p-3 bg-warning/10 border border-warning/30 rounded-lg">
              <AlertTriangle size={16} className="text-warning" />
              <p className="text-sm text-warning">{formatError}</p>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {!isSubmitted ? (
            <>
              <Button onClick={onSubmit} disabled={!userAnswer} className="flex-1">
                Submit Answer
              </Button>
              <Button variant="outline" onClick={onHint} disabled={showExplanation || attemptCount >= 4}>
                <Lightbulb size={16} />
              </Button>
              {question.explanation && (
                <Button variant="outline" onClick={() => setShowExplanation(!showExplanation)}>
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </Button>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center space-x-2">
                {isCorrect ? (
                  <CheckCircle className="text-success" size={24} />
                ) : (
                  <XCircle className="text-destructive" size={24} />
                )}
                <span className="text-sm font-medium">
                  {isCorrect ? 'Correct!' : `Correct answer: ${question.answer}${question.unit || ''}`}
                </span>
              </div>
              <div className="flex space-x-2">
                {!isCorrect && (
                  <Button variant="outline" onClick={onReset}>
                    Try Again
                  </Button>
                )}
              </div>
            </>
          )}
        </div>

        <div className="pt-3 border-t">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onPrev}
              className="flex-1 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
            >
              Previous Question
            </Button>
            <Button
              variant="outline"
              onClick={onNext}
              className="flex-1 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
            >
              {returnToModal ? 'Back to Challenge' : 'Next Question'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnswerPanel;
