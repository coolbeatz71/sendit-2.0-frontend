import initialState from '../store/initialState';
import { UPDATE_IS_AUTH } from '../action-types';

/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object} new state
 */
const currentUser = (state = initialState.currentUser, { type, payload }) => {
  switch (type) {
    case UPDATE_IS_AUTH:
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default currentUser;
