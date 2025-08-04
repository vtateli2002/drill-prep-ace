import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { Question, XP_VALUES, TRACK_NAMES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';
import { useToast } from '@/hooks/use-toast';
import ExcelUtility from '@/components/ExcelUtility';
import NotesUtility from '@/components/NotesUtility';

const QuestionView = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (questionId) {
      const question = QUESTIONS.find(q => q.id === questionId);
      setCurrentQuestion(question || null);
    }
  }, [questionId]);

  const handleSubmit = () => {
    if (!currentQuestion || !userAnswer || isSubmitted) return;

    const numericAnswer = parseFloat(userAnswer);
    const correct = Math.abs(numericAnswer - currentQuestion.answer) < 0.01;
    
    setIsCorrect(correct);
    setIsSubmitted(true);
    
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
        description: "Check the explanation or try again",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
    setShowHint(false);
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
            onClick={() => navigate('/problems')}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Problems
          </Button>
          
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">{currentQuestion.title}</h1>
            <Badge variant="outline">{TRACK_NAMES[currentQuestion.track]}</Badge>
            <Badge className={`${getDifficultyColor(currentQuestion.difficulty)} text-white`}>
              {currentQuestion.difficulty.replace('-', ' ').toUpperCase()}
            </Badge>
            <Badge variant="secondary">+{XP_VALUES[currentQuestion.difficulty]} XP</Badge>
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
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-foreground leading-relaxed">{currentQuestion.description}</p>
                    </div>
                    
                    {showHint && currentQuestion.hint && (
                      <Card className="border-warning/50 bg-warning/5">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-2">
                            <Lightbulb size={16} className="text-warning mt-1" />
                            <div>
                              <p className="text-sm font-medium text-warning">Hint</p>
                              <p className="text-sm text-muted-foreground">{currentQuestion.hint}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    
                    {isSubmitted && currentQuestion.explanation && (
                      <Card className="border-primary/20">
                        <CardHeader>
                          <CardTitle className="text-lg">Explanation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="learn" className="mt-4">
                  {currentQuestion.learnContent ? (
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">📘 Concept</h4>
                              <p className="text-muted-foreground text-sm">{currentQuestion.learnContent.concept}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">📊 Formula</h4>
                              <p className="text-muted-foreground text-sm font-mono bg-muted p-2 rounded">
                                {currentQuestion.learnContent.formula}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">ℹ️ Example</h4>
                              <p className="text-muted-foreground text-sm">{currentQuestion.learnContent.example}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No learning content available for this question.</p>
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
                        onClick={() => setShowHint(true)}
                        disabled={showHint}
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
                      <Button variant="outline" onClick={handleReset}>
                        Try Again
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Utility Tabs */}
            <Card className="flex-1">
              <CardHeader>
                <Tabs defaultValue="notes" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="notes">🗒️ Notes</TabsTrigger>
                    <TabsTrigger value="excel">📊 Excel</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="notes" className="mt-4">
                    <NotesUtility />
                  </TabsContent>
                  
                  <TabsContent value="excel" className="mt-4">
                    <ExcelUtility />
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionView;