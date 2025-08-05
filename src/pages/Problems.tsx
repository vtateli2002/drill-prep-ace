import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Track, Difficulty, TRACK_NAMES, XP_VALUES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';
import { useQuestions } from '@/hooks/useQuestions';
import { useAuth } from '@/hooks/useAuth';

const Problems = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isQuestionSolved, getQuestionXP, loading } = useQuestions();

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: Difficulty) => {
    const colors = {
      'easy': 'bg-green-500 text-white',
      'medium': 'bg-blue-500 text-white', 
      'hard': 'bg-orange-500 text-white',
      'interview_ready': 'bg-red-500 text-white'
    };
    return colors[difficulty];
  };

  const handleStartQuestion = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };

  // Create flat list of questions in the desired order
  const tracks: Track[] = ['accounting', 'valuation', 'ma', 'lbo'];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard', 'interview_ready'];

  const orderedQuestions = tracks.flatMap(track => 
    difficulties.flatMap(difficulty => 
      QUESTIONS.filter(q => q.track === track && q.difficulty === difficulty)
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Problems</h1>
            <div className="text-sm text-muted-foreground">
              {orderedQuestions.filter(q => isQuestionSolved(q.id)).length} / {orderedQuestions.length} solved
            </div>
          </div>
          
          {/* Problems List - LeetCode Style */}
          <div className="space-y-3">
            {orderedQuestions.map((question, index) => {
              const isSolved = isQuestionSolved(question.id);
              const earnedXP = getQuestionXP(question.id);

              return (
                <Card key={question.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      {/* Question Number */}
                      <div className="flex items-center justify-center w-8 h-8 rounded bg-muted text-muted-foreground font-mono text-sm">
                        {index + 1}
                      </div>

                      {/* Status Icon */}
                      {isSolved && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}

                      {/* Question Title and Track */}
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground hover:text-primary cursor-pointer" 
                            onClick={() => handleStartQuestion(question.id)}>
                          {question.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {TRACK_NAMES[question.track]}
                        </p>
                      </div>

                      {/* Difficulty Badge */}
                      <Badge className={`${getDifficultyColor(question.difficulty)} text-xs`}>
                        {question.difficulty === 'interview_ready' ? 'Interview Ready' : 
                         question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                      </Badge>

                      {/* Status and XP */}
                      <div className="flex items-center space-x-3">
                        {isSolved ? (
                          <span className="text-sm font-medium text-green-600">
                            +{earnedXP} XP
                          </span>
                        ) : (
                          <span className="text-sm font-medium text-primary">
                            +{XP_VALUES[question.difficulty]} XP
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button
                        onClick={() => handleStartQuestion(question.id)}
                        size="sm"
                        variant={isSolved ? "outline" : "default"}
                      >
                        {isSolved ? "Review" : "Solve"}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {orderedQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No problems available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;