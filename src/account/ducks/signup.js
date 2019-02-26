import { signup as doSignUp } from '../services/account';
import { completeLogin } from './login';

const START_SIGNUP = 'ACCOUNT/START_SIGNUP';
const COMPLETE_SIGNUP = 'ACCOUNT/COMPLETE_SIGNUP';
const FAIL_SIGNUP = 'ACCOUNT/FAIL_SIGNUP';

const INITIAL_STATE = {
  isSigningUp: false,
  isSignUpSuccessful: false,
  isSignUpFailed: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_SIGNUP:
      return { ...state, isSigningUp: true, isSignUpFailed: false };
    case COMPLETE_SIGNUP:
      return { ...state, isSigningUp: false, isSignUpSuccessful: true, isSignUpFailed: false };
    case FAIL_SIGNUP:
      return { ...state, isSigningUp: false, isSignUpFailed: true };
    default:
      return state;
  }
};

const startSignUp = () => ({ type: START_SIGNUP });
const completeSignUp = user => ({ type: COMPLETE_SIGNUP, user });
const failSignUp = () => ({ type: FAIL_SIGNUP });

export const signup = (firstName, lastName, email, password) => dispatch => {
  dispatch(startSignUp());
  doSignUp(firstName, lastName, email, password)
    .then(user => {
      dispatch(completeSignUp(user));
      dispatch(completeLogin(user));
    })
    .catch(() => dispatch(failSignUp()));
};
