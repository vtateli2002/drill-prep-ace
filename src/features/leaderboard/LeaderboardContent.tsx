import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Loader2, Trophy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useDynamicTitles } from '@/hooks/useDynamicTitles';
import LeaderboardRow, { LeaderboardUser } from '@/features/leaderboard/components/LeaderboardRow';
import { featureFlags } from '@/config/featureFlags';

const LeaderboardContent = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { updateAllUserTitles } = useDynamicTitles();

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      if (featureFlags.ENABLE_TITLE_UPDATES_ON_MOUNT) {
        updateAllUserTitles().catch(console.error);
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('id, username, xp, level, rank, profile_pic, rank_change, is_bot')
        .order('xp', { ascending: false })
        .limit(20);

      if (error) throw error;
      setLeaderboardData(data || []);
    } catch (e) {
      console.error('Error fetching leaderboard:', e);
      setLeaderboardData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
    // One-time normalization run per browser session (bump key to re-run when logic changes)
    try {
      const runKey = 'dedupeAiUsernamesRun_v2';
      if (!sessionStorage.getItem(runKey)) {
        supabase.functions
          .invoke('dedupe-ai-usernames', { body: {} })
          .then(() => sessionStorage.setItem(runKey, '1'))
          .catch((err) => console.warn('dedupe-ai-usernames failed', err));
      }
    } catch (e) {
      console.warn('dedupe session guard failed', e);
    }
  }, []);

  useEffect(() => {
    if (!featureFlags.ENABLE_LEADERBOARD_REALTIME) return;
    let timeoutId: NodeJS.Timeout;
    let isSubscribed = true;

    const channel = supabase
      .channel('leaderboard_updates')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'profiles' },
        () => {
          if (!isSubscribed) return;
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (isSubscribed && !loading) fetchLeaderboard();
          }, 3000);
        }
      )
      .subscribe();

    return () => {
      isSubscribed = false;
      clearTimeout(timeoutId);
      supabase.removeChannel(channel);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Trophy className="text-primary" size={32} />
        <h1 className="text-3xl font-bold text-foreground">Leaderboard</h1>
      </div>

      <Card className="bg-card border-border">
        <div className="p-6">
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border text-sm font-medium text-muted-foreground">
            <div className="col-span-1 text-left">Rank</div>
            <div className="col-span-4 text-left">Player</div>
            <div className="col-span-2 text-center">Title</div>
            <div className="col-span-2 text-center">Level</div>
            <div className="col-span-2 text-center">XP</div>
            <div className="col-span-1 text-center">Change</div>
          </div>

          <div className="space-y-2 mt-4">
            {leaderboardData.map((u, i) => (
              <LeaderboardRow key={u.id} user={u} index={i} />
            ))}
            {leaderboardData.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">No users found. Be the first to join!</div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardContent;
