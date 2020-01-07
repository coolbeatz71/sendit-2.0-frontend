import { combineReducers } from 'redux';
import modal from './modal';
import currentUser from './user';
import signupState from './signup';

const reducers = combineReducers({
  currentUser,
  modal,
  signupState,
});

export default reducers;
