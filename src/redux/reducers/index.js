import { combineReducers } from 'redux';
import modal from './modal';
import currentUser from './user';
import signupState from './signup';
import signinState from './signin';

const reducers = combineReducers({
  currentUser,
  modal,
  signupState,
  signinState,
});

export default reducers;
