export type SquareType = string | null;

export interface SquareProps {
  value: SquareType;
  onClick: () => void;
}
