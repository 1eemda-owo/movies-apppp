import { combineReducers } from 'redux';
import sort from './sort';
import grid from './grid';

const rootReducer = combineReducers({ sort, grid });

export default rootReducer;