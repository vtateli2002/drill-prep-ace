import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Crown } from 'lucide-react';
import { getRankIcon, getRankChangeDisplay } from '@/features/leaderboard/utils/display';

export interface LeaderboardUser {
  id: string;
  username: string;
  xp: number;
  level: number;
  rank: string;
  profile_pic?: string;
  rank_change?: number;
  is_bot?: boolean;
}

interface RowProps {
  user: LeaderboardUser;
  index: number;
}

const nameClean = (u: LeaderboardUser) => (u.is_bot ? u.username.replace(/[0-9]/g, '') || u.username : u.username);

const LeaderboardRow = ({ user, index }: RowProps) => {
  const change = getRankChangeDisplay(user.rank_change);

  return (
    <div
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
          <AvatarImage src={user.profile_pic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${nameClean(user)}`} />
          <AvatarFallback className="text-xs bg-primary/10 text-primary font-medium">
            {nameClean(user).substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-foreground">{nameClean(user)}</span>
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
        <span className={`text-sm font-medium ${change.color}`}>{change.text}</span>
      </div>
    </div>
  );
};

export default LeaderboardRow;
