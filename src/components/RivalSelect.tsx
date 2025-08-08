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
      nickname: 'Goldman Stanley’s TMT Terminator',
      description: 'Cold stare. Glowing calculator. Always calculating.',
      multiplier: 1.0,
      img: constanceImg,
      bg: 'from-emerald-500/30 via-emerald-400/10 to-transparent',
      accent: 'text-emerald-300',
      ring: 'ring-emerald-400/60',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
    },
    {
      id: 'chadson' as const,
      name: 'Chadson',
      nickname: 'The Networking God',
      description: 'Shades on. Solo cup up. Offer secured.',
      multiplier: 0.75,
      img: chadsonImg,
      bg: 'from-fuchsia-500/25 via-pink-400/10 to-transparent',
      accent: 'text-fuchsia-300',
      ring: 'ring-fuchsia-400/60',
      glow: 'shadow-[0_0_30px_rgba(217,70,239,0.35)]',
    },
    {
      id: 'chartreuse' as const,
      name: 'Chartreuse',
      nickname: 'The Unhinged Quant Queen',
      description: '47 tabs. Models forever. She whispers: I love DCFs…',
      multiplier: 0.5,
      img: chartreuseImg,
      bg: 'from-lime-400/30 via-lime-300/10 to-transparent',
      accent: 'text-lime-300',
      ring: 'ring-lime-400/60',
      glow: 'shadow-[0_0_30px_rgba(163,230,53,0.35)]',
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
            className={`group relative overflow-hidden rounded-3xl p-5 sm:p-6 min-h-[420px] text-left transition-all duration-200 border border-border bg-gradient-to-b ${rival.bg} ${
              isActive ? `ring-2 ${rival.ring} ${rival.glow}` : 'hover:ring-2 hover:ring-primary/50'
            } hover:shadow-xl hover:shadow-primary/20`}
          >
            {/* Animated background elements per rival */}
            {rival.id === 'constance' && (
              <>
                {/* neon floor */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-primary/25 to-transparent" />
                {/* terminals */}
                <div className="pointer-events-none absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-40">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-2 w-3 bg-primary/40 animate-pulse"
                      style={{ animationDelay: `${(i % 3) * 0.2}s` }}
                    />
                  ))}
                </div>
              </>
            )}
            {rival.id === 'chadson' && (
              <>
                {/* party lights */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/20 to-transparent" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="pointer-events-none absolute top-6 rounded-full h-2 w-2 bg-primary/60 animate-bounce"
                    style={{ left: `${10 + i * 14}%`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
                {/* pong table line */}
                <div className="pointer-events-none absolute bottom-16 left-6 right-6 h-0.5 bg-primary/40" />
              </>
            )}
            {rival.id === 'chartreuse' && (
              <>
                {/* desk glow */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-primary/25 to-transparent" />
                {/* floating tabs */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="pointer-events-none absolute rounded-sm border border-primary/30 bg-background/70 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]"
                    style={{
                      top: `${10 + i * 5}%`,
                      left: `${8 + (i * 11) % 70}%`,
                      width: `${40 + (i % 3) * 12}px`,
                      height: `${12 + (i % 2) * 6}px`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}
              </>
            )}

            {/* Content */}
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-between">
              {/* Top text */}
              <div className="w-full text-center">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase drop-shadow">
                  {rival.name}
                </div>
                <div className={`mt-1 text-xs sm:text-sm font-semibold ${rival.accent}`}>{rival.nickname}</div>
              </div>

              {/* Avatar */}
              <div className="relative grid place-items-center">
                {/* glow pulse */}
                <div className={`absolute inset-0 blur-2xl opacity-25 ${isActive ? 'opacity-40' : ''} bg-primary`} />
                <img
                  src={rival.img}
                  alt={`${rival.name} animated pixel sprite`}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-lg transition-transform duration-200 group-hover:scale-105"
                />

                {/* Idle micro-animations overlays */}
                {rival.id === 'constance' && (
                  <span className="absolute bottom-6 right-10 h-2 w-6 rounded-sm bg-primary/70 animate-pulse" />
                )}
                {rival.id === 'chadson' && (
                  <span className="absolute bottom-8 left-12 h-3 w-3 rounded-full bg-primary/70 animate-bounce" />
                )}
                {rival.id === 'chartreuse' && (
                  <span className="absolute -top-1 right-12 h-2 w-7 rounded-sm bg-primary/60 animate-pulse" />
                )}
              </div>

              {/* Bottom CTA + XP/day */}
              <div className="w-full flex items-center justify-between">
                <span className="text-muted-foreground text-xs sm:text-sm">XP/day</span>
                <span className="text-base sm:text-lg font-bold">{xpPerDay.toLocaleString()}</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default RivalSelect;
