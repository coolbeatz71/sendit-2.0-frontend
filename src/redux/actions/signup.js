import api from '../../api';
import { SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_STARTED } from '../action-types/signup';

/**
 * Triggers when the sign up process starts
 * @return {object} action
 */
export const signupStarted = () => ({ type: SIGNUP_STARTED });

/**
 * Triggers when the sign up process succeed
 * @param {object} user
 * @return {object} action
 */
export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

/**
 * Triggers when the sign up process fails
 * @param {object} error
 * @return {object} action
 */
export const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error,
});

/**
 * Register the user
 * @param {*} { firstName, lastName, email, password }
 * @return {object} response
 */
export const signup = ({ firstName, lastName, email, password }) => async dispatch => {
  dispatch(signupStarted());
  try {
    const res = await api.post(
      `/auth/signup`,
      {
        firstName,
        lastName,
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

    dispatch(signupSuccess(data));
    return res;
  } catch (e) {
    if (e.response) {
      dispatch(signupError(e.response.data.message));
      return e.response;
    }
    dispatch(signupError('Please check your internet connection'));
    return e;
  }
};
