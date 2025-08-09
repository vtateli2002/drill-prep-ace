import Navbar from '@/components/Navbar';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, LineChart, Trophy, Crown, ChevronRight, Lock, Award, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useBadges } from '@/features/badges/useBadges';
import { useAuth } from '@/hooks/useAuth';
import { getProgress, BadgeProgress } from '@/features/badges/progressApi';
import { useEffect, useState } from 'react';
type TierStyle = { text?: string; bg?: string; ring?: string; grad?: string; icon?: string };
const TIER_STYLES: Record<'analyst' | 'associate' | 'rainmaker' | 'boardroom', TierStyle> = {
  analyst: {
    text: 'text-success',
    bg: 'bg-success/10',
    ring: 'ring-success/40',
    grad: 'from-success/70 to-transparent',
  },
  associate: {
    icon: 'badge-icon--blue badge--blue',
  },
  rainmaker: {
    icon: 'badge-icon--purple badge--purple',
  },
  boardroom: {
    icon: 'badge-icon--gold badge--gold',
  },
};

type BadgeItem = { id: string; name: string; condition: string; unlocked: boolean; slug?: string };

const DEFAULT_TIER_BADGES: Record<keyof typeof TIER_STYLES, BadgeItem[]> = {
  analyst: [
    { id: 'an-1', name: 'First Win', condition: 'Solve 1 problem', unlocked: true },
    { id: 'an-2', name: 'Getting Warm', condition: 'Solve 5 problems', unlocked: true },
    { id: 'an-3', name: 'On a Roll', condition: '3-day streak', unlocked: false },
    { id: 'an-4', name: 'Note Taker', condition: 'Add first note', unlocked: false },
  ],
  associate: [
    { id: 'as-1', name: 'Consistent', condition: '7-day streak', unlocked: false },
    { id: 'as-2', name: 'Focused', condition: '20 problems solved', unlocked: false },
    { id: 'as-3', name: 'Track Starter', condition: 'Complete 1 track section', unlocked: false },
    { id: 'as-4', name: 'Steady Gains', condition: 'Earn 500 XP', unlocked: false },
    { id: 'as-5', name: 'Time Trial', condition: 'Finish 5 timed sets', unlocked: false },
  ],
  rainmaker: [
    { id: 'rm-1', name: 'Closer', condition: 'Complete a full track', unlocked: false },
    { id: 'rm-2', name: 'Mastery I', condition: 'Earn 1000 XP', unlocked: false },
    { id: 'rm-3', name: 'Long Game', condition: '14-day streak', unlocked: false },
    { id: 'rm-4', name: 'Precision', condition: '90% weekly accuracy', unlocked: false },
    { id: 'rm-5', name: 'Mentor', condition: 'Share 10 notes', unlocked: false },
  ],
  boardroom: [
    { id: 'bd-1', name: 'Legend', condition: 'Top 1% on leaderboard', unlocked: false },
    { id: 'bd-2', name: 'Relentless', condition: '30-day streak', unlocked: false },
    { id: 'bd-3', name: 'Rainmaker', condition: 'Earn 2500 XP', unlocked: false },
    { id: 'bd-4', name: 'Secret Sauce', condition: 'Unlock hidden badge', unlocked: false },
    { id: 'bd-5', name: 'Perfect Run', condition: '10 hard problems at 100%', unlocked: false },
  ],
};

const ProgressBar = ({ n, d }: { n: number; d: number }) => {
  const pct = Math.max(0, Math.min(100, d ? Math.round((n / d) * 100) : 0));
  return (
    <div className="mt-2 h-1.5 w-full rounded bg-muted">
      <div className="h-1.5 rounded bg-primary" style={{ width: `${pct}%` }} />
    </div>
  );
};

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

const BadgeCard = ({ item, variant, extra }: { item: BadgeItem; variant: keyof typeof TIER_STYLES; extra?: React.ReactNode }) => {
  const s = TIER_STYLES[variant];
  return (
    <div className="relative group rounded-lg border border-border bg-card/60 p-4 transition-all hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-start gap-3">
        <div className={`p-[2px] rounded-full ${s.icon ? '' : `bg-gradient-to-b ${s.grad}`}`}>{/* icon wrapper */}
          <div className={`w-10 h-10 rounded-full grid place-items-center ring-offset-2 ring-offset-card group-hover:ring-2 ${s.icon ? s.icon : `${s.bg} ${s.text} ring-1 ${s.ring}`}`}>
            <Award size={18} />
          </div>
        </div>
        <div className={item.unlocked ? '' : 'opacity-60'}>
          <div className="font-semibold text-foreground leading-tight">{item.name}</div>
          <div className="text-xs text-muted-foreground mt-1">{item.condition}</div>
          {extra}
        </div>
      </div>
      {!item.unlocked && (
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-background/30 backdrop-blur-[1px] grid place-items-center">
          <Lock className="text-muted-foreground" size={18} />
        </div>
      )}
    </div>
  );
};

const TierCard = ({
  id,
  icon: Icon,
  title,
  description,
  variant,
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
  variant: 'analyst' | 'associate' | 'rainmaker' | 'boardroom';
}) => {
  const s = TIER_STYLES[variant];

  return (
    <a href={`#${id}`} className="block group focus:outline-none">
      <Card className="transition-all group-hover:shadow-lg border-border bg-card">
        <CardContent className="p-5 flex items-start gap-4">
          <div className="shrink-0">
            <div className={`p-[2px] rounded-full ${s.icon ? '' : `bg-gradient-to-b ${s.grad}`} transition-transform duration-300 group-hover:scale-105`}>
              <div className={`w-12 h-12 rounded-full grid place-items-center ring-offset-2 ring-offset-card group-hover:ring-2 ${s.icon ? s.icon : `${s.bg} ${s.text} ring-1 ${s.ring}`}`}>
                <Icon size={24} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground text-lg">{title}</CardTitle>
              <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const TierSection = ({
  id,
  icon: Icon,
  title,
  description,
  variant,
  badges,
  progress,
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
  variant: keyof typeof TIER_STYLES;
  badges: BadgeItem[];
  progress: BadgeProgress | null;
}) => {
  const s = TIER_STYLES[variant];
  return (
    <section id={id} className="mt-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className={`p-[2px] rounded-full ${s.icon ? '' : `bg-gradient-to-b ${s.grad}`}`}>
              <div className={`w-10 h-10 rounded-full grid place-items-center ${s.icon ? s.icon : `${s.bg} ${s.text} ring-1 ${s.ring}`}`}>
                <Icon size={18} />
              </div>
            </div>
            <div>
              <CardTitle className="text-foreground">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {badges.map((b) => {
              const info = (!b.unlocked && (b as any).slug) ? computeProgress((b as any).slug as string, progress) : null;
              let extra: React.ReactNode = null;
              if (info && (info as any).kind === 'single') {
                const s: any = info;
                extra = (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="underline decoration-dotted cursor-help">Why locked?</span>
                          </TooltipTrigger>
                          <TooltipContent>{`${s.label}: ${s.n}/${s.d}`}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <span>{s.n}/{s.d}</span>
                    </div>
                    <ProgressBar n={s.n} d={s.d} />
                  </div>
                );
              } else if (info && (info as any).kind === 'dual') {
                const d: any = info;
                extra = (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="underline decoration-dotted cursor-help">Why locked?</span>
                          </TooltipTrigger>
                          <TooltipContent>{`${d.label1}: ${d.n1}/${d.d1} · ${d.label2}: ${d.n2}/${d.d2}`}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <span>{d.n1}/{d.d1} · {d.n2}/{d.d2}</span>
                    </div>
                    <ProgressBar n={d.n1} d={d.d1} />
                  </div>
                );
              }
              return <BadgeCard key={b.id} item={b} variant={variant} extra={extra} />;
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};


const Badges = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/badges` : undefined;
  const { byTier, loading, error } = useBadges();
  const { user } = useAuth();
  const [progress, setProgress] = useState<BadgeProgress | null>(null);

  useEffect(() => {
    if (!user) return;
    getProgress(user.id).then(setProgress).catch(console.error);
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Badges – Finance mastery rewards | Drill"
        description="Earn unique, finance‑themed badges as you master investment banking technicals on Drill."
        canonical={canonical}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">🏆 Badges</h1>
          <p className="text-muted-foreground mt-2">Earn rewards as you master investment banking technicals.</p>
        </header>

        {/* Tier icons grid */}
        <section aria-labelledby="tiers" className="space-y-6">
          <h2 id="tiers" className="sr-only">Badge tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <TierCard
              id="analyst"
              icon={Briefcase}
              variant="analyst"
              title="Analyst Badges"
              description="Common beginnings. Quick wins to get momentum."
            />
            <TierCard
              id="associate"
              icon={LineChart}
              variant="associate"
              title="Associate Badges"
              description="Uncommon milestones. Consistency and focus."
            />
            <TierCard
              id="rainmaker"
              icon={Trophy}
              variant="rainmaker"
              title="Rainmaker Badges"
              description="Rare achievements. Track mastery and long streaks."
            />
            <TierCard
              id="boardroom"
              icon={Crown}
              variant="boardroom"
              title="Boardroom Badges"
              description="Legendary. Only a few ever unlock these."
            />
          </div>
        </section>

        {/* Sections (anchors) */}
        <TierSection
          id="analyst"
          icon={Briefcase}
          variant="analyst"
          title="Tier 1 · Analyst"
          description="Beginner achievements to kickstart momentum."
          badges={byTier[1]}
          progress={progress}
        />

        <TierSection
          id="associate"
          icon={LineChart}
          variant="associate"
          title="Tier 2 · Associate"
          description="Intermediate goals for consistent progress."
          badges={byTier[2]}
          progress={progress}
        />

        <TierSection
          id="rainmaker"
          icon={Trophy}
          variant="rainmaker"
          title="Tier 3 · Rainmaker"
          description="Expert-level achievements with real challenge."
          badges={byTier[3]}
          progress={progress}
        />

        <TierSection
          id="boardroom"
          icon={Crown}
          variant="boardroom"
          title="Tier 4 · Boardroom"
          description="Legendary, rare, and sometimes mysterious."
          badges={byTier[4]}
          progress={progress}
        />
      </main>
    </div>
  );
};

export default Badges;
