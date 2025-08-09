import Navbar from '@/components/Navbar';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, LineChart, Trophy, Crown, ChevronRight, Lock, Award } from 'lucide-react';

const TIER_STYLES = {
  analyst: {
    text: 'text-success',
    bg: 'bg-success/10',
    ring: 'ring-success/40',
    grad: 'from-success/70 to-transparent',
  },
  associate: {
    text: 'text-tracks-accounting',
    bg: 'bg-tracks-accounting/10',
    ring: 'ring-tracks-accounting/40',
    grad: 'from-tracks-accounting/70 to-transparent',
  },
  rainmaker: {
    text: 'text-tracks-lbo',
    bg: 'bg-tracks-lbo/10',
    ring: 'ring-tracks-lbo/40',
    grad: 'from-tracks-lbo/70 to-transparent',
  },
  boardroom: {
    text: 'text-tracks-valuation',
    bg: 'bg-tracks-valuation/10',
    ring: 'ring-tracks-valuation/40',
    grad: 'from-tracks-valuation/70 to-transparent',
  },
} as const;

type BadgeItem = {
  id: string;
  name: string;
  condition: string;
  unlocked: boolean;
};

const TIER_BADGES: Record<keyof typeof TIER_STYLES, BadgeItem[]> = {
  analyst: [
    { id: 'an-1', name: 'First Win', condition: 'Solve 1 problem', unlocked: true },
    { id: 'an-2', name: 'Getting Warm', condition: 'Solve 5 problems', unlocked: true },
    { id: 'an-3', name: 'On a Roll', condition: '3-day streak', unlocked: false },
    { id: 'an-4', name: 'Note Taker', condition: 'Add first note', unlocked: false },
    { id: 'an-5', name: 'Quick Math', condition: 'Use calculator tool', unlocked: false },
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

const BadgeCard = ({ item, variant }: { item: BadgeItem; variant: keyof typeof TIER_STYLES }) => {
  const s = TIER_STYLES[variant];
  return (
    <div className="relative group rounded-lg border border-border bg-card/60 p-4 transition-all hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-start gap-3">
        <div className={`p-[2px] rounded-full bg-gradient-to-b ${s.grad}`}>
          <div className={`w-10 h-10 rounded-full ${s.bg} ${s.text} grid place-items-center ring-1 ${s.ring} ring-offset-2 ring-offset-card group-hover:ring-2`}>
            <Award size={18} />
          </div>
        </div>
        <div className={item.unlocked ? '' : 'opacity-60'}>
          <div className="font-semibold text-foreground leading-tight">{item.name}</div>
          <div className="text-xs text-muted-foreground mt-1">{item.condition}</div>
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
            <div className={`p-[2px] rounded-full bg-gradient-to-b ${s.grad} transition-transform duration-300 group-hover:scale-105`}>
              <div className={`w-12 h-12 rounded-full ${s.bg} ${s.text} grid place-items-center ring-1 ${s.ring} ring-offset-2 ring-offset-card group-hover:ring-2`}>
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
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
  variant: keyof typeof TIER_STYLES;
  badges: BadgeItem[];
}) => {
  const s = TIER_STYLES[variant];
  return (
    <section id={id} className="mt-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className={`p-[2px] rounded-full bg-gradient-to-b ${s.grad}`}>
              <div className={`w-10 h-10 rounded-full ${s.bg} ${s.text} grid place-items-center ring-1 ${s.ring}`}>
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
            {badges.map((b) => (
              <BadgeCard key={b.id} item={b} variant={variant} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};


const Badges = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/badges` : undefined;
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
              icon={Crown}
              variant="rainmaker"
              title="Rainmaker Badges"
              description="Rare achievements. Track mastery and long streaks."
            />
            <TierCard
              id="boardroom"
              icon={Trophy}
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
          badges={TIER_BADGES.analyst}
        />

        <TierSection
          id="associate"
          icon={LineChart}
          variant="associate"
          title="Tier 2 · Associate"
          description="Intermediate goals for consistent progress."
          badges={TIER_BADGES.associate}
        />

        <TierSection
          id="rainmaker"
          icon={Crown}
          variant="rainmaker"
          title="Tier 3 · Rainmaker"
          description="Expert-level achievements with real challenge."
          badges={TIER_BADGES.rainmaker}
        />

        <TierSection
          id="boardroom"
          icon={Trophy}
          variant="boardroom"
          title="Tier 4 · Boardroom"
          description="Legendary, rare, and sometimes mysterious."
          badges={TIER_BADGES.boardroom}
        />
      </main>
    </div>
  );
};

export default Badges;
