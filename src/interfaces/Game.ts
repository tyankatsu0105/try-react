type HistroyType = {
  squares: ('O' | 'X' | null)[];
};

export interface GameState {
  history: HistroyType[];
  xIsNext: boolean;
  stepNumber: number;
}
