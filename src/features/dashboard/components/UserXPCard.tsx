import XPProgress from '@/components/XPProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatXP } from '@/features/dashboard/utils/formatXP';

interface UserXPCardProps {
  currentXP: number;
  level: number;
  streak: number;
}

const UserXPCard = ({ currentXP, level, streak }: UserXPCardProps) => {
  return (
    <div className="space-y-4">
      <XPProgress currentXP={currentXP} levelXP={0} level={level} streak={streak} />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{formatXP(currentXP)}</div>
              <div className="text-sm text-muted-foreground">Total XP</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserXPCard;
