// import { CounterState } from './types';
import { State } from '..';

export const countSelector = (state: State) => state.counter.count;
