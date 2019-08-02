import { combineReducers } from 'redux';

import { CounterState, counter } from './counter';

export interface State {
  counter: CounterState;
}

export const reducers = combineReducers<State>({ counter: counter });
