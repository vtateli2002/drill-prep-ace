import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, BarChart3, TrendingUp, HelpCircle } from 'lucide-react'

const float = (duration = 4, y = 10) => ({
  y: [0, -y, 0],
  opacity: [0.4, 0.85, 0.4],
  transition: { duration, repeat: Infinity, ease: 'easeInOut' },
})

export const HeroParticles: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Icons */}
      <motion.div className="absolute left-[6%] top-[20%] text-primary/70" animate={float(5, 12)}>
        <Lightbulb className="w-6 h-6" />
      </motion.div>
      <motion.div className="absolute right-[10%] top-[26%] text-primary/70" animate={float(6, 10)}>
        <TrendingUp className="w-7 h-7" />
      </motion.div>
      <motion.div className="absolute left-[18%] bottom-[26%] text-primary/60" animate={float(4.5, 8)}>
        <BarChart3 className="w-6 h-6" />
      </motion.div>
      <motion.div className="absolute right-[18%] bottom-[22%] text-primary/60" animate={float(5.5, 9)}>
        <HelpCircle className="w-6 h-6" />
      </motion.div>

      {/* Arcs */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M10 70 C 30 40, 70 40, 90 70"
          fill="none"
          stroke="hsl(var(--primary) / 0.25)"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.path
          d="M15 30 C 40 10, 60 10, 85 30"
          fill="none"
          stroke="hsl(var(--primary) / 0.18)"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

export default HeroParticles
