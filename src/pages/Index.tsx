import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code2, Gamepad2, NotebookText, Flame } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Only redirect logged-in users who already completed onboarding
    const onboardingData = localStorage.getItem('drillOnboarding');
    if (user && onboardingData) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Drill — LeetCode for Investment Banking" description="Master IB technicals faster with gamified learning, real interview questions, and an AI rival." canonical={window.location.origin + '/'} />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.25] mask-fade-b pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              The LeetCode for Investment Banking
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Master technical interviews faster than ever before — with real questions, XP, and AI rivals.
            </p>
            <p className="text-base text-muted-foreground">
              Built for aspiring analysts at top firms. Train with gamified practice sourced from real interviews.
            </p>
            <div className="pt-2">
              <Button size="lg" onClick={() => navigate('/auth')} className="px-8 py-3 text-lg">
                Start Your Prep Journey
              </Button>
            </div>
            {/* Trust Bar */}
            <div className="pt-10">
              <p className="text-sm text-muted-foreground mb-4">
                Students around the world have used Drill to land offers at top firms:
              </p>
              <div className="relative">
                <div className="flex gap-3 md:gap-6 overflow-x-auto no-scrollbar justify-start md:justify-center px-1">
                  {['Goldman Sachs','Evercore','Morgan Stanley','J.P. Morgan','Centerview','Lazard','PJT','Moelis','Bank of America','Citi','Perella Weinberg','Guggenheim'].map((firm) => (
                    <span key={firm} className="shrink-0 rounded-full border border-border bg-card/50 px-3 md:px-4 py-2 text-xs md:text-sm text-foreground/90">
                      {firm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Propositions */}
      <div className="container mx-auto px-4 py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">The LeetCode for Investment Banking</h3>
            <p className="text-muted-foreground">Drill is built like a coding platform — but for finance. Structured, trackable, and performance-based.</p>
            <p className="text-sm italic text-muted-foreground mt-2">Become technical faster. Retain it longer. Outperform your competition.</p>
          </article>
          <article className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Gamepad2 className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Gamified IB Technicals</h3>
            <p className="text-muted-foreground">Earn XP. Unlock badges. Race against an AI rival.</p>
            <p className="text-sm italic text-muted-foreground mt-2">Drill makes repetition addicting — and effective.</p>
          </article>
          <article className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <NotebookText className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Includes Questions Sourced from Real Interviews</h3>
            <p className="text-muted-foreground">Many questions are based on actual screens from bulge brackets and elite boutiques.</p>
            <p className="text-sm italic text-muted-foreground mt-2">You’re not just practicing — you’re preparing for what really gets asked.</p>
          </article>
          <article className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Flame className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Beyond the 400 Questions Guide</h3>
            <p className="text-muted-foreground">No more PDFs. Drill teaches by doing — with layered logic, instant feedback, and deep explanations.</p>
            <p className="text-sm italic text-muted-foreground mt-2">Learn faster, master deeper, and outperform every candidate still reading static guides.</p>
          </article>
        </div>
      </div>

      {/* Tracks Section */}
      <div className="container mx-auto px-4 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Master 4 Core Tracks</h2>
          <p className="text-muted-foreground">
            Comprehensive coverage of essential investment banking topics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Accounting', color: 'tracks-accounting', count: '10 topics' },
            { name: 'Valuation', color: 'tracks-valuation', count: '8 topics' },
            { name: 'LBO', color: 'tracks-lbo', count: '12 topics' },
            { name: 'M&A', color: 'tracks-ma', count: '6 topics' }
          ].map((track, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
              <div className={`w-4 h-4 bg-${track.color} rounded-full mx-auto mb-2`} />
              <h3 className="font-semibold text-foreground">{track.name}</h3>
              <p className="text-sm text-muted-foreground">{track.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 border-t border-border">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join thousands of students who have successfully prepared for their investment banking interviews with Drill.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="px-8 py-3 text-lg"
          >
            Begin Your Prep Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
