import { useEffect, useMemo, useState } from 'react';
import { Award, Lock } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useBadges, UIBadge } from '@/features/badges/useBadges';
import { useAuth } from '@/hooks/useAuth';
import { getProgress, BadgeProgress } from '@/features/badges/progressApi';

// Small helper to compute progress for locked badges (mirrors logic from Badges page)

type ProgressInfo =
  | { kind: 'single'; label: string; n: number; d: number }
  | { kind: 'dual'; n1: number; d1: number; n2: number; d2: number; label1: string; label2: string }
  | null;

const computeProgress = (slug: string, u: BadgeProgress | null): ProgressInfo => {
  if (!u) return null;
  switch (slug) {
    case 'accounting_ace': return { kind: 'single', label: 'Accounting', n: u.acc_correct, d: 20 };
    case 'valuation_veteran': return { kind: 'single', label: 'Valuation', n: u.val_correct, d: 20 };
    case 'ma_master': return { kind: 'single', label: 'M&A', n: u.mna_correct, d: 20 };
    case 'lbo_lead': return { kind: 'single', label: 'LBO', n: u.lbo_correct, d: 20 };
    case 'steady_gains': return { kind: 'single', label: 'XP', n: u.xp_now, d: 2000 };
    case 'closer': return { kind: 'single', label: 'Best track', n: u.best_track_solved, d: u.best_track_total || 1 };
    case 'mastery_i': return { kind: 'single', label: 'Correct', n: u.total_correct, d: 100 };
    case 'long_game': return { kind: 'single', label: 'Streak days', n: u.streak_current, d: 14 };
    case 'deep_focus': return { kind: 'single', label: 'First-try', n: u.clean_first_try, d: 20 };
    case 'mentor': return { kind: 'single', label: 'Notes', n: u.notes_count, d: 10 };
    case 'level_20': return { kind: 'single', label: 'Level', n: u.level_now, d: 20 };
    case 'relentless_30': return { kind: 'single', label: 'Streak days', n: u.streak_current, d: 30 };
    case 'iron_will_10h': return { kind: 'single', label: 'Hard clean', n: u.hard_clean, d: 10 };
    case 'cross_track_50': return { kind: 'dual', n1: u.total_correct, d1: 50, n2: u.distinct_tracks, d2: 3, label1: 'Correct', label2: 'Tracks' };
    case 'shark_all': return { kind: 'single', label: 'All questions', n: u.catalog_user_solved, d: u.catalog_total_active || 1 };
    default: return null;
  }
};

// Badge tile used in the profile grid
function BadgeTile({ badge, lockedReason, onOpen }: { badge: UIBadge; lockedReason?: string; onOpen: () => void }) {
  const locked = !badge.unlocked;
  return (
    <button
      onClick={onOpen}
      className="group relative rounded-lg border border-border bg-card/60 p-4 text-left transition-all hover:shadow-lg hover-scale focus:outline-none"
      aria-label={`${badge.name} badge`}
    >
      <div className="flex items-start gap-3">
        <div className="p-[2px] rounded-full bg-gradient-to-b from-primary/60 to-transparent">
          <div className={`w-10 h-10 rounded-full grid place-items-center ring-1 ring-primary/30 ring-offset-2 ring-offset-card ${locked ? 'bg-muted text-muted-foreground opacity-70' : 'bg-primary/10 text-primary'}`}>
            <Award size={18} />
          </div>
        </div>
        <div className={locked ? 'opacity-80' : ''}>
          <div className="font-semibold text-foreground leading-tight line-clamp-1">{badge.name}</div>
          <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{badge.condition}</div>
        </div>
      </div>
      {locked && (
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-background/20 backdrop-blur-[1px]" />
      )}
      {locked && (
        <div className="absolute top-2 right-2 text-muted-foreground">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Lock size={16} />
              </TooltipTrigger>
              {lockedReason ? <TooltipContent>{lockedReason}</TooltipContent> : null}
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </button>
  );
}

export default function ProfileBadges() {
  const { byTier, loading } = useBadges();
  const { user } = useAuth();
  const [progress, setProgress] = useState<BadgeProgress | null>(null);
  const [active, setActive] = useState<UIBadge | null>(null);

  useEffect(() => {
    if (!user) return;
    getProgress(user.id).then(setProgress).catch(console.error);
  }, [user]);

  const allBadges = useMemo(() => {
    const list = [...(byTier[1] || []), ...(byTier[2] || []), ...(byTier[3] || []), ...(byTier[4] || [])];
    // Sort: unlocked first by tier asc, then locked by tier asc
    return list.sort((a, b) => {
      if (a.unlocked !== b.unlocked) return a.unlocked ? -1 : 1;
      return (a.tier || 1) - (b.tier || 1);
    });
  }, [byTier]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {allBadges.map((b) => {
          const info = !b.unlocked && b.slug ? computeProgress(b.slug, progress) : null;
          const lockedText = info && (info as any).kind === 'single'
            ? `${(info as any).label}: ${(info as any).n}/${(info as any).d}`
            : info && (info as any).kind === 'dual'
              ? `${(info as any).label1}: ${(info as any).n1}/${(info as any).d1} · ${(info as any).label2}: ${(info as any).n2}/${(info as any).d2}`
              : undefined;

          return (
            <BadgeTile key={b.id} badge={b} lockedReason={lockedText} onOpen={() => setActive(b)} />
          );
        })}
      </div>

      {/* Details modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground">{active?.name}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {active?.condition}
            </DialogDescription>
          </DialogHeader>
          {active && (
            <div className="space-y-3">
              {!active.unlocked && active.slug && progress && (
                (() => {
                  const info = computeProgress(active.slug, progress);
                  if (!info) return null;
                  if ((info as any).kind === 'single') {
                    const s: any = info;
                    const pct = Math.max(0, Math.min(100, s.d ? Math.round((s.n / s.d) * 100) : 0));
                    return (
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{s.label}</span>
                          <span>{s.n}/{s.d}</span>
                        </div>
                        <Progress value={pct} className="h-2 mt-1" />
                      </div>
                    );
                  } else {
                    const d: any = info;
                    const pct = Math.max(0, Math.min(100, d.d1 ? Math.round((d.n1 / d.d1) * 100) : 0));
                    return (
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{d.label1} · {d.label2}</span>
                          <span>{d.n1}/{d.d1} · {d.n2}/{d.d2}</span>
                        </div>
                        <Progress value={pct} className="h-2 mt-1" />
                      </div>
                    );
                  }
                })()
              )}
              {active?.unlocked && (
                <Card className="p-3 bg-muted/40 text-sm text-foreground">
                  Earned: {/* We don’t have the timestamp per badge in this hook yet */} Recently
                </Card>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
