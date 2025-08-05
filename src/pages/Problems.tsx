import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle, Loader2, Trophy, Zap, Target, Star, Crown } from 'lucide-react';
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

  const getDifficultyConfig = (difficulty: Difficulty) => {
    const configs = {
      'easy': { 
        color: 'bg-green-500 text-white border-green-400', 
        icon: Target, 
        label: 'Easy',
        gradient: 'from-green-500 to-green-600'
      },
      'medium': { 
        color: 'bg-blue-500 text-white border-blue-400', 
        icon: Zap, 
        label: 'Medium',
        gradient: 'from-blue-500 to-blue-600'
      }, 
      'hard': { 
        color: 'bg-orange-500 text-white border-orange-400', 
        icon: Star, 
        label: 'Hard',
        gradient: 'from-orange-500 to-orange-600'
      },
      'interview_ready': { 
        color: 'bg-red-500 text-white border-red-400', 
        icon: Crown, 
        label: 'Interview Ready',
        gradient: 'from-red-500 to-red-600'
      }
    };
    return configs[difficulty];
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
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Problems</h1>
            </div>
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-foreground">
                {orderedQuestions.filter(q => isQuestionSolved(q.id)).length} / {orderedQuestions.length} solved
              </span>
            </div>
          </div>
          
          {/* Problems List - Modern Gamified Style */}
          <div className="space-y-3">
            {orderedQuestions.map((question, index) => {
              const isSolved = isQuestionSolved(question.id);
              const earnedXP = getQuestionXP(question.id);
              const difficultyConfig = getDifficultyConfig(question.difficulty);
              const DifficultyIcon = difficultyConfig.icon;

              return (
                <Card key={question.id} className={`group relative overflow-hidden border-l-4 ${isSolved ? 'border-l-success bg-success/5' : 'border-l-primary/20'} hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer`}>
                  <div className="p-5" onClick={() => handleStartQuestion(question.id)}>
                    <div className="flex items-center gap-4">
                      {/* Question Number with Gamified Design */}
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isSolved ? 'bg-success text-success-foreground' : 'bg-primary/10 text-primary'} font-bold text-sm border-2 ${isSolved ? 'border-success' : 'border-primary/20'}`}>
                        {isSolved ? <CheckCircle className="h-5 w-5" /> : (index + 1)}
                      </div>

                      {/* Question Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            {question.title}
                          </h3>
                          {isSolved && (
                            <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full font-medium">
                              Solved
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {TRACK_NAMES[question.track]}
                        </p>
                      </div>

                      {/* Centered Difficulty Badge */}
                      <div className="flex flex-col items-center gap-1 min-w-[100px]">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${difficultyConfig.color} shadow-sm`}>
                          <DifficultyIcon className="h-3.5 w-3.5" />
                          <span className="text-xs font-semibold">{difficultyConfig.label}</span>
                        </div>
                      </div>

                      {/* XP and Action */}
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className={`text-lg font-bold ${isSolved ? 'text-success' : 'text-primary'}`}>
                            +{isSolved ? earnedXP : XP_VALUES[question.difficulty]}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">XP</div>
                        </div>

                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartQuestion(question.id);
                          }}
                          size="sm"
                          variant={isSolved ? "outline" : "default"}
                          className="min-w-[80px] font-semibold"
                        >
                          {isSolved ? "Review" : "Solve"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle gradient overlay for gamified feel */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${difficultyConfig.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
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