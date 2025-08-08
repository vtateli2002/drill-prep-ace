import constanceImg from '@/assets/rivals/constance.png';
import chadsonImg from '@/assets/rivals/chadson.png';
import chartreuseImg from '@/assets/rivals/chartreuse.png';

export type RivalId = 'constance' | 'chadson' | 'chartreuse';

export interface RivalMeta {
  id?: RivalId;
  name: string;
  img: string;
}

export const getRivalInfo = (id?: string | null): RivalMeta => {
  switch (id) {
    case 'constance':
      return { id: 'constance', name: 'Constance', img: constanceImg };
    case 'chadson':
      return { id: 'chadson', name: 'Chadson', img: chadsonImg };
    case 'chartreuse':
      return { id: 'chartreuse', name: 'Chartreuse', img: chartreuseImg };
    default:
      return { name: 'FinanceBot', img: constanceImg };
  }
};
