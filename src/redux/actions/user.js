import { UPDATE_IS_AUTH } from '../action-types';
import checkToken from '../../helpers/checkToken';

/**
 * update user authentication
 * @returns {*} dispatch
 */
const user = () => dispatch => {
  const tokenInfo = checkToken();
  if (tokenInfo) {
    dispatch({
      type: UPDATE_IS_AUTH,
      payload: tokenInfo,
    });
  }
};

export default user;
