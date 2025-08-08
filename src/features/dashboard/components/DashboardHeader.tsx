import { Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  onDailyChallenge: () => void;
}

const DashboardHeader = ({ onDailyChallenge }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back to Drill</h1>
        <p className="text-muted-foreground">Keep grinding to beat your AI rival and ace those interviews.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onDailyChallenge} className="px-6">
          <Target className="mr-2" size={16} />
          Daily Challenge
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
