import React from 'react'
import { motion } from 'framer-motion'

interface HeroXPBarProps {
  className?: string
}

export const HeroXPBar: React.FC<HeroXPBarProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-xl ${className}`} aria-label="XP Progress">
      <div className="relative">
        {/* Track */}
        <div className="h-2 rounded-full border border-border/50 bg-card/60" />
        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 h-2 rounded-full shadow-[0_0_12px_hsl(var(--primary)/0.45)] bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--primary)/0.85))]"
          initial={{ width: '0%' }}
          animate={{ width: ['0%', '100%'] }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
        />
      </div>
    </div>
  )
}

export default HeroXPBar
