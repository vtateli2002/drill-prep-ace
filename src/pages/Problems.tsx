import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Lightbulb, CheckCircle, Loader2 } from 'lucide-react';
import { Track, Difficulty, TRACK_NAMES, XP_VALUES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';
import { useQuestions } from '@/hooks/useQuestions';
import { useAuth } from '@/hooks/useAuth';

const Problems = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isQuestionSolved, getQuestionXP, loading } = useQuestions();
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

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
      'easy': 'bg-success text-success-foreground',
      'medium': 'bg-muted text-muted-foreground',
      'hard': 'bg-destructive text-destructive-foreground',
      'interview_ready': 'bg-background text-foreground border-2 border-primary shadow-lg'
    };
    return colors[difficulty];
  };

  const handleStartQuestion = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };

  // Group questions by track and difficulty in the specified order
  const tracks: Track[] = ['accounting', 'valuation', 'ma', 'lbo'];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard', 'interview_ready'];

  const groupedQuestions = tracks.map(track => ({
    track,
    trackName: TRACK_NAMES[track],
    difficultyGroups: difficulties.map(difficulty => ({
      difficulty,
      questions: QUESTIONS.filter(q => q.track === track && q.difficulty === difficulty)
    })).filter(group => group.questions.length > 0)
  })).filter(trackGroup => trackGroup.difficultyGroups.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Problems</h1>
          </div>
          
          {/* Problems List */}
          <div className="space-y-8">
            {groupedQuestions.map(({ track, trackName, difficultyGroups }) => (
              <div key={track} className="space-y-4">
                {difficultyGroups.map(({ difficulty, questions }) => (
                  <div key={`${track}-${difficulty}`} className="space-y-3">
                    {/* Section Header */}
                    <div className="flex items-center space-x-3">
                      <h2 className="text-xl font-semibold text-foreground">
                        {trackName} – {difficulty.replace('-', ' ').split(' ').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </h2>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    
                    {/* Questions in this group */}
                    <div className="space-y-2">
                      {questions.map((question) => (
                        <Collapsible
                          key={question.id}
                          open={expandedQuestion === question.id}
                          onOpenChange={(open) => setExpandedQuestion(open ? question.id : null)}
                        >
                          <div className="border border-border rounded-lg hover:border-muted-foreground transition-colors">
                            {/* Question Row */}
                            <CollapsibleTrigger className="w-full">
                              <div className="flex items-center justify-between p-4 text-left">
                                 <div className="flex items-center space-x-4 flex-1">
                                   {isQuestionSolved(question.id) && (
                                     <CheckCircle className="w-5 h-5 text-green-500" />
                                   )}
                                   <span className="text-base font-medium text-foreground">
                                     📘 {question.title}
                                   </span>
                                   <Badge variant="outline" className="text-xs">
                                     🏷️ {TRACK_NAMES[question.track]}
                                   </Badge>
                                   <Badge className={`${getDifficultyColor(question.difficulty)} text-xs`}>
                                     💥 {question.difficulty.replace('-', ' ').toUpperCase()}
                                   </Badge>
                                 </div>
                                 
                                 <div className="flex items-center space-x-4">
                                   {isQuestionSolved(question.id) ? (
                                     <span className="text-sm font-medium text-green-600">
                                       ✅ +{getQuestionXP(question.id)} XP Earned
                                     </span>
                                   ) : (
                                     <span className="text-sm font-medium text-primary">
                                       ⭐ +{XP_VALUES[question.difficulty]} XP
                                     </span>
                                   )}
                                   <Button
                                     size="sm"
                                     variant={isQuestionSolved(question.id) ? "outline" : "default"}
                                     onClick={(e) => {
                                       e.stopPropagation();
                                       handleStartQuestion(question.id);
                                     }}
                                   >
                                     {isQuestionSolved(question.id) ? "✅ Solved" : "📝 Start"}
                                   </Button>
                                   <ChevronDown 
                                     className={`w-4 h-4 text-muted-foreground transition-transform ${
                                       expandedQuestion === question.id ? 'rotate-180' : ''
                                     }`} 
                                   />
                                 </div>
                              </div>
                            </CollapsibleTrigger>
                            
                            {/* Expandable Content */}
                            <CollapsibleContent>
                              <Card className="m-4 mt-0">
                                <CardContent className="p-4 space-y-4">
                                  <div className="bg-muted rounded-lg p-4">
                                    <p className="text-foreground leading-relaxed">🧾 {question.description}</p>
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                      {question.hint && (
                                        <div className="flex items-center space-x-2 text-warning">
                                          <Lightbulb size={16} />
                                          <span className="text-sm font-medium">💡 Hint Available</span>
                                        </div>
                                      )}
                                      <span className="text-sm font-medium text-primary">
                                        ⭐ +{XP_VALUES[question.difficulty]} XP
                                      </span>
                                    </div>
                                    <Button onClick={() => handleStartQuestion(question.id)}>
                                      ✅ Start
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </CollapsibleContent>
                          </div>
                        </Collapsible>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;