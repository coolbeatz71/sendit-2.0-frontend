import { OPEN_SIGNIN_MODAL, OPEN_SIGNUP_MODAL, OPEN_ADD_PARCEL_MODAL } from '../action-types';

const modalState = {
  openSignIn: false,
  openSignUp: false,
  openAddParcel: false,
};

/**
 * reducer for the modal page (open & close)
 * @param {object} state
 * @param {object} action
 * @returns {object} new state
 */
const modal = (state = modalState, { type }) => {
  switch (type) {
    case OPEN_SIGNIN_MODAL:
      return { ...state, openSignIn: !state.openSignIn };
    case OPEN_SIGNUP_MODAL:
      return { ...state, openSignUp: !state.openSignUp };
    case OPEN_ADD_PARCEL_MODAL:
      return { ...state, openAddParcel: !state.openAddParcel };
    default:
      return state;
  }
};

export default modal;
