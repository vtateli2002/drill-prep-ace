import { motion } from 'framer-motion';
import { Target, TrendingUp, Trophy, Zap } from 'lucide-react';
import { GradientChart } from './GradientChart';

const features = [
  {
    icon: Target,
    title: 'Real Interview Questions',
    description: 'Practice with actual questions from bulge bracket banks and elite boutiques.',
  },
  {
    icon: TrendingUp,
    title: 'Track Your Progress',
    description: 'Visualize your improvement across all core IB technical areas with detailed analytics.',
  },
  {
    icon: Trophy,
    title: 'Compete with AI Rivals',
    description: 'Stay motivated by racing against AI opponents that adapt to your skill level.',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate explanations and learn from your mistakes to accelerate mastery.',
  },
];

export const ProductShowcase = () => {
  return (
    <section className="container mx-auto px-4 py-24 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Features */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need to Ace Technical Interviews
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive platform designed specifically for investment banking interview preparation.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Product Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-gradient-to-br from-slate-950 to-slate-900 p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Your Learning Journey</h3>
                  <p className="text-sm text-slate-400">Real-time progress tracking</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                  Active
                </div>
              </div>
              
              <GradientChart />

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">127</div>
                  <div className="text-xs text-slate-400">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">15</div>
                  <div className="text-xs text-slate-400">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">92%</div>
                  <div className="text-xs text-slate-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative gradient blur */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};
