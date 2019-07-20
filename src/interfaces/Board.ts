import { SquareType } from './Square';

export interface BoardState {
  squares: SquareType[];
  xIsNext: boolean;
}
