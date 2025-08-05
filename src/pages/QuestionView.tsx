import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BadgeUnlockedModal from '@/components/BadgeUnlockedModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, Target } from 'lucide-react';
import { Question, XP_VALUES, TRACK_NAMES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';
import { useToast } from '@/hooks/use-toast';
import { useQuestions } from '@/hooks/useQuestions';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useAuth } from '@/hooks/useAuth';
import NotesUtility from '@/components/NotesUtility';
import DrawingCanvas from '@/components/DrawingCanvas';
import Calculator from '@/components/Calculator';

const QuestionView = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { submitAnswer, isQuestionSolved, newBadge, clearNewBadge } = useQuestions();
  const { completeChallengeQuestion } = useDailyChallenge();
  
  const isFromDailyChallenge = searchParams.get('challenge') === 'true';
  const returnToModal = searchParams.get('return') === 'modal';
  
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [finalXP, setFinalXP] = useState(0);

  // Check if question is already solved (but allow daily challenge questions to be attempted)
  useEffect(() => {
    if (questionId && isQuestionSolved(questionId) && !isFromDailyChallenge) {
      setIsSubmitted(true);
      setIsCorrect(true);
    }
  }, [questionId, isQuestionSolved, isFromDailyChallenge]);

  useEffect(() => {
    if (questionId) {
      console.log('QuestionView - Looking for question ID:', questionId);
      const question = QUESTIONS.find(q => q.id === questionId);
      console.log('QuestionView - Found question:', question?.title || 'NOT FOUND');
      setCurrentQuestion(question || null);
    }
  }, [questionId]);

  const calculateXP = (baseXP: number, attempts: number, usedHint: boolean) => {
    let xp = baseXP;
    
    // Reduce XP for wrong attempts
    if (attempts > 0) {
      const reductions = [0.2, 0.4, 0.6, 0.8];
      const reduction = reductions[Math.min(attempts - 1, 3)];
      xp *= (1 - reduction);
    }
    
    // Reduce XP for using hint
    if (usedHint) {
      xp *= 0.5;
    }
    
    return Math.round(xp);
  };

  const handleSubmit = async () => {
    if (!currentQuestion || !userAnswer) return;

    const numericAnswer = parseFloat(userAnswer);
    const correct = Math.abs(numericAnswer - currentQuestion.answer) < 0.01;
    const newAttemptCount = attemptCount + 1;
    
    setAttemptCount(newAttemptCount);
    setIsCorrect(correct);
    
    if (correct) {
      const baseXP = XP_VALUES[currentQuestion.difficulty];
      let earnedXP = calculateXP(baseXP, attemptCount, hintUsed);
      
      // Double XP for daily challenge
      if (isFromDailyChallenge) {
        earnedXP *= 2;
      }
      
      setFinalXP(earnedXP);
      setIsSubmitted(true);
      
      // Submit to backend and award XP
      await submitAnswer(currentQuestion.id, true, currentQuestion.difficulty, currentQuestion.track);
      
      // Mark as completed in daily challenge if applicable
      if (isFromDailyChallenge && questionId) {
        await completeChallengeQuestion(questionId);
      }
      
      toast({
        title: "Correct! 🎉",
        description: `You earned ${earnedXP} XP${isFromDailyChallenge ? ' (2x bonus!)' : ''}!`,
        className: "border-success",
      });
    } else {
      if (newAttemptCount >= 4) {
        setIsSubmitted(true);
        setFinalXP(0);
        
        // Submit failed attempt to backend
        await submitAnswer(currentQuestion.id, false, currentQuestion.difficulty, currentQuestion.track);
        
        toast({
          title: "Out of attempts",
          description: "You've used all 4 attempts. No XP earned.",
          variant: "destructive",
        });
      } else {
        const attemptsLeft = 4 - newAttemptCount;
        toast({
          title: "Not quite right",
          description: `${attemptsLeft} attempts remaining`,
          variant: "destructive",
        });
      }
    }
  };

  const handleHint = () => {
    setShowHint(true);
    setHintUsed(true);
  };

  const handleReset = () => {
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
    setShowHint(false);
    setAttemptCount(0);
    setHintUsed(false);
    setFinalXP(0);
  };

  const getNextQuestion = () => {
    if (!currentQuestion) return null;
    const currentIndex = QUESTIONS.findIndex(q => q.id === currentQuestion.id);
    const nextInTrack = QUESTIONS.find((q, index) => 
      index > currentIndex && q.track === currentQuestion.track
    );
    return nextInTrack;
  };

  const handleNextQuestion = () => {
    const nextQuestion = getNextQuestion();
    if (nextQuestion) {
      navigate(`/question/${nextQuestion.id}`);
      // Reset state for new question
      setUserAnswer('');
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
      setAttemptCount(0);
      setHintUsed(false);
      setFinalXP(0);
    } else {
      // Show completion modal
      toast({
        title: "🎉 Track Completed!",
        description: `Congratulations! You've completed all ${TRACK_NAMES[currentQuestion.track]} questions!`,
        className: "border-success",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'easy': 'bg-success',
      'medium': 'bg-warning',
      'hard': 'bg-warning',
      'interview-ready': 'bg-destructive'
    };
    return colors[difficulty as keyof typeof colors];
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">Question not found.</p>
            <Button onClick={() => navigate('/problems')} className="mt-4">
              Back to Problems
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (returnToModal) {
                navigate('/dashboard');
              } else {
                navigate('/problems');
              }
            }}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            {returnToModal ? 'Back to Dashboard' : 'Back to Problems'}
          </Button>
          
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">{currentQuestion.title}</h1>
            <Badge variant="outline">{TRACK_NAMES[currentQuestion.track]}</Badge>
            <Badge className={`${getDifficultyColor(currentQuestion.difficulty)} text-white`}>
              {currentQuestion.difficulty.replace('-', ' ').toUpperCase()}
            </Badge>
            <Badge variant="secondary">+{XP_VALUES[currentQuestion.difficulty]}{isFromDailyChallenge ? ' × 2' : ''} XP</Badge>
            {isFromDailyChallenge && (
              <Badge className="bg-primary text-primary-foreground">
                <Target className="w-3 h-3 mr-1" />
                Daily Challenge
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Left Panel - Question & Learn Tabs */}
          <Card className="flex flex-col">
            <CardHeader>
              <Tabs defaultValue="question" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="question">📝 Question</TabsTrigger>
                  <TabsTrigger value="learn">📘 Learn</TabsTrigger>
                </TabsList>
                
                <TabsContent value="question" className="mt-4">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
                      <div className="prose prose-lg max-w-none">
                        <div 
                          className="text-foreground leading-relaxed text-lg"
                          dangerouslySetInnerHTML={{
                            __html: currentQuestion.description
                              .replace(/\n/g, '<br />')
                          }}
                        />
                      </div>
                    </div>
                    
                    {showHint && currentQuestion.hint && (
                      <Card className="border-warning/50 bg-gradient-to-br from-warning/10 to-warning/5 shadow-lg">
                        <CardContent className="p-5">
                          <div className="flex items-start space-x-3">
                            <Lightbulb size={20} className="text-warning mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-base font-semibold text-warning mb-2">💡 Hint</p>
                              <p className="text-base text-foreground leading-relaxed">{currentQuestion.hint}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    
                    {isSubmitted && currentQuestion.explanation && (
                      <Card className="border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-lg">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl text-success flex items-center gap-2">
                            <CheckCircle size={20} />
                            💡 Explanation
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-base text-foreground leading-relaxed">{currentQuestion.explanation}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="learn" className="mt-4">
                  {currentQuestion.learnContent ? (
                    <div className="space-y-6">
                      <div className="space-y-6">
                        {/* Concept Section */}
                        <Card className="border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-md">
                          <CardContent className="p-6">
                            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                              📘 Concept
                            </h4>
                            <div className="text-base text-foreground leading-relaxed">
                              {currentQuestion.learnContent.concept.split(/(\b(?:Accounts Receivable|A\/R|accounts receivable|deferred revenue|revenue|accrual accounting|cash flows|assets|liabilities|Gross Profit|gross profit|Current Ratio|current ratio|liquidity)\b)/gi).map((part, index) => {
                                const isKeyword = /^(Accounts Receivable|A\/R|accounts receivable|deferred revenue|revenue|accrual accounting|cash flows|assets|liabilities|Gross Profit|gross profit|Current Ratio|current ratio|liquidity)$/i.test(part);
                                return isKeyword ? (
                                  <span key={index} className="font-bold text-white">{part}</span>
                                ) : (
                                  <span key={index}>{part}</span>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Formula Section */}
                        <Card className="border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-md">
                          <CardContent className="p-6">
                            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                              🧮 Formula
                            </h4>
                            <div className="bg-muted/50 rounded-lg p-4 border border-success/20">
                              <div className="text-base font-mono text-foreground leading-relaxed">
                                {currentQuestion.learnContent.formula.split(/(\n|=|÷|\+|\-|\×|Revenue|COGS|Current Assets|Current Liabilities|Gross Profit)/gi).map((part, index) => {
                                  if (part === '\n') return <br key={index} />;
                                  const isOperator = /^(=|÷|\+|\-|\×)$/.test(part);
                                  const isKeyword = /^(Revenue|COGS|Current Assets|Current Liabilities|Gross Profit)$/i.test(part);
                                  return isOperator ? (
                                    <span key={index} className="font-bold text-white mx-1">{part}</span>
                                  ) : isKeyword ? (
                                    <span key={index} className="font-bold text-white">{part}</span>
                                  ) : (
                                    <span key={index}>{part}</span>
                                  );
                                })}
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Examples Section */}
                        <Card className="border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-md">
                          <CardContent className="p-6">
                            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                              💡 Examples
                            </h4>
                            <div className="space-y-2">
                              {currentQuestion.learnContent.example.split('\n').map((example, index) => (
                                <div 
                                  key={index}
                                  className="bg-muted/30 rounded-lg p-3 border border-success/20"
                                >
                                  <div className="text-base text-foreground leading-normal">
                                    {example.split(/(\$[\d,]+|→|=|Deferred Revenue|deferred revenue|Revenue \+ A\/R|revenue \+ A\/R|Cash \+ Revenue|cash \+ revenue|Revenue|COGS|Current Assets|Current Liabilities|Gross Profit|Current Ratio)/gi).map((part, partIndex) => {
                                      const isMoney = /^\$[\d,]+$/.test(part);
                                      const isOperator = /^(→|=)$/.test(part);
                                      const isKeyword = /^(Deferred Revenue|deferred revenue|Revenue \+ A\/R|revenue \+ A\/R|Cash \+ Revenue|cash \+ revenue|Revenue|COGS|Current Assets|Current Liabilities|Gross Profit|Current Ratio)$/i.test(part);
                                      return isMoney || isOperator || isKeyword ? (
                                        <span key={partIndex} className="font-bold text-white">{part}</span>
                                      ) : (
                                        <span key={partIndex}>{part}</span>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-base text-muted-foreground">No learning content available for this question.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>

          {/* Right Panel - Answer & Utilities */}
          <div className="space-y-4">
            {/* Answer Section */}
            <Card>
              <CardHeader>
                <CardTitle>Your Answer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    step="0.01"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1"
                    disabled={isSubmitted}
                  />
                  {currentQuestion.unit && (
                    <span className="text-muted-foreground font-medium">
                      {currentQuestion.unit}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  {!isSubmitted ? (
                    <>
                      <Button
                        onClick={handleSubmit}
                        disabled={!userAnswer}
                        className="flex-1"
                      >
                        Submit Answer
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleHint}
                        disabled={showHint || attemptCount >= 4}
                      >
                        <Lightbulb size={16} />
                      </Button>
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
                          {isCorrect ? 'Correct!' : `Correct answer: ${currentQuestion.answer}${currentQuestion.unit || ''}`}
                        </span>
                      </div>
                       {isCorrect ? (
                         <Button onClick={() => {
                           if (returnToModal) {
                             navigate('/dashboard');
                           } else {
                             handleNextQuestion();
                           }
                         }}>
                           {returnToModal ? 'Back to Challenge' : 'Next Question'}
                         </Button>
                       ) : (
                         <Button variant="outline" onClick={handleReset}>
                           Try Again
                         </Button>
                       )}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Utility Tabs */}
            <Card className="flex-1">
              <CardHeader>
                <Tabs defaultValue="notes" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="notes">🗒️ Notes</TabsTrigger>
                    <TabsTrigger value="scribble">✏️ Draw</TabsTrigger>
                    <TabsTrigger value="calculator">🧮 Calculator</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="notes" className="mt-4">
                    <NotesUtility />
                  </TabsContent>
                  
                  <TabsContent value="scribble" className="mt-4">
                    <DrawingCanvas />
                  </TabsContent>
                  
                  <TabsContent value="calculator" className="mt-4">
                    <Calculator />
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Badge Unlocked Modal */}
      <BadgeUnlockedModal 
        badge={newBadge}
        onClose={clearNewBadge}
      />
    </div>
  );
};

export default QuestionView;