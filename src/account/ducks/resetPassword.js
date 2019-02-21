import { resetPassword as doResetPassword } from '../services/account';

const START_RESET_PASSWORD = 'ACCOUNT/START_RESET_PASSWORD';
const COMPLETE_RESET_PASSWORD = 'ACCOUNT/COMPLETE_RESET_PASSWORDN';
const FAIL_RESET_PASSWORD = 'ACCOUNT/FAIL_RESET_PASSWORD';

const INITIAL_STATE = {
  isResettingPassword: false,
  isResetPasswordFailed: false,
  isResetPasswordSucces: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_RESET_PASSWORD:
      return { ...state, isResettingPassword: true, isResetPasswordFailed: false };
    case COMPLETE_RESET_PASSWORD:
      return {
        ...state,
        isResettingPassword: false,
        isResetPasswordSucces: true,
        isResetPasswordFailed: false,
      };
    case FAIL_RESET_PASSWORD:
      return { ...state, isResettingPassword: false, isResetPasswordFailed: true };
    default:
      return state;
  }
};

const startResetPassword = () => ({ type: START_RESET_PASSWORD });
const completeResetPassword = () => ({ type: COMPLETE_RESET_PASSWORD });
const failResetPassword = () => ({ type: FAIL_RESET_PASSWORD });

export const resetPassword = (token, password) => dispatch => {
  dispatch(startResetPassword);
  doResetPassword(token, password)
    .then(() => {
      dispatch(completeResetPassword());
    })
    .catch(() => dispatch(failResetPassword()));
};
