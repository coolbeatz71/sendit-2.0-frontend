import api from '../../api';
import { signinSuccess, signinError } from './signin';

/**
 * @param {object} response
 * @param {string} provider
 * @return {object} response
 */
export const socialLogin = (response, provider) => async dispatch => {
  try {
    const requestData =
      provider === 'google'
        ? {
            provider,
            image: response.profileObj.imageUrl,
            email: response.profileObj.email,
            name: response.profileObj.name,
          }
        : {
            provider,
            image: response.picture.data.url,
            email: response.email,
            name: response.name,
          };

    const result = await api.post(`/auth/social`, requestData);
    const { data, token } = result.data;

    // Save the user with the authorization token
    localStorage.setItem('token_sendit', `Bearer ${token}`);
    localStorage.setItem('user_sendit', JSON.stringify(data));

    dispatch(signinSuccess(data));
  } catch (err) {
    const message = err.response
      ? err.response.data.message
      : 'Please check your internet connection';
    dispatch(signinError(message));
  }
};
