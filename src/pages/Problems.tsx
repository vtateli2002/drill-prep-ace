import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Loader2, Trophy, Zap, Target, Star, Crown, Filter, X } from 'lucide-react';
import { Track, Difficulty, TRACK_NAMES, XP_VALUES } from '@/types/drill';
import { QUESTIONS } from '@/data/questions';
import { useQuestions } from '@/hooks/useQuestions';
import { useAuth } from '@/hooks/useAuth';

const Problems = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isQuestionSolved, getQuestionXP, loading } = useQuestions();

  // Filter state
  const [selectedTrack, setSelectedTrack] = useState<Track | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  // Debug filter changes
  useEffect(() => {
    console.log('Filter state changed:', { selectedTrack, selectedDifficulty });
  }, [selectedTrack, selectedDifficulty]);

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

  // Use all questions directly without pre-filtering
  const tracks: Track[] = ['accounting', 'valuation', 'ma', 'lbo'];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard', 'interview_ready'];

  const allQuestions = QUESTIONS;

  // Apply filters
  const filteredQuestions = allQuestions.filter(question => {
    const trackMatches = selectedTrack === 'all' || question.track === selectedTrack;
    const difficultyMatches = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    
    return trackMatches && difficultyMatches;
  });

  // Debug logging - let's see what tracks actually exist in the data
  const uniqueTracks = [...new Set(allQuestions.map(q => q.track))];
  const trackCounts = uniqueTracks.map(track => ({
    track,
    count: allQuestions.filter(q => q.track === track).length
  }));
  
  console.log('Available tracks in data:', trackCounts);
  console.log('Filter Debug:', {
    selectedTrack,
    selectedDifficulty,
    totalQuestions: allQuestions.length,
    filteredQuestions: filteredQuestions.length,
    sampleQuestions: filteredQuestions.slice(0, 3).map(q => ({ id: q.id, title: q.title, track: q.track, difficulty: q.difficulty }))
  });

  const getTrackConfig = (track: Track) => {
    const configs = {
      'accounting': { label: 'Accounting', color: 'bg-blue-500 hover:bg-blue-600', icon: '📊' },
      'valuation': { label: 'Valuation', color: 'bg-purple-500 hover:bg-purple-600', icon: '💰' },
      'ma': { label: 'M&A', color: 'bg-green-500 hover:bg-green-600', icon: '🤝' },
      'lbo': { label: 'LBO', color: 'bg-orange-500 hover:bg-orange-600', icon: '⚡' }
    };
    return configs[track];
  };

  const clearFilters = () => {
    setSelectedTrack('all');
    setSelectedDifficulty('all');
  };

  const hasActiveFilters = selectedTrack !== 'all' || selectedDifficulty !== 'all';

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
                {filteredQuestions.filter(q => isQuestionSolved(q.id)).length} / {filteredQuestions.length} solved
              </span>
            </div>
          </div>

          {/* Filter Section */}
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Filter Problems</h2>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-auto text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>
            
            <Tabs defaultValue="track" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="track">By Track</TabsTrigger>
                <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
              </TabsList>
              
              <TabsContent value="track" className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedTrack === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTrack('all')}
                    className="font-medium"
                  >
                    All Tracks
                  </Button>
                  {tracks.map((track) => {
                    const config = getTrackConfig(track);
                    return (
                      <Button
                        key={track}
                        variant={selectedTrack === track ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          console.log(`Clicked track filter: ${track}`);
                          setSelectedTrack(track);
                        }}
                        className={`font-medium ${selectedTrack === track ? config.color : ''}`}
                      >
                        <span className="mr-2">{config.icon}</span>
                        {config.label}
                      </Button>
                    );
                  })}
                </div>
              </TabsContent>
              
              <TabsContent value="difficulty" className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedDifficulty('all')}
                    className="font-medium"
                  >
                    All Difficulties
                  </Button>
                  {difficulties.map((difficulty) => {
                    const config = getDifficultyConfig(difficulty);
                    const DifficultyIcon = config.icon;
                    return (
                      <Button
                        key={difficulty}
                        variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          console.log(`Clicked difficulty filter: ${difficulty}`);
                          setSelectedDifficulty(difficulty);
                        }}
                        className={`font-medium ${selectedDifficulty === difficulty ? config.color.replace('bg-', 'bg-').replace('text-white', '') : ''}`}
                      >
                        <DifficultyIcon className="h-4 w-4 mr-2" />
                        {config.label}
                      </Button>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>

            {/* Active Filter Summary */}
            {hasActiveFilters && (
              <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Showing:</span>
                  {selectedTrack !== 'all' && (
                    <Badge variant="secondary" className="text-xs">
                      {getTrackConfig(selectedTrack).label}
                    </Badge>
                  )}
                  {selectedDifficulty !== 'all' && (
                    <Badge variant="secondary" className="text-xs">
                      {getDifficultyConfig(selectedDifficulty).label}
                    </Badge>
                  )}
                  <span>({filteredQuestions.length} problems)</span>
                </div>
              </div>
            )}
          </Card>
          
          {/* Problems List - Modern Gamified Style */}
          <div className="space-y-3">
            {filteredQuestions.map((question, index) => {
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

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {hasActiveFilters ? 'No problems match your current filters.' : 'No problems available yet.'}
              </p>
              {hasActiveFilters && (
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;