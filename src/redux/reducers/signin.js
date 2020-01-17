import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNIN_STARTED } from '../action-types/signin';

const signinState = {
  user: null,
  loading: false,
  error: false,
};

/**
 * Signin reducer
 * @param {object} [state=auth]
 * @param {object} { type, payload }
 * @returns {object} updated state
 */
const signin = (state = signinState, { type, payload }) => {
  switch (type) {
    case SIGNIN_STARTED:
      return {
        ...state,
        loading: true,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: false,
        loggedIn: true,
      };

    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default signin;
