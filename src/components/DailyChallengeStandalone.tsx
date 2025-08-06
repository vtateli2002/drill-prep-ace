import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Target, Trophy, Zap, CheckCircle, Clock } from 'lucide-react';
import { TRACK_NAMES } from '@/types/drill';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useToast } from '@/hooks/use-toast';

const DailyChallengeStandalone = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    todaysChallenge, 
    loading, 
    generateTodaysChallenge, 
    isQuestionCompleted 
  } = useDailyChallenge();

  const [showCompletion, setShowCompletion] = useState(false);

  const completedCount = todaysChallenge?.filter(q => isQuestionCompleted(q.id)).length || 0;
  const totalQuestions = 4;
  const isCompleted = completedCount === totalQuestions;

  useEffect(() => {
    if (isCompleted && todaysChallenge && !showCompletion) {
      setShowCompletion(true);
    }
  }, [isCompleted, todaysChallenge, showCompletion]);

  const handleStartQuestion = (questionId: string) => {
    navigate(`/question/${questionId}?challenge=true`);
  };

  const handleGenerateChallenge = async () => {
    await generateTodaysChallenge();
    toast({
      title: "Challenge Generated!",
      description: "Your daily challenge is ready. Complete all 4 questions for 2x XP!",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard': return 'bg-orange-100 text-orange-800 border-orange-200';
      
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDifficulty = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  const calculateTotalXP = () => {
    if (!todaysChallenge) return 0;
    const baseXP = { easy: 10, medium: 20, hard: 30 };
    return todaysChallenge.reduce((total, q) => {
      return total + (baseXP[q.difficulty as keyof typeof baseXP] || 0) * 2; // 2x multiplier
    }, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground">Loading your daily challenge...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Daily Challenge</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Complete 4 questions (2 easy, 1 medium, 1 hard) for 2x XP bonus
          </p>
        </div>

        {showCompletion && isCompleted ? (
          /* Completion Screen */
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Challenge Completed!</h2>
                  <p className="text-muted-foreground">
                    Congratulations! You've earned <span className="font-bold text-primary">{calculateTotalXP()} XP</span> with the 2x bonus.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">{completedCount}/{totalQuestions}</div>
                    <div className="text-sm text-muted-foreground">Questions Solved</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">{calculateTotalXP()}</div>
                    <div className="text-sm text-muted-foreground">Total XP Earned</div>
                  </div>
                </div>

                <Button onClick={() => navigate('/dashboard')} className="w-full">
                  Return to Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : !todaysChallenge ? (
          /* No Challenge Generated */
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-4">Ready for Today's Challenge?</h2>
                <p className="text-muted-foreground mb-6">
                  Generate 4 questions (2 easy, 1 medium, 1 hard) and earn double XP!
                </p>
                <Button onClick={handleGenerateChallenge} size="lg" className="w-full">
                  <Zap className="mr-2 h-5 w-5" />
                  Generate Today's Challenge
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Challenge Questions */
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">2x XP Bonus Active</span>
                  </div>
                </div>
                <Progress value={(completedCount / totalQuestions) * 100} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{completedCount}/{totalQuestions} questions completed</span>
                  <span>Potential XP: {calculateTotalXP()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {todaysChallenge.map((question, index) => {
                const questionCompleted = isQuestionCompleted(question.id);
                return (
                  <Card key={question.id} className={`relative ${questionCompleted ? 'bg-green-50 border-green-200' : 'hover:shadow-md transition-shadow'}`}>
                    {questionCompleted && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span>Question {index + 1}</span>
                        {questionCompleted && <Trophy className="h-5 w-5 text-green-600" />}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {TRACK_NAMES[question.track]}
                        </Badge>
                        <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                          {formatDifficulty(question.difficulty)}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {question.description}
                      </p>
                      
                      <div className="pt-2">
                        {questionCompleted ? (
                          <Button variant="outline" className="w-full" disabled>
                            ✓ Completed
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => handleStartQuestion(question.id)}
                            className="w-full"
                          >
                            Start Question
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
              </Button>
              {completedCount > 0 && !isCompleted && (
                <Button onClick={() => {
                  const nextQuestion = todaysChallenge.find(q => !isQuestionCompleted(q.id));
                  if (nextQuestion) handleStartQuestion(nextQuestion.id);
                }}>
                  Continue Challenge
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyChallengeStandalone;