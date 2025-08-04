import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Track, TRACK_NAMES, TRACK_COLORS } from '@/types/drill';

interface TrackCardProps {
  track: Track;
  completed: number;
  total: number;
  xp: number;
  onStart: () => void;
}

const TrackCard = ({ track, completed, total, xp, onStart }: TrackCardProps) => {
  const progress = total > 0 ? (completed / total) * 100 : 0;
  const isComplete = completed === total;
  
  return (
    <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{TRACK_NAMES[track]}</CardTitle>
          <div className={`w-3 h-3 rounded-full bg-${TRACK_COLORS[track]}`} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{completed}/{total}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-muted-foreground">XP earned: </span>
            <span className="text-primary font-medium">{xp.toLocaleString()}</span>
          </div>
          
          <Button
            size="sm"
            onClick={onStart}
            variant={isComplete ? "secondary" : "default"}
            className="group-hover:translate-x-1 transition-transform"
          >
            {isComplete ? "Review" : "Start"}
            <ChevronRight size={14} className="ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackCard;