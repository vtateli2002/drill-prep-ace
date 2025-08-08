import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code2, Gamepad2, NotebookText, Flame } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { HeroHeadline } from '@/components/hero/HeroHeadline';
import { HeroXPBar } from '@/components/hero/HeroXPBar';
import { HeroLogosTicker } from '@/components/hero/HeroLogosTicker';

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

  //

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Drill — LeetCode for Investment Banking" description="Master IB technicals faster with gamified learning, real interview questions, and an AI rival." canonical={window.location.origin + '/'} />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.25] mask-fade-b pointer-events-none" aria-hidden="true" />
        
        <style>{`
          @keyframes text-shine { 
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .text-shine {
            background-image: linear-gradient(90deg,
              hsl(var(--foreground)) 0%,
              hsl(var(--foreground)) 30%,
              hsl(var(--primary) / 0.9) 50%,
              hsl(var(--foreground)) 70%,
              hsl(var(--foreground)) 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .animate-shine { animation: text-shine 2.8s linear infinite; }

          @keyframes char-reveal {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .reveal-char { display: inline-block; animation: char-reveal 0.6s cubic-bezier(0.22,1,0.36,1) both; }

          .reveal { opacity: 0; transform: translateY(8px); transition: opacity .6s ease, transform .6s ease; }
          .reveal.in-view { opacity: 1; transform: translateY(0); }

          .btn-shine { position: absolute; inset: -20% auto -20% -20%; width: 50%; background: linear-gradient(120deg, transparent 0%, hsl(var(--foreground) / 0.08) 50%, transparent 100%); transform: translateX(-200%) rotate(12deg); transition: transform .6s ease; }
          .group:hover .btn-shine { transform: translateX(300%) rotate(12deg); }

          @media (prefers-reduced-motion: reduce) {
            .animate-shine { animation: none !important; }
            .reveal, .reveal-char { opacity: 1 !important; transform: none !important; transition: none !important; animation: none !important; }
            .btn-shine { display: none !important; }
          }
        `}</style>
        <div className="container mx-auto px-4 pt-28 md:pt-36 pb-24">
          <div className="text-center mx-auto max-w-[800px] flex flex-col items-center gap-y-6">
            <div className="flex flex-col items-center gap-y-6">
              <HeroHeadline />
              <motion.p
                className="text-lg md:text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
              >
                Master technical interviews through real questions, XP, and AI-powered rivals.
              </motion.p>
              <motion.div
                className="pt-1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
              >
                <Button size="lg" onClick={() => navigate('/auth')} className="group relative overflow-hidden px-8 py-3 text-lg rounded-full transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="relative z-10">Start Your Prep Journey</span>
                  <span aria-hidden className="btn-shine" />
                </Button>
              </motion.div>
              <HeroXPBar className="mt-8" />
            </div>
            {/* Trust Bar */}
            <motion.p
              className="text-sm text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 380, damping: 28 }}
            >
              Used by students to land offers at top firms:
            </motion.p>
            <div className="relative w-full">
              <HeroLogosTicker />
            </div>
          </div>
        </div>
      </header>

      {/* Value Propositions */}
      <div className="container mx-auto px-4 py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="reveal bg-card border border-border rounded-xl p-6 shadow-sm" style={{ transitionDelay: '0ms' }}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">The LeetCode for Investment Banking</h3>
            <p className="text-muted-foreground">Drill is built like a coding platform — but for finance. Structured, trackable, and performance-based.</p>
            <p className="text-sm italic text-muted-foreground mt-2">Become technical faster. Retain it longer. Outperform your competition.</p>
          </article>
          <article className="reveal bg-card border border-border rounded-xl p-6 shadow-sm" style={{ transitionDelay: '80ms' }}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Gamepad2 className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Gamified IB Technicals</h3>
            <p className="text-muted-foreground">Earn XP. Unlock badges. Race against an AI rival.</p>
            <p className="text-sm italic text-muted-foreground mt-2">Drill makes repetition addicting — and effective.</p>
          </article>
          <article className="reveal bg-card border border-border rounded-xl p-6 shadow-sm" style={{ transitionDelay: '160ms' }}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <NotebookText className="text-primary" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Includes Questions Sourced from Real Interviews</h3>
            <p className="text-muted-foreground">Many questions are based on actual screens from bulge brackets and elite boutiques.</p>
            <p className="text-sm italic text-muted-foreground mt-2">You’re not just practicing — you’re preparing for what really gets asked.</p>
          </article>
          <article className="reveal bg-card border border-border rounded-xl p-6 shadow-sm" style={{ transitionDelay: '240ms' }}>
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
