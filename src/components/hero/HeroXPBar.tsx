import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export const HeroXPBar: React.FC<{ target?: number }> = ({ target = 71 }) => {
  const prefersReduced = useReducedMotion()
  const widthTarget = prefersReduced ? `${target}%` : `${target}%`

  return (
    <div className="mt-3 flex items-center justify-center">
      <div className="relative w-full max-w-xl" aria-label="XP Progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={target}>
        <div className="h-4 rounded-full border border-border bg-card" />
        <motion.div
          className="absolute inset-y-0 left-0 h-4 rounded-full bg-primary"
          initial={{ width: '0%' }}
          animate={{ width: widthTarget }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="absolute -top-6 right-0 text-sm font-semibold text-foreground"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 400, damping: 30 }}
        >
          {target}%
        </motion.span>
      </div>
    </div>
  )
}

export default HeroXPBar
