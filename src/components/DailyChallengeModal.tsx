import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Clock, Trophy, X } from 'lucide-react';
import { Question } from '@/types/drill';
import { TRACK_NAMES } from '@/types/drill';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useNavigate } from 'react-router-dom';

interface DailyChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DailyChallengeModal = ({ isOpen, onClose }: DailyChallengeModalProps) => {
  const navigate = useNavigate();
  const { 
    todaysChallenge, 
    loading, 
    generateTodaysChallenge, 
    isQuestionCompleted 
  } = useDailyChallenge();

  const handleStartChallenge = () => {
    onClose();
    // Navigate to standalone daily challenge page
    navigate('/daily-challenge');
  };

  const handleGenerateChallenge = async () => {
    await generateTodaysChallenge();
  };

  const completedCount = todaysChallenge?.filter(q => isQuestionCompleted(q.id)).length || 0;
  const totalQuestions = 4;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-orange-100 text-orange-800';
      case 'interview-ready': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Daily Challenge
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Challenge Info */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">4 Questions • 2x XP Bonus</span>
            </div>
            <p className="text-muted-foreground">
              One question from each track and difficulty level
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground mt-2">Loading challenge...</p>
            </div>
          ) : todaysChallenge ? (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Progress</span>
                </div>
                <div className="text-sm font-semibold">
                  {completedCount}/{totalQuestions} completed
                </div>
              </div>

              {/* Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {todaysChallenge.map((question, index) => {
                  const isCompleted = isQuestionCompleted(question.id);
                  return (
                    <Card key={question.id} className={`${isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm">
                            Question {index + 1}
                          </CardTitle>
                          {isCompleted && (
                            <Trophy className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {TRACK_NAMES[question.track]}
                          </Badge>
                          <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                            {question.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {question.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={handleStartChallenge}
                  className="flex-1"
                  disabled={completedCount === totalQuestions}
                >
                  {completedCount === totalQuestions 
                    ? 'Challenge Completed!' 
                    : completedCount > 0 
                    ? 'Continue Challenge' 
                    : 'Start Challenge'
                  }
                </Button>
                <Button variant="outline" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* No Challenge Generated */}
              <div className="text-center space-y-4 py-8">
                <Target className="h-12 w-12 text-muted-foreground mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold">Ready for Today's Challenge?</h3>
                  <p className="text-muted-foreground">
                    Generate 4 unique questions and earn double XP!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleGenerateChallenge} className="flex-1">
                  Generate Today's Challenge
                </Button>
                <Button variant="outline" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DailyChallengeModal;