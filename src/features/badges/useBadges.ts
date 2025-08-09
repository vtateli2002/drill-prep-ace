import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type UIBadge = {
  id: string;
  slug: string;
  name: string;
  condition: string;
  unlocked: boolean;
  tier: number;
};

export function useBadges() {
  const [badges, setBadges] = useState<UIBadge[]>([]);
  const [unlockIds, setUnlockIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBadges = async () => {
    const { data, error } = await supabase
      .from('badges')
      .select('id, slug, name, description, tier, hidden_until_unlock')
      .order('tier', { ascending: true })
      .order('name', { ascending: true });
    if (error) throw error;
    return data ?? [];
  };

  const fetchUnlocks = async () => {
    const { data, error } = await supabase
      .from('badge_unlocks')
      .select('badge_id'); // RLS limits to current user

    if (error) {
      // If unauthenticated or RLS blocks, just return empty unlocks
      console.warn('fetchUnlocks warning:', error.message);
      return [] as { badge_id: string }[];
    }
    return data ?? [];
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        const [badgesData, unlocksData] = await Promise.all([
          fetchBadges(),
          fetchUnlocks(),
        ]);

        if (!mounted) return;

        const unlockedSet = new Set((unlocksData || []).map((u) => u.badge_id));
        setUnlockIds(unlockedSet);

        const uiBadges: UIBadge[] = (badgesData || [])
          .filter((b: any) => b.slug !== 'quick_math')
          .map((b: any) => {
            const unlocked = unlockedSet.has(b.id);
            const hidden = !!b.hidden_until_unlock;
            const masked = hidden && !unlocked;
            return {
              id: b.id,
              slug: b.slug,
              name: masked ? '???' : b.name,
              condition: masked ? 'Legendary badge. Keep going.' : (b.description ?? ''),
              unlocked,
              tier: b.tier ?? 1,
            } as UIBadge;
          });
        setBadges(uiBadges);
      } catch (e: any) {
        console.error('useBadges load error:', e);
        setError(e?.message ?? 'Failed to load badges');
      } finally {
        setLoading(false);
      }
    })();

    const channel = supabase
      .channel('badge_unlocks-insert')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'badge_unlocks' },
        (payload) => {
          const newId = (payload as any)?.new?.badge_id as string | undefined;
          if (!newId) return;

          setUnlockIds((prev) => {
            if (prev.has(newId)) return prev;
            const next = new Set(prev);
            next.add(newId);
            return next;
          });

          console.log('Realtime badge unlock received:', payload);
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const byTier = useMemo(() => {
    const map: Record<1 | 2 | 3 | 4, UIBadge[]> = { 1: [], 2: [], 3: [], 4: [] };
    for (const b of badges) {
      const tier = (b.tier ?? 1) as 1 | 2 | 3 | 4;
      if (map[tier]) {
        map[tier].push({ ...b, unlocked: unlockIds.has(b.id) });
      }
    }
    return map;
  }, [badges, unlockIds]);

  return { byTier, loading, error };
}
