import React from 'react';
import { SquareProps } from '@interfaces/Square';

export default function Square(props: SquareProps) {
  const { onClick, value } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
