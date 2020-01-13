import api from '../../api';
import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNIN_STARTED } from '../action-types/signin';

/**
 * Triggers when the sign in process starts
 * @return {object} action
 */
export const signinStarted = () => ({ type: SIGNIN_STARTED });

/**
 * Triggers when the sign in process succeed
 * @param {object} user
 * @return {object} action
 */
export const signinSuccess = user => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

/**
 * Triggers when the sign in process fails
 * @param {object} error
 * @return {object} action
 */
export const signinError = error => ({
  type: SIGNIN_ERROR,
  payload: error,
});

/**
 * Login the user
 * @param {*} { email, password }
 * @return {object} response
 */
export const signin = ({ email, password }) => async dispatch => {
  dispatch(signinStarted());
  try {
    const res = await api.post(
      '/auth/signin',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { data, token } = res.data;

    // Save the user with the authorization token
    localStorage.setItem('token_sendit', `Bearer ${token}`);
    localStorage.setItem('user_sendit', JSON.stringify(data));

    dispatch(signinSuccess(data));
    return res;
  } catch (e) {
    if (e.response) {
      dispatch(signinError(e.response.data.message));
      return e.response;
    }
    dispatch(signinError('Please check your internet connection'));
    return e;
  }
};
