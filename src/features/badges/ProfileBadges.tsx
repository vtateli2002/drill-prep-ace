import { useMemo } from 'react';
import { Award } from 'lucide-react';
import { useBadges, UIBadge } from '@/features/badges/useBadges';

// Tier styles to match the Badges page
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
    text: 'text-tracks-valuation',
    bg: 'bg-tracks-valuation/10',
    ring: 'ring-tracks-valuation/40',
    grad: 'from-tracks-valuation/70 to-transparent',
  },
  boardroom: {
    text: 'text-tracks-lbo',
    bg: 'bg-tracks-lbo/10',
    ring: 'ring-tracks-lbo/40',
    grad: 'from-tracks-lbo/70 to-transparent',
  },
} as const;

type Variant = keyof typeof TIER_STYLES;
const getVariant = (tier?: number): Variant => {
  switch (tier) {
    case 1: return 'analyst';
    case 2: return 'associate';
    case 3: return 'rainmaker';
    case 4: return 'boardroom';
    default: return 'analyst';
  }
};

function BadgeTile({ badge }: { badge: UIBadge }) {
  const v = TIER_STYLES[getVariant(badge.tier)];
  return (
    <div className="relative group rounded-lg border border-border bg-card/60 p-4 transition-all hover:shadow-lg hover-scale">
      <div className="flex items-start gap-3">
        <div className={`p-[2px] rounded-full bg-gradient-to-b ${v.grad}`}>
          <div className={`w-10 h-10 rounded-full ${v.bg} ${v.text} grid place-items-center ring-1 ${v.ring} ring-offset-2 ring-offset-card group-hover:ring-2`}>
            <Award size={18} />
          </div>
        </div>
        <div>
          <div className="font-semibold text-foreground leading-tight line-clamp-1">{badge.name}</div>
          <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{badge.condition}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProfileBadges() {
  const { byTier, loading } = useBadges();

  const unlocked = useMemo(() => {
    const list = [...(byTier[1] || []), ...(byTier[2] || []), ...(byTier[3] || []), ...(byTier[4] || [])]
      .filter((b) => b.unlocked);
    return list.sort((a, b) => (a.tier || 1) - (b.tier || 1));
  }, [byTier]);

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading badges…</div>;
  }

  if (unlocked.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        You haven’t earned any badges yet. Start solving problems to earn your first one!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {unlocked.map((b) => (
        <BadgeTile key={b.id} badge={b} />
      ))}
    </div>
  );
}
