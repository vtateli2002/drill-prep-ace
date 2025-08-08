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

const copyByRival: Record<RivalId, { title: string; subtitle: string; img: string }> = {
  constance: {
    title: '🔥 CONSTANCE HAS ENTERED THE CHAT 🔥',
    subtitle: "Goldman Stanley's TMT assassin. He never sleeps. He never misses.",
    img: constanceImg,
  },
  chadson: {
    title: '🔥 CHADSON HAS ENTERED THE CHAT 🔥',
    subtitle: 'Offer secured. Vibes maximal. Are you keeping up?',
    img: chadsonImg,
  },
  chartreuse: {
    title: '🔥 CHARTREUSE HAS ENTERED THE CHAT 🔥',
    subtitle: 'Tabs exploding. Models compounding. She whispers: I love DCFs…',
    img: chartreuseImg,
  },
};

export default function RivalCutsceneModal({ open, onClose, rivalId, timelineDays }: RivalCutsceneModalProps) {
  const [typed, setTyped] = useState('');
  const timerRef = useRef<number | null>(null);

  const data = useMemo(() => (rivalId ? copyByRival[rivalId] : null), [rivalId]);

  useEffect(() => {
    if (!open || !data) return;

    // Typewriter
    setTyped('');
    const text = data.title;
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
      <DialogContent className="max-w-2xl border-primary/30 bg-background/95">
        {data && (
          <div className="relative">
            <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-b from-primary/20 to-transparent" />
            <div className="flex flex-col items-center text-center">
              <img
                src={data.img}
                alt="rival cutscene"
                className="w-56 h-56 object-contain drop-shadow-lg animate-[scale-in_0.2s_ease-out]"
              />
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">{typed}</h2>
              <p className="mt-2 text-muted-foreground max-w-xl">{data.subtitle}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                XP pace scales to your timeline ({days} days). Choose wisely.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
