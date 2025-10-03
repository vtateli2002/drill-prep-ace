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
import { ProductShowcase } from '@/components/hero/ProductShowcase';
import { Testimonials } from '@/components/hero/Testimonials';
import { StackedCards } from '@/components/landing/StackedCards';

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
              #10b981 50%,
              hsl(var(--foreground)) 70%,
              hsl(var(--foreground)) 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .animate-shine { animation: text-shine 2.8s linear infinite; }

          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient { 
            background-size: 200% 200%;
            animation: gradient-shift 8s ease infinite; 
          }

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

      {/* Stacked Cards - Why Choose Drill */}
      <StackedCards />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Tracks Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Master 4 Core Tracks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage of essential investment banking topics with hundreds of real interview questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Accounting', color: 'tracks-accounting', count: '10 topics' },
            { name: 'Valuation', color: 'tracks-valuation', count: '8 topics' },
            { name: 'LBO', color: 'tracks-lbo', count: '12 topics' },
            { name: 'M&A', color: 'tracks-ma', count: '6 topics' }
          ].map((track, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className={`w-8 h-8 bg-${track.color} rounded-full mx-auto mb-3`} />
              <h3 className="text-lg font-semibold text-foreground mb-1">{track.name}</h3>
              <p className="text-sm text-muted-foreground">{track.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Ace Your Interviews?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of students who have successfully prepared for their investment banking interviews with Drill. Start your journey today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="px-8 py-6 text-lg rounded-full"
            >
              Start Free Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/problems')}
              className="px-8 py-6 text-lg rounded-full"
            >
              Browse Questions
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • Get started in 2 minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
