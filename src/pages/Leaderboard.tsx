import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Crown, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { RANK_TITLES } from '@/types/leaderboard';
import { useDynamicTitles } from '@/hooks/useDynamicTitles';

interface LeaderboardUser {
  id: string;
  username: string;
  xp: number;
  level: number;
  rank: string;
  profile_pic?: string;
  rank_change?: number;
}

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { updateAllUserTitles } = useDynamicTitles();

  const getRankIcon = (title: string) => {
    const config = RANK_TITLES[title as keyof typeof RANK_TITLES];
    return config ? config.emoji : '🎓';
  };

  const getRankChangeDisplay = (change?: number) => {
    if (!change || change === 0) return { text: '–', color: 'text-muted-foreground' };
    if (change > 0) return { text: `🔼 +${change}`, color: 'text-green-500' };
    return { text: `🔽 ${change}`, color: 'text-red-500' };
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      
      // Update all user titles first, but don't wait for it to complete
      updateAllUserTitles().catch(console.error);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('id, username, xp, level, rank, profile_pic, rank_change')
        .order('xp', { ascending: false })
        .limit(20);

      if (error) throw error;
      setLeaderboardData(data || []);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      setLeaderboardData([]); // Set empty array on error
    } finally {
      setLoading(false); // Always set loading to false
    }
  };

  // Set up real-time subscription with minimal refreshing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isSubscribed = true;
    
    const channel = supabase
      .channel('leaderboard_updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles'
        },
        () => {
          if (!isSubscribed) return;
          
          // Debounce the refresh to prevent constant updates
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (isSubscribed && !loading) {
              fetchLeaderboard();
            }
          }, 3000); // Wait 3 seconds before refreshing
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
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
              {leaderboardData.map((user, index) => (
                <div
                  key={user.id}
                  className={`grid grid-cols-12 gap-4 p-3 rounded-lg transition-colors hover:bg-muted/50 ${
                    index < 3 ? 'bg-primary/10 border border-primary/20' : ''
                  }`}
                >
                  <div className="col-span-1 flex items-center">
                    <div className="flex items-center space-x-2">
                      {index === 0 && <Crown className="text-yellow-500" size={16} />}
                      {index === 1 && <Crown className="text-gray-400" size={16} />}
                      {index === 2 && <Crown className="text-amber-600" size={16} />}
                      <span className="font-bold text-foreground">#{index + 1}</span>
                    </div>
                  </div>

                  <div className="col-span-4 flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profile_pic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`} />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary font-medium">
                        {user.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{user.username}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <Badge variant="secondary" className="text-xs">
                      {getRankIcon(user.rank)} {user.rank}
                    </Badge>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className="text-foreground font-medium">{user.level}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <span className="text-foreground font-medium">{user.xp.toLocaleString()}</span>
                  </div>

                  <div className="col-span-1 flex items-center justify-center">
                    <span className={`text-sm font-medium ${getRankChangeDisplay(user.rank_change).color}`}>
                      {getRankChangeDisplay(user.rank_change).text}
                    </span>
                  </div>
                </div>
              ))}
              
              {leaderboardData.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No users found. Be the first to join!
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;