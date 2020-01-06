import { combineReducers } from 'redux';
import modal from './modal';
import currentUser from './currentUser';

const reducers = combineReducers({
  currentUser,
  modal,
});

export default reducers;
