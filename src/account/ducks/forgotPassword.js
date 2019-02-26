import { forgotPassword as doForgotPassword } from '../services/account';

const START_FORGOT_PASSWORD = 'ACCOUNT/START_FORGOT_PASSWORD';
const COMPLETE_FORGOT_PASSWORD = 'ACCOUNT/COMPLETE_FORGOT_PASSWORD';
const FAIL_FORGOT_PASSWORD = 'ACCOUNT/FAIL_FORGOT_PASSWORD';

const INITIAL_STATE = {
  isCreatingPasswordResetToken: false,
  isCreatingPasswordResetTokenFailed: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FORGOT_PASSWORD:
      return { ...state, isCreatingPasswordResetToken: true, isCreatingPasswordResetTokenFailed: false };
    case COMPLETE_FORGOT_PASSWORD:
      return { ...state, isCreatingPasswordResetToken: false, isCreatingPasswordResetTokenFailed: false };
    case FAIL_FORGOT_PASSWORD:
      return { ...state, isCreatingPasswordResetToken: false, isCreatingPasswordResetTokenFailed: true };
    default:
      return state;
  }
};

const startForgotPassword = () => ({ type: START_FORGOT_PASSWORD });
const completeForgotPassword = () => ({ type: COMPLETE_FORGOT_PASSWORD });
const failForgotPassword = () => ({ type: FAIL_FORGOT_PASSWORD });

export const forgotPassword = email => dispatch => {
  dispatch(startForgotPassword());
  doForgotPassword(email)
    .then(() => dispatch(completeForgotPassword()))
    .catch(() => dispatch(failForgotPassword()));
};
