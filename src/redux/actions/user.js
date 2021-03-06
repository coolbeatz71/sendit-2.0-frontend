import { UPDATE_IS_AUTH } from '../action-types';
import isAuthorized from '../../helpers/authorization';

/**
 * update user authentication
 * @returns {*} dispatch
 */
const user = () => dispatch => {
  const tokenInfo = isAuthorized();
  if (tokenInfo) {
    dispatch({
      type: UPDATE_IS_AUTH,
      payload: tokenInfo,
    });
  }
};

export default user;
