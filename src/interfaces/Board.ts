import { SquareType } from '@interfaces/Square';

export interface BoardProps {
  squares: SquareType[];
  onClick: (i: number) => void;
}
