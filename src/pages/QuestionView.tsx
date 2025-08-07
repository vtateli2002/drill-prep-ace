import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BadgeUnlockedModal from '@/components/BadgeUnlockedModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, Target, BookOpen, AlertTriangle } from 'lucide-react';
import { Question, XP_VALUES, TRACK_NAMES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';
import { useToast } from '@/hooks/use-toast';
import { useQuestions } from '@/hooks/useQuestions';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useAuth } from '@/hooks/useAuth';
import NotesUtility from '@/components/NotesUtility';
import DrawingCanvas from '@/components/DrawingCanvas';
import Calculator from '@/components/Calculator';
import { FinancialSummary } from '@/components/FinancialSummary';
import { validateAnswer } from '@/utils/answerValidation';

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
  const [maxAttemptsReached, setMaxAttemptsReached] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [activeTab, setActiveTab] = useState('question');
  const [microQuestionAnswers, setMicroQuestionAnswers] = useState({
    q1: null as boolean | null,
    q2: null as string | null,
    q3: null as string | null,
  });
  const [formatError, setFormatError] = useState('');

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

  // Extract financial summary data for hard accounting questions
  const getFinancialSummary = (question: Question) => {
    if (question.track !== 'accounting' || question.difficulty !== 'hard') return null;
    
    // Financial summary data for each hard accounting question
    const financialData: Record<string, Record<string, string | number>> = {
      'acc-hard-148': {
        'Net Income': '$50,000',
        'Amortization': '$100,000',
        'Amortization Period': '5 years',
        'Cash Collected (Deferred Revenue)': '$120,000',
        'Revenue Recognized': '$80,000',
        'Tax Rate': '25%'
      },
      'acc-hard-149': {
        'Net Income': '$70,000',
        'Accounts Receivable': '+$25,000',
        'Inventory': '–$10,000',
        'Prepaids': '+$5,000',
        'Accounts Payable': '+$20,000',
        'Accrued Liabilities': '–$8,000',
        'Depreciation': '$15,000'
      },
      'acc-hard-150': {
        'Capex': '$300,000',
        'Depreciation Period': '10 years',
        'Old Asset Book Value': '$40,000',
        'Sale Price': '$70,000',
        'Tax Rate': '25%'
      },
      'acc-hard-151': {
        'Net Income': '$40,000',
        'Prepaid Revenue Collected': '$100,000',
        'Revenue Recognized': '$60,000',
        'SG&A Incurred': '$50,000',
        'SG&A Unpaid': '$10,000',
        'Depreciation': '$30,000'
      },
      'acc-hard-152': {
        'Amortizable Intangibles': '$100,000',
        'Amortization Period': '5 years',
        'Goodwill Impairment': '$80,000',
        'Tax Rate': '25%'
      },
      'acc-hard-153': {
        'Sale Price': '$120,000',
        'Book Value': '$90,000',
        'Tax Basis': '$80,000',
        'Tax Rate': '30%'
      },
      'acc-hard-154': {
        'Amortization': '$40,000',
        'DTA Write-down': '$25,000',
        'Tax Rate': '25%'
      },
      'acc-hard-155': {
        'Net Income': '$90,000',
        'Prepaid Expense': '+$15,000',
        'Depreciation': '$40,000',
        'Accrued Liabilities': '+$25,000'
      },
      'acc-hard-156': {
        'Net Income': '$60,000',
        'Goodwill Impairment': '$50,000',
        'Gain on Sale': '$20,000',
        'Depreciation': '$25,000',
        'Tax Rate': '30%'
      },
      'acc-hard-157': {
        'R&D Capitalized for Tax': '$200,000',
        'Book Treatment': 'Fully expensed',
        'Tax Amortization Year 1': '10%',
        'Tax Rate': '21%'
      },
      'acc-hard-158': {
        'Net Income': '$90,000',
        'Inventory Write-down': '$25,000',
        'Accrued Liabilities': '+$18,000',
        'Deferred Revenue': 'Collected $60,000, Recognized $45,000'
      },
      'acc-hard-159': {
        'Capitalized Interest': '$500,000',
        'Book Depreciation (Year 1)': '$25,000',
        'Tax Expense': 'Full $500,000',
        'Tax Rate': '25%'
      },
      'acc-hard-160': {
        'Revenue': '$180,000',
        'AR (Unpaid Revenue)': '$140,000',
        'COGS': '$100,000',
        'Inventory Shipped': '$80,000',
        'Accruals': '+$20,000'
      },
      'acc-hard-161': {
        'Previous Rent Expense': '$50,000',
        'New Depreciation': '$300,000 ÷ 6 = $50,000',
        'Deferred Rent Change': '–$10,000'
      },
      'acc-hard-162': {
        'Bad Debt Expense': '$60,000',
        'AR Write-off (Book)': '$40,000',
        'AR Write-off (Tax)': '$20,000',
        'Tax Rate': '25%'
      },
      'acc-hard-163': {
        'Net Income': '$120,000',
        'Accrued Revenue (AR)': '+$30,000',
        'AR Write-Off': '–$12,000',
        'Prepaid Expenses': '+$20,000'
      },
      'acc-hard-164': {
        'Net Income': '$95,000',
        'Gain on Sale': '$40,000',
        'Goodwill Impairment': '$60,000',
        'Depreciation': '$25,000',
        'Tax Rate': '20%'
      },
      'acc-hard-165': {
        'Ownership %': '30%',
        'BrightWave NI': '$200,000',
        'Dividends Received': '$60,000'
      },
      'acc-hard-166': {
        'Capitalized R&D': '$150,000',
        'Book Expense': '$150,000',
        'Tax Deduction': '10% × $150K = $15,000',
        'Tax Rate': '21%'
      },
      'acc-hard-167': {
        'Net Income': '$70,000',
        'Unrealized Loss (OCI)': '$40,000',
        'A/P Increase': '$25,000',
        'Tax Rate': '25%'
      }
    };
    
    return financialData[question.id] || null;
  };

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

    // Enhanced answer validation with flexible formatting
    const cleanAnswer = userAnswer.replace(/[\$,]/g, '').trim();
    const correct = validateAnswer(cleanAnswer, currentQuestion.answer);
    
    // Check for format issues but correct value
    if (!correct && currentQuestion.id === 'acc-easy-146') {
      const numericAnswer = parseFloat(cleanAnswer);
      const expectedAnswer = typeof currentQuestion.answer === 'number' ? currentQuestion.answer : parseFloat(currentQuestion.answer as string);
      
      if (!isNaN(numericAnswer) && Math.abs(numericAnswer - expectedAnswer) < 0.01) {
        setFormatError("⚠️ It looks like your answer is correct, but the format is off. Try entering it again without commas or symbols.");
        return;
      }
    }
    
    setFormatError('');
    const newAttemptCount = attemptCount + 1;
    
    setAttemptCount(newAttemptCount);
    setIsCorrect(correct);
    
    if (correct) {
      // Don't award XP if max attempts were already reached previously
      if (maxAttemptsReached) {
        setFinalXP(0);
        setIsSubmitted(true);
        
        toast({
          title: "Correct! 🎉",
          description: "You got it right, but no XP earned after max attempts.",
          className: "border-success",
        });
        return;
      }
      
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
        setMaxAttemptsReached(true);
        setFinalXP(0);
        setShowExplanation(true);
        
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
    setShowExplanation(false);
    setFormatError('');
    // Don't reset maxAttemptsReached - this prevents XP farming
  };

  const handleMicroAnswer = (questionKey: string, answer: any) => {
    setMicroQuestionAnswers(prev => ({
      ...prev,
      [questionKey]: answer
    }));
  };

  const getMicroQuestionFeedback = (questionKey: string, userAnswer: any, correctAnswer: any) => {
    if (userAnswer === null) return null;
    const isCorrect = questionKey === 'q3' 
      ? Math.abs(parseFloat(userAnswer) - correctAnswer) < 0.01
      : userAnswer === correctAnswer;
    return isCorrect ? '✅' : '❌';
  };

  const getNextQuestion = () => {
    if (!currentQuestion) return null;
    const currentIndex = QUESTIONS.findIndex(q => q.id === currentQuestion.id);
    const nextInTrack = QUESTIONS.find((q, index) => 
      index > currentIndex && q.track === currentQuestion.track
    );
    return nextInTrack;
  };

  const getPreviousQuestion = () => {
    if (!currentQuestion) return null;
    const currentIndex = QUESTIONS.findIndex(q => q.id === currentQuestion.id);
    // Find the previous question in the same track
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (QUESTIONS[i].track === currentQuestion.track) {
        return QUESTIONS[i];
      }
    }
    return null;
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
      setMaxAttemptsReached(false);
    } else {
      // Show completion modal
      toast({
        title: "🎉 Track Completed!",
        description: `Congratulations! You've completed all ${TRACK_NAMES[currentQuestion.track]} questions!`,
        className: "border-success",
      });
    }
  };

  const handlePreviousQuestion = () => {
    const previousQuestion = getPreviousQuestion();
    if (previousQuestion) {
      navigate(`/question/${previousQuestion.id}`);
      // Reset state for new question
      setUserAnswer('');
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
      setAttemptCount(0);
      setHintUsed(false);
      setFinalXP(0);
      setMaxAttemptsReached(false);
    } else {
      toast({
        title: "No previous question",
        description: "This is the first question in this track.",
        variant: "default",
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
            {currentQuestion.id === 'acc-easy-146' && (
              <div className="flex items-center space-x-2">
                <BookOpen size={16} className="text-primary" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">📘 Topic Progress: Accrual Accounting</div>
                  <div className="flex items-center space-x-2">
                    <Progress value={30} className="w-20 h-2" />
                    <span className="text-xs text-muted-foreground">3 of 10 mastered</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Left Panel - Question & Learn Tabs */}
          <Card className="flex flex-col">
            <CardHeader>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="question">📝 Question</TabsTrigger>
                  <TabsTrigger value="learn">📘 Learn</TabsTrigger>
                  {showExplanation && <TabsTrigger value="explanation">💡 Explanation</TabsTrigger>}
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
                     
                     {/* Financial Summary for hard accounting questions */}
                     {(() => {
                       const financialData = getFinancialSummary(currentQuestion);
                       return financialData ? <FinancialSummary data={financialData} /> : null;
                     })()}
                     
                    
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
                          <div 
                            className="text-base text-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: currentQuestion.explanation
                                .replace(/\n/g, '<br />')
                                .replace(/•/g, '&bull;')
                            }}
                          />
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
                              {currentQuestion.learnContent.concept}
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
                              <div className="text-base font-mono text-foreground leading-relaxed whitespace-pre-line">
                                {currentQuestion.learnContent.formula}
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
                                    {example}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Mini-Interactions for Accrual vs. Cash Accounting question */}
                        {currentQuestion.id === 'acc-easy-146' && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-bold text-foreground">🧠 Quick Checks</h3>
                            
                            {/* Quick Check 1 */}
                            <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                              <CardContent className="p-4">
                                <div className="space-y-2">
                                  <p className="font-medium text-orange-900 dark:text-orange-100">💭 Quick Check 1 (True or False):</p>
                                  <p className="text-orange-800 dark:text-orange-200">Accrual accounting recognizes revenue when cash is received.</p>
                                  <div className="flex space-x-2">
                                    <Button 
                                      variant={microQuestionAnswers.q1 === true ? "default" : "outline"}
                                      size="sm"
                                      onClick={() => handleMicroAnswer('q1', true)}
                                    >
                                      True {getMicroQuestionFeedback('q1', microQuestionAnswers.q1, false)}
                                    </Button>
                                    <Button 
                                      variant={microQuestionAnswers.q1 === false ? "default" : "outline"}
                                      size="sm"
                                      onClick={() => handleMicroAnswer('q1', false)}
                                    >
                                      False {getMicroQuestionFeedback('q1', microQuestionAnswers.q1, false)}
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Quick Check 2 */}
                            <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                              <CardContent className="p-4">
                                <div className="space-y-2">
                                  <p className="font-medium text-orange-900 dark:text-orange-100">💭 Quick Check 2 (Multiple Choice):</p>
                                  <p className="text-orange-800 dark:text-orange-200">Under accrual accounting, when is revenue recognized?</p>
                                  <div className="space-y-1">
                                    {[
                                      { key: 'A', text: 'When cash is received' },
                                      { key: 'B', text: 'When service is performed' },
                                      { key: 'C', text: 'When the invoice is sent' }
                                    ].map(option => (
                                      <Button 
                                        key={option.key}
                                        variant={microQuestionAnswers.q2 === option.key ? "default" : "outline"}
                                        size="sm"
                                        className="w-full justify-start"
                                        onClick={() => handleMicroAnswer('q2', option.key)}
                                      >
                                        {option.key}. {option.text} {getMicroQuestionFeedback('q2', microQuestionAnswers.q2, 'B')}
                                      </Button>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Quick Check 3 */}
                            <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                              <CardContent className="p-4">
                                <div className="space-y-2">
                                  <p className="font-medium text-orange-900 dark:text-orange-100">💭 Quick Check 3 (Fill-in-the-blank):</p>
                                  <p className="text-orange-800 dark:text-orange-200">A company earns $8,000 in January but receives cash in February. Revenue for January under accrual accounting is: ____</p>
                                  <div className="flex items-center space-x-2">
                                    <Input
                                      placeholder="Enter amount"
                                      value={microQuestionAnswers.q3 || ''}
                                      onChange={(e) => handleMicroAnswer('q3', e.target.value)}
                                      className="w-32"
                                    />
                                    <span>{getMicroQuestionFeedback('q3', microQuestionAnswers.q3, 8000)}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-base text-muted-foreground">No learning content available for this question.</p>
                    </div>
                  )}
                </TabsContent>

                {showExplanation && (
                  <TabsContent value="explanation" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-success flex items-center gap-2">
                          <CheckCircle size={20} />
                          💡 Explanation
                        </h3>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setActiveTab('learn')}
                          className="flex items-center gap-2"
                        >
                          <BookOpen size={16} />
                          🔍 Review Concept
                        </Button>
                      </div>
                      
                      {currentQuestion.explanation && (
                        <Card className="border-success/30 bg-gradient-to-br from-success/10 to-success/5">
                          <CardContent className="p-4">
                            <div 
                              className="text-base text-foreground leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: currentQuestion.explanation.replace(/\n/g, '<br />')
                              }}
                            />
                          </CardContent>
                        </Card>
                      )}

                      {/* Interview Angle for Accrual vs. Cash Accounting question */}
                      {currentQuestion.id === 'acc-easy-146' && (
                        <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
                          <CardContent className="p-4">
                            <h4 className="font-bold text-primary mb-2">🎯 Interview Angle:</h4>
                            <p className="text-foreground leading-relaxed">
                              This question tests your understanding of revenue recognition under accrual vs. cash accounting. 
                              In interviews, you may be asked to walk through timing differences in a 3-statement model, 
                              especially when reconciling net income to cash flow. Nail this concept early—it appears frequently.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>
                )}
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        setFormatError('');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSubmit();
                        }
                      }}
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
                       <div className="flex space-x-2">
                         {!isCorrect && (
                           <Button variant="outline" onClick={handleReset}>
                             Try Again
                           </Button>
                         )}
                       </div>
                    </>
                  )}
                </div>
                
                {/* Always visible action buttons */}
                <div className="pt-3 border-t">
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={handlePreviousQuestion}
                      className="flex-1 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
                    >
                      Previous Question
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        if (returnToModal) {
                          navigate('/dashboard');
                        } else {
                          handleNextQuestion();
                        }
                      }}
                      className="flex-1 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
                    >
                      {returnToModal ? 'Back to Challenge' : 'Next Question'}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setShowExplanation(true);
                        setActiveTab('explanation');
                        toast({
                          title: "Explanation revealed",
                          description: "Check the explanation tab!",
                          className: "border-success",
                        });
                      }}
                      className="flex-1 border-success/20 hover:bg-success/5 hover:border-success/40"
                    >
                      Show Explanation
                    </Button>
                    
                    {/* Difficulty Toggle for future use */}
                    {currentQuestion.id === 'acc-easy-146' && (
                      <Button 
                        variant="ghost" 
                        className="flex-1 text-muted-foreground"
                        disabled
                      >
                        🔓 Hard Mode (Soon)
                      </Button>
                    )}
                  </div>
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