import { FC, useMemo } from 'react';
import constanceImg from '@/assets/rivals/constance.png';
import chadsonImg from '@/assets/rivals/chadson.png';
import chartreuseImg from '@/assets/rivals/chartreuse.png';

export type RivalId = 'constance' | 'chadson' | 'chartreuse';

interface RivalSelectProps {
  onChoose: (id: RivalId) => void;
  timelineDays: number;
  selectedRival?: RivalId | null;
}

const TOTAL_XP = 15720;

const RivalSelect: FC<RivalSelectProps> = ({ onChoose, timelineDays, selectedRival }) => {
  const baseDaily = useMemo(() => {
    const days = Math.max(1, timelineDays || 30);
    return Math.ceil(TOTAL_XP / days);
  }, [timelineDays]);

  const rivals = [
    {
      id: 'constance' as const,
      name: 'Constance',
      role: "Goldman Stanley's TMT Terminator",
      img: constanceImg,
      multiplier: 1.0,
      strength: 'Accounting & Valuation',
      weakness: 'Behavioral',
      hoverTaunt: '“Never misses. Never sleeps.”',
    },
    {
      id: 'chadson' as const,
      name: 'Chadson',
      role: 'The Networking God',
      img: chadsonImg,
      multiplier: 0.75,
      strength: 'Fit & Behaviorals',
      weakness: 'Hardcore Math',
      hoverTaunt: '“Offer secured. Keep up.”',
    },
    {
      id: 'chartreuse' as const,
      name: 'Chartreuse',
      role: 'The Unhinged Quant Queen',
      img: chartreuseImg,
      multiplier: 0.5,
      strength: 'Modeling',
      weakness: 'Communication',
      hoverTaunt: '“I love DCFs…”',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {rivals.map((rival) => {
        const xpPerDay = Math.max(10, Math.round(baseDaily * rival.multiplier));
        const isActive = selectedRival === rival.id;

        return (
          <button
            key={rival.id}
            onClick={() => onChoose(rival.id)}
            className={`group relative overflow-hidden rounded-xl border border-border bg-background/70 backdrop-blur-md p-4 sm:p-5 text-left transition-all hover:shadow-lg hover:translate-y-[-2px] ${
              isActive ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/40'
            }`}
          >
            {/* Subtle moving background (glass panel + grid) */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-50" style={{
                backgroundImage:
                  'radial-gradient(ellipse at top left, hsl(var(--primary)/0.08), transparent 60%), radial-gradient(ellipse at bottom right, hsl(var(--primary)/0.06), transparent 60%)',
              }} />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                transform: 'translate3d(0,0,0)',
              }} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-3">
                <div className="text-xl sm:text-2xl font-bold tracking-tight">{rival.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{rival.role}</div>
              </div>

              {/* Spotlight square */}
              <div className="relative w-full aspect-square rounded-lg border border-border bg-gradient-to-b from-foreground/5 to-transparent grid place-items-center overflow-hidden">
                {/* soft vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/40" />
                {/* slow parallax sheen */}
                <div className="pointer-events-none absolute -inset-10 opacity-10 animate-[slide-in-right_6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                <img
                  src={rival.id === 'constance' ? `${rival.img}?v=2` : rival.img}
                  alt={`${rival.name} pixel sprite`}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                {/* subtle idle hints per rival */}
                {rival.id === 'constance' && (
                  <span className="absolute bottom-3 right-3 h-2 w-6 rounded-sm bg-primary/70 animate-pulse" />
                )}
                {rival.id === 'chadson' && (
                  <span className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-primary/70 animate-bounce" />
                )}
                {rival.id === 'chartreuse' && (
                  <span className="absolute top-3 right-6 h-2 w-7 rounded-sm bg-primary/60 animate-pulse" />
                )}
              </div>

              {/* Details */}
              <div className="mt-4 space-y-3">
                {/* XP/day */}
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs sm:text-sm">XP/day</span>
                  <span className="text-base sm:text-lg font-semibold">{xpPerDay.toLocaleString()}</span>
                </div>

                {/* Strength / Weakness bars */}
                <div className="space-y-2">
                  <div className="h-9 rounded-md border border-border bg-background/70 flex items-center px-3">
                    <span className="text-xs sm:text-sm font-medium mr-2">Strength:</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{rival.strength}</span>
                  </div>
                  <div className="h-9 rounded-md border border-border bg-background/70 flex items-center px-3">
                    <span className="text-xs sm:text-sm font-medium mr-2">Weakness:</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{rival.weakness}</span>
                  </div>
                </div>
              </div>

              {/* Hover/selected taunt */}
              <div className="mt-3 text-center text-[11px] sm:text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {rival.hoverTaunt}
              </div>

              {/* Selected badge */}
              {isActive && (
                <span className="absolute top-3 right-3 rounded px-2 py-0.5 text-[10px] sm:text-xs bg-primary/10 text-primary border border-primary/30">Selected</span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default RivalSelect;
