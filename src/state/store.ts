import { createStore } from 'redux';
import { reducers } from './ducks/index';

const store = createStore(reducers);

export default store;
