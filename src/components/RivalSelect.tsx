import { FC, useMemo } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
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
      nickname: 'The Technical Terminator',
      description:
        'Cold stare. Calculator always glowing. Never misses, never sleeps.',
      multiplier: 1.0,
      img: constanceImg,
      highlights: ['Strong: Accounting & Valuation', 'Weak: Behavioral'],
    },
    {
      id: 'chadson' as const,
      name: 'Chadson',
      nickname: 'The Networking God',
      description:
        'Backwards cap, shades, and a fast-track to offers — on vibes alone.',
      multiplier: 0.75,
      img: chadsonImg,
      highlights: ['Strong: Fit & Behaviorals', 'Weak: Hardcore math'],
    },
    {
      id: 'chartreuse' as const,
      name: 'Chartreuse',
      nickname: 'The Unhinged Quant Queen',
      description:
        'Jittery energy. 47 tabs open. Believes in DCFs as religion.',
      multiplier: 0.5,
      img: chartreuseImg,
      highlights: ['Strong: Modeling', 'Weak: Communication'],
    },
  ];

  return (
    <Card className="w-full border-border bg-background/60">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Choose Your AI Rival</h3>
          <p className="text-muted-foreground mt-1">Big characters. Big energy. XP pacing adapts to your timeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {rivals.map((rival) => {
            const xpPerDay = Math.max(10, Math.round(baseDaily * rival.multiplier));
            const isActive = selectedRival === rival.id;
            return (
              <button
                key={rival.id}
                onClick={() => onChoose(rival.id)}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-muted/40 p-4 sm:p-5 text-left transition-all hover:shadow-lg hover:shadow-primary/20 hover-scale ${
                  isActive ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 mb-3 sm:mb-4">
                    <img
                      src={rival.img}
                      alt={`${rival.name} pixel avatar`}
                      className="w-full h-full object-contain drop-shadow-md pulse group-hover:animate-bounce"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-extrabold tracking-tight">{rival.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{rival.nickname}</div>
                  </div>

                  <p className="mt-3 text-sm sm:text-base text-muted-foreground min-h-[2.5rem]">{rival.description}</p>

                  <div className="mt-4 w-full">
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                      <span className="text-muted-foreground">XP/day</span>
                      <span className="font-semibold">{xpPerDay.toLocaleString()}</span>
                    </div>
                    <Progress value={rival.multiplier * 100} className="h-2" />
                    <div className="mt-2 flex flex-wrap gap-2 justify-center">
                      {rival.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[10px] sm:text-xs"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RivalSelect;
