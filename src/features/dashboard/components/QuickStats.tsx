import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuickStatsProps {
  xp: number;
  streak: number;
}

const QuickStats = ({ xp, streak }: QuickStatsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{xp}</div>
            <div className="text-sm text-muted-foreground">Total XP</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{streak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStats;
