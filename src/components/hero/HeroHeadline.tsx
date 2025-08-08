import { motion } from 'framer-motion'
import React from 'react'

const lineVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      delay: i * 0.2,
    },
  }),
}

export const HeroHeadline: React.FC = () => {
  return (
    <h1 className="text-5xl md:text-7xl font-semibold tracking-wider leading-[1.05] text-foreground">
      <motion.span
        className="block"
        custom={0}
        variants={lineVariant}
        initial="hidden"
        animate="visible"
      >
        The LeetCode for
      </motion.span>
      <motion.span
        className="block bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.8)] bg-clip-text text-transparent"
        custom={1}
        variants={lineVariant}
        initial="hidden"
        animate="visible"
      >
        Investment Banking
      </motion.span>
    </h1>
  )
}

export default HeroHeadline
