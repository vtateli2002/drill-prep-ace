import { Button } from '@/components/ui/button';
import { Track } from '@/types/drill';
import { tracks, getTrackConfig } from '@/features/problems/utils/configs';

interface TrackFilterProps {
  selected: Track | 'all';
  onChange: (t: Track | 'all') => void;
}

const TrackFilter = ({ selected, onChange }: TrackFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onChange('all')}
        className="font-medium"
      >
        All Tracks
      </Button>
      {tracks.map((track) => {
        const config = getTrackConfig(track);
        return (
          <Button
            key={track}
            variant={selected === track ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChange(track)}
            className={`font-medium ${selected === track ? config.color : ''}`}
          >
            <span className="mr-2">{config.icon}</span>
            {config.label}
          </Button>
        );
      })}
    </div>
  );
};

export default TrackFilter;
