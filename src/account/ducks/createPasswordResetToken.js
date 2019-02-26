import { createPasswordResetToken as doCreatePasswordResetToken } from '../services/account';

const START_CREATE_PASSWORD_RESET_TOKEN = 'ACCOUNT/START_CREATE_PASSWORD_RESET_TOKEN';
const COMPLETE_CREATE_PASSWORD_RESET_TOKEN = 'ACCOUNT/COMPLETE_CREATE_PASSWORD_RESET_TOKEN';
const FAIL_CREATE_PASSWORD_RESET_TOKEN = 'ACCOUNT/FAIL_CREATE_PASSWORD_RESET_TOKEN';

const INITIAL_STATE = {
  isCreatingPasswordResetToken: false,
  isCreatePasswordResetTokenFailed: false,
  isCreatePasswordResetTokenCompleted: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_CREATE_PASSWORD_RESET_TOKEN:
      return {
        ...state,
        isCreatingPasswordResetToken: true,
        isCreatePasswordResetTokenFailed: false,
        isCreatePasswordResetTokenCompleted: false,
      };
    case COMPLETE_CREATE_PASSWORD_RESET_TOKEN:
      return {
        ...state,
        isCreatingPasswordResetToken: false,
        isCreatePasswordResetTokenFailed: false,
        isCreatePasswordResetTokenCompleted: true,
      };
    case FAIL_CREATE_PASSWORD_RESET_TOKEN:
      return {
        ...state,
        isCreatingPasswordResetToken: false,
        isCreatePasswordResetTokenFailed: true,
        isCreatePasswordResetTokenCompleted: false,
      };
    default:
      return state;
  }
};

const startCreatePasswordResetToken = () => ({ type: START_CREATE_PASSWORD_RESET_TOKEN });
const completeCreatePasswordResetToken = () => ({ type: COMPLETE_CREATE_PASSWORD_RESET_TOKEN });
const failCreatePasswordResetToken = () => ({ type: FAIL_CREATE_PASSWORD_RESET_TOKEN });

export const createPasswordResetToken = email => dispatch => {
  dispatch(startCreatePasswordResetToken());
  doCreatePasswordResetToken(email)
    .then(() => dispatch(completeCreatePasswordResetToken()))
    .catch(() => dispatch(failCreatePasswordResetToken()));
};
