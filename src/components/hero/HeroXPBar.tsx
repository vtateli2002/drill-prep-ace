import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface HeroXPBarProps {
  className?: string
  startLevel?: number
  weeklyXP?: number
}

// Map levels to professional rank titles
const rankForLevel = (lvl: number) => {
  if (lvl >= 9) return 'Rainmaker'
  if (lvl >= 7) return 'MD'
  if (lvl >= 5) return 'VP'
  if (lvl >= 3) return 'Associate'
  return 'Analyst'
}

export const HeroXPBar: React.FC<HeroXPBarProps> = ({ className = '', startLevel = 4, weeklyXP = 2300 }) => {
  const [level, setLevel] = useState(startLevel)
  const [tick, setTick] = useState(0) // fires each full cycle (level-up)
  const [bubbleTick, setBubbleTick] = useState(0) // fires XP gain bubbles

  // Keep level increments in sync with the bar loop (10s)
  useEffect(() => {
    const id = setInterval(() => {
      setLevel((l) => l + 1)
      setTick((t) => t + 1)
    }, 10000)
    return () => clearInterval(id)
  }, [])

  // Periodic "+10 XP" micro-bubbles (~5s)
  useEffect(() => {
    const id = setInterval(() => setBubbleTick((v) => v + 1), 5000)
    return () => clearInterval(id)
  }, [])

  const rank = useMemo(() => rankForLevel(level), [level])

  // Alternate bubble position for subtle variety
  const bubblePos = useMemo(() => (bubbleTick % 2 === 0 ? 'left-[20%]' : 'left-[65%]'), [bubbleTick])

  return (
    <TooltipProvider>
      <div className={`w-full max-w-xl ${className}`}>
        <div className="relative">
          {/* Row: Bar + Level badge */}
          <div className="flex items-center gap-3">
            {/* Track */}
            <div className="relative flex-1 h-2 rounded-full border border-border/50 bg-card/60 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-label="XP Progress">
              {/* Fill - smooth looping 0% -> 100% */}
              <motion.div
                className="absolute inset-y-0 left-0 h-full rounded-full shadow-[0_0_12px_hsl(var(--primary)/0.45)] bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--primary)/0.85))]"
                initial={{ width: '0%' }}
                animate={{ width: ['0%', '100%'] }}
                transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
              />

              {/* XP bubbles (desktop only) */}
              <AnimatePresence>
                <motion.span
                  key={bubbleTick}
                  className={`hidden md:block absolute -top-5 ${bubblePos} text-xs font-medium text-foreground/80`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: [0, 1, 0], y: [-2, -10, -16] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  +10 XP
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Level Badge with pulse on level-up */}
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  key={tick}
                  className="relative grid place-items-center w-9 h-9 rounded-full bg-background border border-border text-foreground text-[11px] font-semibold"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  aria-label={`Level ${level}`}
                >
                  <span className="pointer-events-none">Lv {level}</span>
                  {/* subtle glow ring */}
                  <span aria-hidden className="absolute inset-0 rounded-full shadow-[0_0_18px_hsl(var(--primary)/0.35)]" />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                You've gained {weeklyXP.toLocaleString()} XP this week.
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Rank title (desktop only) */}
          <div className="hidden md:block mt-2 h-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={rank}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-sm text-muted-foreground"
              >
                {rank}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default HeroXPBar
