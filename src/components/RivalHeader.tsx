import constanceImg from '@/assets/rivals/constance.png';
import chadsonImg from '@/assets/rivals/chadson.png';
import chartreuseImg from '@/assets/rivals/chartreuse.png';
import { memo, useMemo } from 'react';

export type RivalId = 'constance' | 'chadson' | 'chartreuse';

export const getRivalInfo = (id?: string | null) => {
  switch (id) {
    case 'constance':
      return { id: 'constance' as const, name: 'Constance', img: constanceImg };
    case 'chadson':
      return { id: 'chadson' as const, name: 'Chadson', img: chadsonImg };
    case 'chartreuse':
      return { id: 'chartreuse' as const, name: 'Chartreuse', img: chartreuseImg };
    default:
      return { id: undefined, name: 'FinanceBot', img: constanceImg };
  }
};

interface RivalHeaderProps {
  rivalId?: string | null;
}

const RivalHeader = memo(({ rivalId }: RivalHeaderProps) => {
  const rival = useMemo(() => getRivalInfo(rivalId), [rivalId]);

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={rival.img}
          alt={`${rival.name} avatar`}
          loading="lazy"
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-primary/50"
          style={{ boxShadow: '0 0 16px hsl(var(--primary) / 0.35)' }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm sm:text-base font-medium text-foreground">
          AI Rival: <span className="font-semibold">{rival.name}</span>
        </span>
      </div>
    </div>
  );
});

export default RivalHeader;
