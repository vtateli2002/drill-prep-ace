import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Track, Difficulty, TRACK_NAMES, XP_VALUES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';

const Problems = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedTrack, setSelectedTrack] = useState<Track | 'all'>(
    searchParams.get('track') as Track || 'all'
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const filteredQuestions = QUESTIONS.filter(question => {
    const trackMatch = selectedTrack === 'all' || question.track === selectedTrack;
    const difficultyMatch = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    return trackMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: Difficulty) => {
    const colors = {
      'easy': 'bg-success',
      'medium': 'bg-warning',
      'hard': 'bg-warning',
      'interview-ready': 'bg-destructive'
    };
    return colors[difficulty];
  };

  const handleStartQuestion = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Problems</h1>
          </div>
          
          {/* Filters */}
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Track</label>
              <Select value={selectedTrack} onValueChange={(value) => setSelectedTrack(value as Track | 'all')}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tracks</SelectItem>
                  <SelectItem value="accounting">Accounting</SelectItem>
                  <SelectItem value="valuation">Valuation</SelectItem>
                  <SelectItem value="lbo">LBO</SelectItem>
                  <SelectItem value="ma">M&A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Difficulty</label>
              <Select value={selectedDifficulty} onValueChange={(value) => setSelectedDifficulty(value as Difficulty | 'all')}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                  <SelectItem value="interview-ready">Interview Ready</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Question Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuestions.map((question) => (
              <Card key={question.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {TRACK_NAMES[question.track]}
                    </Badge>
                    <Badge className={`${getDifficultyColor(question.difficulty)} text-white text-xs`}>
                      {question.difficulty.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{question.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {question.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary">
                        +{XP_VALUES[question.difficulty]} XP
                      </span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleStartQuestion(question.id)}
                    >
                      Start
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;