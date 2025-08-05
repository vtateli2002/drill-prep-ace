import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Crown } from 'lucide-react';
import { LEADERBOARD_DATA } from '@/data/leaderboard';
import { RANK_TITLES } from '@/types/leaderboard';

const Leaderboard = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const getRankIcon = (title: string) => {
    const config = RANK_TITLES[title as keyof typeof RANK_TITLES];
    return config ? config.emoji : '🎓';
  };

  const getMovementColor = (movement: string) => {
    if (movement.includes('⬆')) return 'text-green-400';
    if (movement.includes('⬇')) return 'text-red-400';
    return 'text-muted-foreground';
  };

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
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Player</div>
              <div className="col-span-2">Title</div>
              <div className="col-span-2">Level</div>
              <div className="col-span-2">XP</div>
              <div className="col-span-1">Change</div>
            </div>

            <div className="space-y-2 mt-4">
              {LEADERBOARD_DATA.map((user, index) => (
                <div
                  key={user.username}
                  className={`grid grid-cols-12 gap-4 p-3 rounded-lg transition-colors hover:bg-muted/50 ${
                    index < 3 ? 'bg-primary/10 border border-primary/20' : ''
                  }`}
                >
                  <div className="col-span-1 flex items-center">
                    <div className="flex items-center space-x-2">
                      {index === 0 && <Crown className="text-yellow-500" size={16} />}
                      {index === 1 && <Crown className="text-gray-400" size={16} />}
                      {index === 2 && <Crown className="text-amber-600" size={16} />}
                      <span className="font-bold text-foreground">#{user.rank}</span>
                    </div>
                  </div>

                  <div className="col-span-4 flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`} />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary font-medium">
                        {user.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{user.username}</span>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <Badge variant="secondary" className="text-xs">
                      {getRankIcon(user.title || 'Intern')} {user.title || 'Intern'}
                    </Badge>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="text-foreground font-medium">{user.level}</span>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="text-foreground font-medium">{user.xp.toLocaleString()}</span>
                  </div>

                  <div className="col-span-1 flex items-center">
                    <span className={`text-sm font-medium ${getMovementColor(user.daily_movement)}`}>
                      {user.daily_movement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;