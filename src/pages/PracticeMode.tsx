import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Eye, EyeOff, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Track, Question, Difficulty, XP_VALUES, TRACK_NAMES } from '@/types/drill';
import { useToast } from '@/hooks/use-toast';

const PracticeMode = () => {
  const { track } = useParams<{ track: Track }>();
  const { toast } = useToast();
  const [showInstruction, setShowInstruction] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Mock questions data
  const mockQuestions: Record<Track, Question[]> = {
    accounting: [
      {
        id: 'acc1',
        track: 'accounting',
        difficulty: 'easy',
        title: 'Basic Revenue Recognition',
        description: 'A company sells a product for $1,000 on credit. What is the immediate impact on total assets?',
        answer: 1000,
        unit: '$',
        hint: 'Think about accounts receivable',
        explanation: 'When a sale is made on credit, accounts receivable (an asset) increases by $1,000, so total assets increase by $1,000.'
      }
    ],
    valuation: [
      {
        id: 'val1',
        track: 'valuation',
        difficulty: 'medium',
        title: 'DCF Terminal Value',
        description: 'Calculate terminal value using FCF of $100M, growth rate of 3%, and WACC of 10%.',
        answer: 1471.43,
        unit: '$M',
        hint: 'Use the Gordon Growth Model: FCF × (1 + g) / (WACC - g)',
        explanation: 'Terminal Value = $100M × (1 + 3%) / (10% - 3%) = $103M / 7% = $1,471.43M'
      }
    ],
    lbo: [
      {
        id: 'lbo1',
        track: 'lbo',
        difficulty: 'hard',
        title: 'Debt Capacity Calculation',
        description: 'Enterprise value is $500M, equity contribution is 30%. How much debt is used?',
        answer: 350,
        unit: '$M',
        hint: 'Debt = Enterprise Value - Equity Contribution',
        explanation: 'Debt = $500M × (1 - 30%) = $500M × 70% = $350M'
      }
    ],
    ma: [
      {
        id: 'ma1',
        track: 'ma',
        difficulty: 'hard',
        title: 'Accretion/Dilution Analysis',
        description: 'Acquirer EPS: $2.00, Target EPS: $1.50, Exchange ratio: 0.8x. What is pro forma EPS?',
        answer: 1.95,
        unit: '$',
        hint: 'Calculate weighted average EPS based on the exchange ratio',
        explanation: 'Pro forma EPS = (Acquirer EPS + Target EPS × Exchange Ratio) / (1 + Exchange Ratio) = ($2.00 + $1.50 × 0.8) / (1 + 0.8) = $3.20 / 1.8 = $1.78 (simplified calculation)'
      }
    ]
  };

  const instructionContent = {
    accounting: {
      title: '📘 Accounting Fundamentals',
      content: [
        { icon: '📊', title: 'Key Concepts', text: 'Assets = Liabilities + Equity. Every transaction affects at least two accounts.' },
        { icon: 'ℹ️', title: 'Revenue Recognition', text: 'Revenue is recognized when earned, not necessarily when cash is received.' },
        { icon: '📘', title: 'Working Capital', text: 'Current Assets - Current Liabilities. Measures short-term liquidity.' }
      ]
    },
    valuation: {
      title: '📘 Valuation Methods',
      content: [
        { icon: '📊', title: 'DCF Model', text: 'Present value of future cash flows: FCF / (1 + WACC)^n' },
        { icon: 'ℹ️', title: 'Terminal Value', text: 'FCF × (1 + g) / (WACC - g) where g < WACC' },
        { icon: '📘', title: 'Multiple Analysis', text: 'Compare similar companies using EV/Revenue, EV/EBITDA ratios' }
      ]
    },
    lbo: {
      title: '📘 Leveraged Buyouts',
      content: [
        { icon: '📊', title: 'Capital Structure', text: 'Typically 60-80% debt, 20-40% equity to maximize returns' },
        { icon: 'ℹ️', title: 'Debt Capacity', text: 'Based on EBITDA multiples and cash flow coverage ratios' },
        { icon: '📘', title: 'Returns', text: 'IRR driven by EBITDA growth, multiple expansion, and debt paydown' }
      ]
    },
    ma: {
      title: '📘 M&A Analysis',
      content: [
        { icon: '📊', title: 'Synergies', text: 'Revenue synergies (cross-selling) + Cost synergies (economies of scale)' },
        { icon: 'ℹ️', title: 'Accretion/Dilution', text: 'Deal is accretive if pro forma EPS > standalone EPS' },
        { icon: '📘', title: 'Exchange Ratio', text: 'Shares issued = Target Value / Acquirer Share Price' }
      ]
    }
  };

  useEffect(() => {
    if (track && mockQuestions[track]) {
      setCurrentQuestion(mockQuestions[track][0]);
    }
  }, [track]);

  const handleSubmit = () => {
    if (!currentQuestion || !userAnswer) return;

    const numericAnswer = parseFloat(userAnswer);
    const correct = Math.abs(numericAnswer - currentQuestion.answer) < 0.01;
    
    setIsCorrect(correct);
    
    if (correct) {
      const xpEarned = XP_VALUES[currentQuestion.difficulty];
      toast({
        title: "Correct! 🎉",
        description: `You earned ${xpEarned} XP`,
        className: "border-success",
      });
    } else {
      toast({
        title: "Not quite right",
        description: "Try again or check the explanation",
        variant: "destructive",
      });
      setShowExplanation(true);
    }
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    const colors = {
      'easy': 'bg-green-500',
      'medium': 'bg-yellow-500',
      'hard': 'bg-orange-500',
    };
    return colors[difficulty];
  };

  if (!track || !currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex h-[calc(100vh-73px)]">
        {/* Instruction Panel */}
        {showInstruction && (
          <div className="w-1/2 border-r border-border p-6 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  {instructionContent[track].title}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowInstruction(false)}
                >
                  <EyeOff size={16} className="mr-2" />
                  Hide
                </Button>
              </div>
              
              <div className="space-y-4">
                {instructionContent[track].content.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Challenge Panel */}
        <div className={`${showInstruction ? 'w-1/2' : 'w-full'} p-6 flex flex-col`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-foreground">{TRACK_NAMES[track]}</h1>
              <Badge className={`${getDifficultyColor(currentQuestion.difficulty)} text-white`}>
                {currentQuestion.difficulty.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
            
            {!showInstruction && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowInstruction(true)}
              >
                <Eye size={16} className="mr-2" />
                Show Lesson
              </Button>
            )}
          </div>
          
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span>{currentQuestion.title}</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 space-y-6">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-foreground leading-relaxed">{currentQuestion.description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    step="0.01"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="flex-1"
                    disabled={isCorrect === true}
                  />
                  {currentQuestion.unit && (
                    <span className="text-muted-foreground font-medium">
                      {currentQuestion.unit}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button
                    onClick={handleSubmit}
                    disabled={!userAnswer || isCorrect === true}
                    className="flex-1"
                  >
                    Submit Answer
                  </Button>
                  
                  {isCorrect !== null && (
                    <div className="flex items-center">
                      {isCorrect ? (
                        <CheckCircle className="text-success" size={24} />
                      ) : (
                        <XCircle className="text-destructive" size={24} />
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {showExplanation && currentQuestion.explanation && (
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Explanation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                    {currentQuestion.hint && (
                      <div className="mt-3 p-3 bg-muted rounded">
                        <p className="text-sm"><strong>Hint:</strong> {currentQuestion.hint}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PracticeMode;