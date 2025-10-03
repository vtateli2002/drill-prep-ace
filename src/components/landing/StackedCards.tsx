import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Gamepad2, NotebookText, Flame } from 'lucide-react';

const cards = [
  {
    icon: Code2,
    title: 'The LeetCode for Investment Banking',
    description: 'Drill is built like a coding platform — but for finance. Structured, trackable, and performance-based.',
    subtitle: 'Become technical faster. Retain it longer. Outperform your competition.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Gamepad2,
    title: 'Gamified IB Technicals',
    description: 'Earn XP. Unlock badges. Race against an AI rival.',
    subtitle: 'Drill makes repetition addicting — and effective.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: NotebookText,
    title: 'Questions Sourced from Real Interviews',
    description: 'Many questions are based on actual screens from bulge brackets and elite boutiques.',
    subtitle: "You're not just practicing — you're preparing for what really gets asked.",
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    icon: Flame,
    title: 'Beyond the 400 Questions Guide',
    description: 'No more PDFs. Drill teaches by doing — with layered logic, instant feedback, and deep explanations.',
    subtitle: 'Learn faster, master deeper, and outperform every candidate still reading static guides.',
    gradient: 'from-orange-600 to-red-600',
  },
];

const Card = ({ card, index, progress, range, targetScale }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky" style={{ top: `calc(80px + ${index * 25}px)` }}>
      <motion.div
        style={{ scale }}
        className={`relative w-full max-w-4xl h-[450px] rounded-2xl bg-gradient-to-br ${card.gradient} p-[1px] shadow-2xl`}
      >
        <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-xl p-12 flex flex-col justify-center">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
            <card.icon className="text-primary" size={28} />
          </div>
          
          <h3 className="text-3xl font-bold text-foreground mb-4">
            {card.title}
          </h3>
          
          <p className="text-lg text-muted-foreground mb-4">
            {card.description}
          </p>
          
          <p className="text-sm italic text-muted-foreground/80">
            {card.subtitle}
          </p>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl" />
          <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
};

export const StackedCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative pt-12 pb-0">
      <div className="container mx-auto px-4 pb-2 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Why Choose Drill?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0">
          The most effective way to prepare for investment banking technical interviews
        </p>
      </div>

      <div className="container mx-auto px-4">
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.05;
          const range = [i * 0.25, 1];

          return (
            <Card
              key={i}
              card={card}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
