import { combineReducers } from 'redux';
import sort from './sort';
import grid from './grid';
import { createStore } from 'redux';

const rootReducer = combineReducers({ sort, grid });

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;