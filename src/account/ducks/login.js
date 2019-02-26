import { getUser, getAuthToken } from '../services/session';
import { login as doLogin } from '../services/account';

const START_LOGIN = 'ACCOUNT/START_LOGIN';
const COMPLETE_LOGIN = 'ACCOUNT/COMPLETE_LOGIN';
const FAIL_LOGIN = 'ACCOUNT/FAIL_LOGIN';

const INITIAL_STATE = {
  user: getUser(),
  isLoggedIn: !!getAuthToken(),
  isLoggingIn: false,
  isLoginFailed: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, isLoggingIn: true, isLoginFailed: false };
    case COMPLETE_LOGIN:
      return { ...state, isLoggingIn: false, isLoggedIn: true, isLoginFailed: false, user: action.user };
    case FAIL_LOGIN:
      return { ...state, isLoggingIn: false, isLoginFailed: true };
    default:
      return state;
  }
};

const startLogin = () => ({ type: START_LOGIN });
export const completeLogin = user => ({ type: COMPLETE_LOGIN, user });
const failLogin = () => ({ type: FAIL_LOGIN });

export const login = (email, password) => dispatch => {
  dispatch(startLogin());
  doLogin(email, password)
    .then(user => {
      dispatch(completeLogin(user));
    })
    .catch(() => dispatch(failLogin()));
};
