export const ADD = 'ADD';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';

export const addAction = (amount: number) => ({
  type: ADD as typeof ADD,
  payload: { amount },
});

export const decrementAction = () => ({
  type: DECREMENT as typeof DECREMENT,
});

export const incrementAction = () => ({
  type: INCREMENT as typeof INCREMENT,
});

export type CounterAction =
  | ReturnType<typeof addAction>
  | ReturnType<typeof decrementAction>
  | ReturnType<typeof incrementAction>;
