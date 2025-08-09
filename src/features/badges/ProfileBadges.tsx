import { useMemo } from 'react';
import { Award } from 'lucide-react';
import { useBadges, UIBadge } from '@/features/badges/useBadges';

// Tier styles to match the Badges page
const TIER_STYLES: Record<'analyst' | 'associate' | 'rainmaker' | 'boardroom', { text?: string; bg?: string; ring?: string; grad?: string; icon?: string }> = {
  analyst: {
    text: 'text-success',
    bg: 'bg-success/10',
    ring: 'ring-success/40',
    grad: 'from-success/70 to-transparent',
  },
  associate: { icon: 'badge-icon--blue' },
  rainmaker: { icon: 'badge-icon--purple' },
  boardroom: { icon: 'badge-icon--gold' },
};

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
  const s = TIER_STYLES[getVariant(badge.tier)];
  return (
    <div className="relative group rounded-lg border border-border bg-card/60 p-4 transition-all hover:shadow-lg hover-scale">
      <div className="flex items-start gap-3">
        <div className={`p-[2px] rounded-full ${s.icon ? '' : `bg-gradient-to-b ${s.grad}`}`}>{/* icon wrapper */}
          <div className={`w-10 h-10 rounded-full grid place-items-center ring-offset-2 ring-offset-card group-hover:ring-2 ${s.icon ? s.icon : `${(s as any).bg} ${(s as any).text} ring-1 ${(s as any).ring}`}`}>
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
