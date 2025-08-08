import TrackCard from '@/components/TrackCard';
import { Track } from '@/types/drill';

interface TracksGridProps {
  tracks: Track[];
  trackStats: Record<string, { completed: number; total: number; xp: number }>;
  onStart: (track: Track) => void;
}

const TracksGrid = ({ tracks, trackStats, onStart }: TracksGridProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Your Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tracks.map((track) => {
          const stats = trackStats[track];
          return (
            <TrackCard
              key={track}
              track={track}
              completed={stats.completed}
              total={stats.total}
              xp={stats.xp}
              onStart={() => onStart(track)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TracksGrid;
