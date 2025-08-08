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
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">D</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground">
              Master Investment Banking
              <span className="block text-primary">Through Gamified Learning</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drill helps you ace investment banking interviews by gamifying technical prep. 
              Solve questions, earn XP, and race against AI rivals to become interview-ready.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="px-8 py-3 text-lg"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/library')}
              className="px-8 py-3 text-lg"
            >
              Browse Library
            </Button>
          </div>
        </div>
      </div>

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
