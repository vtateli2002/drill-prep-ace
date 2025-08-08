import React from 'react'
import { motion } from 'framer-motion'

type Logo = { name: string; src?: string; alt?: string }

const logos: Logo[] = [
  { name: 'Goldman Sachs' },
  { name: 'J.P. Morgan' },
  { name: 'Evercore' },
  { name: 'Morgan Stanley' },
  { name: 'Centerview' },
  { name: 'Lazard' },
  { name: 'Bank of America' },
  { name: 'Moelis' },
  { name: 'Citi' },
  { name: 'Perella Weinberg' },
  { name: 'Guggenheim' },
]

const trackClass = 'flex items-center gap-10 md:gap-14 whitespace-nowrap'

export const HeroLogosTicker: React.FC = () => {
  const duplicated = [...logos, ...logos]

  return (
    <div className="relative w-full">
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      {/* Row 1 */}
      <motion.div
        className="group overflow-hidden"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 1.1 }}
      >
        <div className={`${trackClass} animate-[ticker_25s_linear_infinite] group-hover:[animation-play-state:paused]`}
             aria-label="Firms using Drill">
          {duplicated.map((l, i) => (
            <LogoItem key={`${l.name}-row1-${i}`} {...l} />
          ))}
        </div>
      </motion.div>

      {/* Row 2 (desktop) */}
      <motion.div
        className="group overflow-hidden mt-4 hidden md:block"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 1.2 }}
      >
        <div className={`${trackClass} animate-[ticker_28s_linear_infinite] group-hover:[animation-play-state:paused]`}
             style={{ animationDirection: 'reverse' as const }}
        >
          {duplicated.map((l, i) => (
            <LogoItem key={`${l.name}-row2-${i}`} {...l} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const LogoItem: React.FC<Logo> = ({ name, src, alt }) => {
  const common = 'opacity-70 hover:opacity-100 transition-opacity duration-200'
  if (src) {
    return (
      <img
        src={src}
        alt={alt || `${name} logo`}
        className={`h-6 md:h-8 object-contain grayscale hover:grayscale-0 ${common} [filter:drop-shadow(0_0_6px_hsl(var(--foreground)/0.15))]`}
        loading="lazy"
        height={32}
      />
    )
  }
  // Text fallback placeholder until real logos are added
  return (
    <span className={`text-foreground/60 md:text-base text-sm font-medium tracking-wide ${common}`}>
      {name}
    </span>
  )
}

export default HeroLogosTicker
