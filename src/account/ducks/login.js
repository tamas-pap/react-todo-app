import { getUser, getAuthToken } from '../services/session';
import { login as doLogin, logout as doLogout } from '../services/account';

const START_LOGIN = 'ACCOUNT/START_LOGIN';
const COMPLETE_LOGIN = 'ACCOUNT/COMPLETE_LOGIN';
const FAIL_LOGIN = 'ACCOUNT/FAIL_LOGIN';
const START_LOGOUT = 'ACCOUNT/START_LOGOUT';
const COMPLETE_LOGOUT = 'ACCOUNT/COMPLETE_LOGOUT';
const FAIL_LOGOUT = 'ACCOUNT/FAIL_LOGOUT';

const INITIAL_STATE = {
  user: getUser(),
  isLoggedIn: !!getAuthToken(),
  isLoggingIn: false,
  isLoginFailed: false,
  isLoggingOut: false,
  isLoggedOut: false,
  isLogoutFailed: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, isLoggingIn: true, isLoginFailed: false };
    case COMPLETE_LOGIN:
      return { ...state, isLoggingIn: false, isLoggedIn: true, isLoginFailed: false, user: action.user };
    case FAIL_LOGIN:
      return { ...state, isLoggingIn: false, isLoginFailed: true };
    case START_LOGOUT:
      return { ...state, isLoggingOut: true, isLogoutFailed: false };
    case COMPLETE_LOGOUT:
      return {
        ...state,
        isLoggingOut: false,
        isLogoutFailed: false,
        isLoggedIn: false,
        isLoggedOut: true,
        user: undefined,
      };
    case FAIL_LOGOUT:
      return { ...state, isLoggingOut: false, isLogoutFailed: true, isLoggedIn: true };
    default:
      return state;
  }
};

const startLogin = () => ({ type: START_LOGIN });
export const completeLogin = user => ({ type: COMPLETE_LOGIN, user });
const failLogin = () => ({ type: FAIL_LOGIN });

const startLogout = () => ({ type: START_LOGOUT });
const completeLogout = user => ({ type: COMPLETE_LOGOUT, user });
const failLogout = () => ({ type: FAIL_LOGOUT });

export const login = (email, password) => dispatch => {
  dispatch(startLogin());
  doLogin(email, password)
    .then(user => {
      dispatch(completeLogin(user));
    })
    .catch(() => dispatch(failLogin()));
};

export const logout = () => dispatch => {
  dispatch(startLogout());
  doLogout()
    .then(() => {
      dispatch(completeLogout());
    })
    .catch(() => dispatch(failLogout()));
};
