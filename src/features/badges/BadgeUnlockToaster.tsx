import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastAction } from '@/components/ui/toast';
const MESSAGES = [
  'Momentum builds mastery.',
  'Another step toward the top!',
  "Keep crushing it — you’re on fire!",
  'Every win counts. Keep going!',
  "You're leveling up like a pro.",
];

const RAINMAKER_MESSAGES = [
  'Elite progress. Keep pushing.',
  "You’re operating at the next level.",
  "That’s mastery in motion.",
];

// Map tier -> classes using semantic tokens (HSL) with subtle glow
const TIER_STYLES: Record<number, { ring: string; shadow: string; emoji?: string }>
  = {
    1: { ring: 'ring-success/40', shadow: 'shadow-[0_0_20px_hsl(var(--success)/0.25)]', emoji: '💪' },
    2: { ring: 'ring-tracks-accounting/40', shadow: 'shadow-[0_0_20px_hsl(var(--accounting)/0.25)]', emoji: '🚀' },
    3: { ring: 'ring-tracks-valuation/40', shadow: 'shadow-[0_0_20px_hsl(var(--valuation)/0.25)]', emoji: '✨' },
    4: { ring: 'ring-tracks-lbo/40', shadow: 'shadow-[0_0_20px_hsl(var(--lbo)/0.25)]', emoji: '🏁' },
  };

export default function BadgeUnlockToaster() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const shown = useRef<Set<string>>(new Set()); // avoid duplicate toasts per session
  const previewShown = useRef(false);

  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('badge-unlock-toasts')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'badge_unlocks',
          filter: `user_id=eq.${user.id}`,
        },
        async (payload) => {
          const newRow: any = (payload as any).new;
          if (!newRow) return;
          const badgeId: string | undefined = newRow.badge_id;
          const userId: string | undefined = newRow.user_id;
          if (!badgeId || userId !== user.id) return;

          if (shown.current.has(badgeId)) return; // prevent duplicates

          // Fetch badge details
          const { data: badge } = await supabase
            .from('badges')
            .select('id, slug, name, tier, icon')
            .eq('id', badgeId)
            .single();

          // Skip deprecated Quick Math badge
          if (badge?.slug === 'quick_math') return;

          const name = badge?.name ?? 'Badge';
          const tier: number = badge?.tier ?? 1;
          const icon = (badge?.icon as string | null) ?? '🏆';
          const style = TIER_STYLES[tier] ?? TIER_STYLES[1];
          const isTier2 = tier === 2;
          const isTier3 = tier === 3;

          shown.current.add(badgeId);

          toast({
            className: [
              'cursor-pointer',
              'bg-card text-card-foreground border border-border',
              'rounded-lg',
              'ring-1',
              style.ring,
              style.shadow,
            ].join(' '),
            duration: 4000,
            onClick: () => navigate(isTier3 ? '/badges#rainmaker' : isTier2 ? '/badges#associate' : '/badges'),
            title: isTier3
              ? 'Tier 3 Badge Unlocked – Rainmaker'
              : isTier2
              ? 'Tier 2 Badge Unlocked – Associate'
              : '🎉 Badge Unlocked!',
            description: isTier3
              ? RAINMAKER_MESSAGES[Math.floor(Math.random() * RAINMAKER_MESSAGES.length)]
              : isTier2
              ? "Impressive progress! You've hit a major milestone toward mastery."
              : `You’re now an ${name}! Keep going!`,
            action: (
              <ToastAction
                altText="View All Badges"
                onClick={() => navigate(isTier3 ? '/badges#rainmaker' : isTier2 ? '/badges#associate' : '/badges')}
              >
                View All Badges
              </ToastAction>
            ),
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, toast, navigate]);


  return null;
}
