import jwt from 'jsonwebtoken';

/**
 * Check token from the local storage
 *
 * @description authorization middleware
 * @returns {boolean} isAuthorized
 */
const isAuthorized = () => {
  const auth = localStorage.getItem('token_sendit');
  const userSendit = localStorage.getItem('user_sendit');

  if (!auth) return false;
  if (!userSendit) return false;

  const user = JSON.parse(userSendit);
  const { isLoggedIn, isAdmin, _id } = user;
  const [, token] = auth.split(' ');

  try {
    const jwtPayload = jwt.verify(token, process.env.REACT_APP_JWT_SECRET_KEY);
    return isLoggedIn && isAdmin === jwtPayload.isAdmin && _id === jwtPayload._id;
  } catch (err) {
    return false;
  }
};

export default isAuthorized;
