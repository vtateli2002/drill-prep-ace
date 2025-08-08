import { Clock } from 'lucide-react';

interface DailyGoalProps {
  xpPerDay: number;
}

const DailyGoal = ({ xpPerDay }: DailyGoalProps) => {
  return <span>{xpPerDay} XP/day goal</span>;
};

interface RaceStatusProps {
  daysRemaining: number;
  xpPerDay: number;
}

const RaceStatus = ({ daysRemaining, xpPerDay }: RaceStatusProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Clock size={14} />
      <span>{daysRemaining} days remaining</span>
      <span>•</span>
      <DailyGoal xpPerDay={xpPerDay} />
    </div>
  );
};

export { DailyGoal };
export default RaceStatus;
