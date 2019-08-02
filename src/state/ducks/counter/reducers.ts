import { Reducer } from 'redux';

import { CounterState } from './types';
import { ADD, DECREMENT, INCREMENT, CounterAction } from './actions';

const initialState: CounterState = { count: 0 };

export const counter: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + (action.payload.amount || 0),
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};
