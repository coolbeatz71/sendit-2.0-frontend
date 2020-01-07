import isAuthorized from '../../helpers/authorization';
import img from '../../assets/img/blank_profile_pic.png';

const initialState = {
  currentUser: {
    isAuth: isAuthorized(),
    user: isAuthorized() || {
      img,
      _id: '',
      email: '',
      isAdmin: false,
    },
  },
};

export default initialState;
