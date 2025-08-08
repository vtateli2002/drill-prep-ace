import { Button } from '@/components/ui/button';
import { Difficulty } from '@/types/drill';
import { difficulties, getDifficultyConfig } from '@/features/problems/utils/configs';

interface DifficultyFilterProps {
  selected: Difficulty | 'all';
  onChange: (d: Difficulty | 'all') => void;
}

const DifficultyFilter = ({ selected, onChange }: DifficultyFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onChange('all')}
        className="font-medium"
      >
        All Difficulties
      </Button>
      {difficulties.map((difficulty) => {
        const config = getDifficultyConfig(difficulty);
        const Icon = config.icon;
        return (
          <Button
            key={difficulty}
            variant={selected === difficulty ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChange(difficulty)}
            className={`font-medium ${selected === difficulty ? config.color : ''}`}
          >
            <Icon className="h-4 w-4 mr-2" />
            {config.label}
          </Button>
        );
      })}
    </div>
  );
};

export default DifficultyFilter;
