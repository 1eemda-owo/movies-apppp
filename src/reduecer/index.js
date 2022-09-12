import SortingApi from './SortingApi';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  SortingApi: SortingApi,
});

export default allReducer;
