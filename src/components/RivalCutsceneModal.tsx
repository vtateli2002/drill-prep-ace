import { useEffect, useMemo, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { RivalId } from '@/components/RivalSelect';
import constanceImg from '@/assets/rivals/constance.png';
import chadsonImg from '@/assets/rivals/chadson.png';
import chartreuseImg from '@/assets/rivals/chartreuse.png';

interface RivalCutsceneModalProps {
  open: boolean;
  onClose: () => void;
  rivalId: RivalId | null;
  timelineDays: number;
}

const copyByRival: Record<RivalId, { name: string; nickname: string; img: string; taunts: string[] }> = {
  constance: {
    name: 'CONSTANCE',
    nickname: 'The Technical Terminator',
    img: constanceImg,
    taunts: [
      "Never misses. Never sleeps.",
      'I just ran a 13-tab LBO before breakfast.',
    ],
  },
  chadson: {
    name: 'CHADSON',
    nickname: 'The Networking God',
    img: chadsonImg,
    taunts: [
      'Just got 3 more superdays. You still struggling with EV bridge?',
      'Offer secured. Are you keeping up?',
    ],
  },
  chartreuse: {
    name: 'CHARTREUSE',
    nickname: 'The Unhinged Quant Queen',
    img: chartreuseImg,
    taunts: [
      'I just circular referenced your existence. Solve that.',
      'Tabs exploding. Models compounding.',
    ],
  },
};

export default function RivalCutsceneModal({ open, onClose, rivalId, timelineDays }: RivalCutsceneModalProps) {
  const [typed, setTyped] = useState('');
  const timerRef = useRef<number | null>(null);

  const data = useMemo(() => (rivalId ? copyByRival[rivalId] : null), [rivalId]);
  const taunt = useMemo(() => {
    if (!rivalId) return '';
    const list = copyByRival[rivalId].taunts;
    return list[Math.floor(Math.random() * list.length)];
  }, [rivalId, open]);
  useEffect(() => {
    if (!open || !data) return;

    // Typewriter
    setTyped('');
    const text = data ? `${data.name} — ${data.nickname}` : "";
    let i = 0;
    const step = () => {
      i++;
      setTyped(text.slice(0, i));
      if (i < text.length) timerRef.current = window.setTimeout(step, 25);
    };
    step();

    // SFX (simple Web Audio beeps)
    let ctx: AudioContext | null = null;
    try {
      ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = ctx.currentTime;
      const beep = (freq: number, start: number, dur = 0.08) => {
        const o = ctx!.createOscillator();
        const g = ctx!.createGain();
        o.type = 'square';
        o.frequency.value = freq;
        g.gain.value = 0.02;
        o.connect(g).connect(ctx!.destination);
        o.start(now + start);
        o.stop(now + start + dur);
      };
      if (rivalId === 'constance') {
        [600, 700, 800, 900].forEach((f, idx) => beep(f, idx * 0.09));
      } else if (rivalId === 'chadson') {
        [300, 150, 300].forEach((f, idx) => beep(f, idx * 0.12));
      } else if (rivalId === 'chartreuse') {
        [500, 650, 400, 800, 550].forEach((f, idx) => beep(f, idx * 0.07));
      }
    } catch (_) {
      // no-op if autoplay blocked
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [open, data, rivalId]);

  const days = Math.max(1, timelineDays || 30);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-3xl md:max-w-4xl border-primary/30 bg-background/95 overflow-hidden">
        {data && (
          <div className="relative rounded-xl">
            {/* Rival-specific animated backgrounds */}
            {rivalId === 'constance' && (
              <>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-transparent to-background/0" />
                <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-40">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-2 w-3 bg-primary/50 animate-pulse"
                      style={{ animationDelay: `${(i % 4) * 0.15}s` }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-primary/25 to-transparent" />
              </>
            )}
            {rivalId === 'chadson' && (
              <>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-background/0" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute top-8 rounded-full h-2 w-2 bg-primary/70 animate-bounce"
                    style={{ left: `${8 + i * 12}%`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
                <div className="absolute bottom-16 left-8 right-8 h-0.5 bg-primary/40" />
              </>
            )}
            {rivalId === 'chartreuse' && (
              <>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/15 via-transparent to-background/0" />
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-sm border border-primary/30 bg-background/70 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]"
                    style={{
                      top: `${10 + i * 4}%`,
                      left: `${10 + ((i * 9) % 70)}%`,
                      width: `${36 + (i % 3) * 14}px`,
                      height: `${12 + (i % 2) * 6}px`,
                      animationDelay: `${i * 0.06}s`,
                    }}
                  />
                ))}
              </>
            )}

            <div className="relative z-10 flex flex-col items-center text-center py-6 sm:py-8">
              <img
                src={data.img}
                alt="rival cutscene"
                className="w-56 h-56 object-contain drop-shadow-xl animate-enter"
              />
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">{typed}</h2>
              <div className="mt-4 text-primary font-extrabold text-lg sm:text-xl tracking-wide animate-pulse">“{taunt}”</div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
