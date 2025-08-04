import { Progress } from '@/components/ui/progress';
import { Trophy, Zap } from 'lucide-react';

interface XPProgressProps {
  currentXP: number;
  levelXP: number;
  level: number;
  streak?: number;
}

const XPProgress = ({ currentXP, levelXP, level, streak }: XPProgressProps) => {
  const progress = (currentXP / levelXP) * 100;
  
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Trophy className="text-primary" size={16} />
          <span className="text-sm font-medium text-muted-foreground">Level {level}</span>
        </div>
        {streak && (
          <div className="flex items-center space-x-1">
            <Zap className="text-primary" size={14} />
            <span className="text-sm font-medium text-primary">{streak} day streak</span>
          </div>
        )}
      </div>
      
      <Progress value={progress} className="mb-2" />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{currentXP.toLocaleString()} XP</span>
        <span>{levelXP.toLocaleString()} XP</span>
      </div>
    </div>
  );
};

export default XPProgress;