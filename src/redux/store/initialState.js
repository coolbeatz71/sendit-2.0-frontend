import checkToken from '../../helpers/checkToken';
import img from '../../assets/img/blank_profile_pic.png';

const initialState = {
  currentUser: {
    isAuth: !!checkToken(),
    user: checkToken() || {
      firstName: '',
      lastName: '',
      email: '',
      img,
      isAdmin: false,
    },
  },
};

export default initialState;
