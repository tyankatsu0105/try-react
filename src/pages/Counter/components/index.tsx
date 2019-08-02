import React, { FC } from 'react';

export interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const amount: number = 10;

const Counter: FC<CounterProps> = ({
  count = 0,
  add = () => {},
  decrement = () => {},
  increment = () => {},
}: CounterProps) => {
  return (
    <>
      {count}
      <button onClick={decrement}>減る</button>
      <button onClick={increment}>増える</button>
      <button onClick={() => add(amount)}>{amount}増える</button>
    </>
  );
};

export default Counter;
