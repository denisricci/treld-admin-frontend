import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
} from '../constants/actions/auth';

const INITIAL_STATE = {
  user: localStorage.getItem('profile'),
  loading: false,
  error: '',
  username: '',
  password: '',
  hasErrors: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload, hasErrors: false };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, hasErrors: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '', hasErrors: false };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_ERROR:
      return { ...state, error: action.payload, password: '', loading: false, hasErrors: true };
    default:
      return state;
  }
};
