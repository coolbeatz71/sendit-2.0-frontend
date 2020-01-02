import { OPEN_SIGNIN_MODAL, OPEN_SIGNUP_MODAL, OPEN_ADD_PARCEL_MODAL } from '../action-types';

/**
 * @returns {object} action
 */
export const openSignInModal = () => ({
  type: OPEN_SIGNIN_MODAL,
});

/**
 * @returns {object} action
 */
export const openSignUpModal = () => ({
  type: OPEN_SIGNUP_MODAL,
});

/**
 * @returns {object} action
 */
export const openAddParcelModal = () => ({
  type: OPEN_ADD_PARCEL_MODAL,
});
