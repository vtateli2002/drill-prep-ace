import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Analyst at Goldman Sachs',
    content: 'Drill helped me nail my technicals. The AI rival kept me motivated and the question quality is outstanding.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    role: 'Associate at Morgan Stanley',
    content: 'Better than any interview guide I used. The gamification made studying actually enjoyable.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Torres',
    role: 'Analyst at J.P. Morgan',
    content: 'The real interview questions gave me confidence. I recognized several during my actual interviews.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Zhang',
    role: 'Summer Analyst at Lazard',
    content: 'XP system and daily challenges kept me consistent. Went from struggling to mastering valuation in weeks.',
    avatar: '👩‍🎓',
  },
  {
    name: 'David Kim',
    role: 'Analyst at Evercore',
    content: 'The explanations are deeper than any PDF guide. Actually understanding the concepts made all the difference.',
    avatar: '👨‍🏫',
  },
  {
    name: 'Rachel Martinez',
    role: 'Associate at Centerview',
    content: 'Competed with my friends on the leaderboard. Made interview prep feel like a game instead of a chore.',
    avatar: '👩‍🔬',
  },
];

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Future Bankers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join students who landed offers at top banks using Drill
          </p>
        </div>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling testimonials */}
        <div className="flex gap-6">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={isPaused ? {} : { x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] flex-shrink-0 bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
