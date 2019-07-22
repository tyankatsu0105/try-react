import React from 'react';
import { SquareProps } from '@interfaces/Square';

export const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { onClick, value } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
