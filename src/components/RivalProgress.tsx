import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Clock } from 'lucide-react';
import { AIRival } from '@/types/drill';
import { getRivalInfo } from '@/components/RivalHeader';

interface RivalProgressProps {
  rival: AIRival;
  userXP: number;
  rivalId?: string | null;
}

const RivalProgress = ({ rival, userXP, rivalId }: RivalProgressProps) => {
  const isAhead = userXP > rival.totalXP;
  const xpDifference = Math.abs(userXP - rival.totalXP);
  const rivalInfo = getRivalInfo(rivalId);
  
  return (
    <Card className={`border shadow-sm`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bot size={20} className="text-muted-foreground" />
            <span>AI Rival: {rivalInfo.name}</span>
          </CardTitle>
          <img
            src={rivalInfo.img}
            alt={`${rivalInfo.name} avatar`}
            className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover ring-2 ring-primary/50 hover-scale"
            style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }}
            loading="lazy"
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Your XP</div>
            <div className="text-xl font-bold text-foreground">{userXP.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Rival XP</div>
            <div className="text-xl font-bold text-foreground">{rival.totalXP.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Race Status</span>
            <span className={`font-medium ${isAhead ? 'text-success' : 'text-destructive'}`}>
              {isAhead ? `+${xpDifference} ahead` : `-${xpDifference} behind`}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock size={14} />
            <span>{rival.daysRemaining} days remaining</span>
            <span>•</span>
            <span>{rival.dailyXPGoal} XP/day goal</span>
          </div>
        </div>

        <div className="mt-2 pt-3 border-t border-border text-xs text-muted-foreground">
          This AI rival is custom-built for your interview timeline. Your goal: beat {rivalInfo.name} before your interview date.
        </div>
      </CardContent>
    </Card>
  );
};

export default RivalProgress;