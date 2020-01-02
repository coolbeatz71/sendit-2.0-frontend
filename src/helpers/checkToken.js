import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * check token from the local storage
 * @returns {void}
 */
const checkToken = () => {
  const auth = localStorage.getItem('token_sendit');
  if (!auth) return false;
  const [, token] = auth.split(' ');
  try {
    const jwtPayload = jwt.verify(token, process.env.REACT_JWT_SECRET_KEY);
    return jwtPayload;
  } catch (err) {
    return false;
  }
};

export default checkToken;
