import React from 'react';

interface SquareProps {
  value: number;
  onClick: () => void;
}

function Square(props: SquareProps) {
  const { onClick, value } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
