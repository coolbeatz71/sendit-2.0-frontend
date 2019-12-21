import axios from 'axios';

const token = localStorage.getItem('token_sendit') || '';
export default axios.create({
  baseURL: process.env.SENDIT_BACKEND_URL,
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
  },
});
