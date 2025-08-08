import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Filter, Loader2, Trophy, X } from 'lucide-react';
// Questions are lazy-loaded to reduce initial bundle size
import { useQuestions } from '@/hooks/useQuestions';
import { Difficulty, Track, Question } from '@/types/drill';
import TrackFilter from '@/features/problems/components/TrackFilter';
import DifficultyFilter from '@/features/problems/components/DifficultyFilter';
import ProblemsList from '@/features/problems/components/ProblemsList';
import { getFilteredProblems, CompletionFilter } from '@/features/problems/utils/getFilteredProblems';

const ProblemsPage = () => {
  const { isQuestionSolved, getQuestionXP, loading } = useQuestions();
  const [selectedTrack, setSelectedTrack] = useState<Track | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [completionFilter, setCompletionFilter] = useState<CompletionFilter>('all');

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [qLoading, setQLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const mod = await import('@/data/questions');
      if (!active) return;
      setAllQuestions((mod as any).QUESTIONS as Question[]);
      setQLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    console.log('Filter state changed:', { selectedTrack, selectedDifficulty, completionFilter });
  }, [selectedTrack, selectedDifficulty, completionFilter]);

  const [visibleCount, setVisibleCount] = useState(100);
  useEffect(() => {
    setVisibleCount(100);
  }, [selectedTrack, selectedDifficulty, completionFilter]);

  if (loading || qLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  const filteredQuestions = getFilteredProblems(
    allQuestions as any,
    selectedTrack,
    selectedDifficulty,
    completionFilter,
    isQuestionSolved,
  );

  const visibleQuestions = filteredQuestions.slice(0, visibleCount);

  const clearFilters = () => {
    setSelectedTrack('all');
    setSelectedDifficulty('all');
    setCompletionFilter('all');
  };

  const hasActiveFilters = selectedTrack !== 'all' || selectedDifficulty !== 'all' || completionFilter !== 'all';

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
                {filteredQuestions.filter((q) => isQuestionSolved(q.id)).length} / {filteredQuestions.length} solved
              </span>
            </div>
          </div>

          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Filter Problems</h2>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Progress Status</h3>
              <div className="inline-flex p-1 bg-muted rounded-lg border">
                <button
                  onClick={() => setCompletionFilter('all')}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    completionFilter === 'all' ? 'bg-background text-foreground shadow-sm border border-border' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    All Problems
                  </div>
                </button>
                <button
                  onClick={() => setCompletionFilter('completed')}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    completionFilter === 'completed' ? 'bg-background text-foreground shadow-sm border border-border' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Completed
                  </div>
                </button>
                <button
                  onClick={() => setCompletionFilter('incomplete')}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    completionFilter === 'incomplete' ? 'bg-background text-foreground shadow-sm border border-border' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                    Incomplete
                  </div>
                </button>
              </div>
            </div>

            <Tabs defaultValue="track" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="track">By Track</TabsTrigger>
                <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
              </TabsList>

              <TabsContent value="track" className="space-y-3">
                <TrackFilter selected={selectedTrack} onChange={setSelectedTrack} />
              </TabsContent>

              <TabsContent value="difficulty" className="space-y-3">
                <DifficultyFilter selected={selectedDifficulty} onChange={setSelectedDifficulty} />
              </TabsContent>
            </Tabs>

            {hasActiveFilters && (
              <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Showing:</span>
                  {selectedTrack !== 'all' && <Badge variant="secondary" className="text-xs">{selectedTrack}</Badge>}
                  {selectedDifficulty !== 'all' && <Badge variant="secondary" className="text-xs">{selectedDifficulty}</Badge>}
                  {completionFilter !== 'all' && <Badge variant="secondary" className="text-xs">{completionFilter}</Badge>}
                  <span>({filteredQuestions.length} problems)</span>
                </div>
              </div>
            )}
          </Card>

          <ProblemsList
            questions={visibleQuestions as any}
            isQuestionSolved={isQuestionSolved}
            getQuestionXP={getQuestionXP}
            onStart={(id) => (window.location.href = `/question/${id}`)}
          />

          {filteredQuestions.length > visibleCount && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setVisibleCount((c) => c + 100)}>
                Load more ({visibleCount}/{filteredQuestions.length})
              </Button>
            </div>
          )}

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{hasActiveFilters ? 'No problems match your current filters.' : 'No problems available yet.'}</p>
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

export default ProblemsPage;
