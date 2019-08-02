import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addAction,
  decrementAction,
  incrementAction,
  countSelector,
} from '@state/ducks/counter';
import Counter from '@pages/Counter/components';

const CounterContainer: FC = () => {
  const count = useSelector(countSelector);

  const dispatch = useDispatch();
  const add = useCallback((amount: number) => dispatch(addAction(amount)), [
    dispatch,
  ]);
  const decrement = useCallback(() => dispatch(decrementAction()), [dispatch]);
  const increment = useCallback(() => dispatch(incrementAction()), [dispatch]);

  const props = {
    count,
    add,
    decrement,
    increment,
  };

  return <Counter {...props} />;
};

export default CounterContainer;
