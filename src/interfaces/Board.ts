import { SquareType } from '@interfaces/Square';

export interface BoardState {
  squares: SquareType[];
  xIsNext: boolean;
}
