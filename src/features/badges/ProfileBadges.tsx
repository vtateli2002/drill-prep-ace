import { useMemo } from 'react';
import { Award } from 'lucide-react';
import { useBadges, UIBadge } from '@/features/badges/useBadges';

// Tier styles to match the Badges page
const TIER_STYLES: Record<'analyst' | 'associate' | 'rainmaker' | 'boardroom', { text?: string; bg?: string; ring?: string; grad?: string; icon?: string; outerGrad?: string; ringColor?: string }> = {
  analyst: {
    text: 'text-success',
    bg: 'bg-success/10',
    ring: 'ring-success/40',
    grad: 'from-success/70 to-transparent',
  },
  associate: { icon: 'badge-icon--blue badge--blue', outerGrad: 'from-[hsl(var(--tier-blue-bg))] to-transparent', ringColor: 'ring-[hsl(var(--tier-blue-base)/0.4)]' },
  rainmaker: { icon: 'badge-icon--purple badge--purple', outerGrad: 'from-[hsl(var(--tier-purple-bg))] to-transparent', ringColor: 'ring-[hsl(var(--tier-purple-base)/0.4)]' },
  boardroom: { icon: 'badge-icon--gold badge--gold', outerGrad: 'from-[hsl(var(--tier-gold-bg))] to-transparent', ringColor: 'ring-[hsl(var(--tier-gold-base)/0.4)]' },
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
  const variant = getVariant(badge.tier);
  const s = TIER_STYLES[variant];
  return (
    <div className="relative group rounded-lg border border-border bg-card/60 p-4 transition-all hover:shadow-lg hover-scale">
      <div className="flex items-start gap-3">
        {variant === 'analyst' ? (
          <div className={`p-[2px] rounded-full bg-gradient-to-b ${s.grad}`}>{/* outer halo */}
            <div className={`w-10 h-10 rounded-full ${s.bg} ${s.text} grid place-items-center ring-1 ${s.ring} ring-offset-2 ring-offset-card group-hover:ring-2`}>
              <Award size={18} className="text-inherit" />
            </div>
          </div>
        ) : (
          <div className={`tier-ring ${variant === 'associate' ? 'tier-blue' : variant === 'rainmaker' ? 'tier-purple' : 'tier-gold'}`}>
            <div className={`tier-ring__inner w-10 h-10 ring-1 ${variant === 'associate' ? 'ring-[hsl(var(--tier-blue-base)/0.4)]' : variant === 'rainmaker' ? 'ring-[hsl(var(--tier-purple-base)/0.4)]' : 'ring-[hsl(var(--tier-gold-base)/0.4)]'} ring-offset-2 ring-offset-card group-hover:ring-2`}>
              <Award size={18} className="text-inherit" />
            </div>
          </div>
        )}
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
