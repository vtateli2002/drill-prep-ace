import { motion } from 'framer-motion'
import React from 'react'
import { HeroXPBar } from './HeroXPBar'

const wordVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 28,
      mass: 0.6,
      delay: i * 0.2,
      duration: 0.3,
    },
  }),
}

const popVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: [1, 1.08, 1],
    transition: {
      type: 'spring',
      stiffness: 520,
      damping: 24,
      mass: 0.6,
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
}

export const HeroHeadline: React.FC = () => {
  const topWords = ['The', 'LeetCode', 'for']
  const bottomWords = ['Investment', 'Banking']

  return (
    <div className="space-y-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
        <span className="block text-foreground">
          {topWords.map((w, i) => (
            <motion.span
              key={w}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              className="inline-block mr-2"
            >
              {w}
            </motion.span>
          ))}
        </span>
        <span className="block">
          {bottomWords.map((w, i) => (
            <motion.span
              key={w}
              custom={i}
              variants={i === bottomWords.length - 1 ? popVariant : wordVariant}
              initial="hidden"
              animate="visible"
              className="inline-block mr-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.75)] bg-clip-text text-transparent"
            >
              {w}
            </motion.span>
          ))}
        </span>
      </h1>

      <HeroXPBar target={71} />
    </div>
  )
}

export default HeroHeadline
