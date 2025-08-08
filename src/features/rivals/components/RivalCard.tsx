import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AIRival } from '@/types/drill';
import { getRivalInfo } from '@/features/rivals/utils/rivals';
import RaceStatus from '@/features/dashboard/components/RaceStatus';
import { memo } from 'react';

interface RivalCardProps {
  rival: AIRival;
  userXP: number;
  rivalId?: string | null;
}

const RivalCard = ({ rival, userXP, rivalId }: RivalCardProps) => {
  const isAhead = userXP > rival.totalXP;
  const xpDifference = Math.abs(userXP - rival.totalXP);
  const rivalInfo = getRivalInfo(rivalId);

  return (
    <Card className={`border shadow-sm`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">
            <span className="font-semibold">AI Rival:</span>{' '}
            <span className="text-foreground">{rivalInfo.name}</span>
          </CardTitle>
          <img
            src={rivalInfo.img}
            alt={`${rivalInfo.name} avatar`}
            className="h-[60px] w-[60px] rounded-full object-cover ring-2 ring-primary/40"
            style={{ boxShadow: '0 0 18px hsl(var(--primary) / 0.35)' }}
            loading="lazy"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* XP Comparison Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-left">
            <div className="text-sm text-muted-foreground mb-1">Your XP</div>
            <div className="text-xl font-bold text-foreground">{userXP.toLocaleString()}</div>
          </div>
          <div className="text-left">
            <div className="text-sm text-muted-foreground mb-1">Rival XP</div>
            <div className="text-xl font-bold text-foreground">{rival.totalXP.toLocaleString()}</div>
          </div>
          <div className="text-left">
            <div className="text-sm text-muted-foreground mb-1">Net difference</div>
            <div className={`text-xl font-semibold ${isAhead ? 'text-success' : 'text-destructive'}`}>
              {isAhead ? `+${xpDifference} ahead` : `-${xpDifference} behind`}
            </div>
          </div>
        </div>

        {/* Race Status Row */}
        <RaceStatus daysRemaining={rival.daysRemaining} xpPerDay={rival.dailyXPGoal} />

        {/* Footer Message */}
        <div className="p-3 rounded-md bg-muted text-xs text-muted-foreground">
          This AI rival is custom-built for your interview timeline. Your goal: beat {rivalInfo.name} before your interview date.
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(RivalCard);
