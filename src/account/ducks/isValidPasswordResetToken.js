import { isValidPasswordResetToken as doIsValidPasswordResetToken } from '../services/account';

const START_VERIFY_TOKEN = 'ACCOUNT/START_VERIFY_TOKEN';
const COMPLETE_VERIFY_TOKEN = 'ACCOUNT/COMPLETE_VERIFY_TOKEN';
const FAIL_VERIFY_TOKEN = 'ACCOUNT/FAIL_VERIFY_TOKEN';

const INITIAL_STATE = {
  isVerifyingToken: false,
  isVerifyTokenFailed: false,
  isValidToken: true,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_VERIFY_TOKEN:
      return { ...state, isVerifyingToken: true, isVerifyTokenFailed: false };
    case COMPLETE_VERIFY_TOKEN:
      return {
        ...state,
        isVerifyingToken: false,
        isValidToken: action.payload,
        isVerifyTokenFailed: false,
      };
    case FAIL_VERIFY_TOKEN:
      return { ...state, isVerifyingToken: false, isVerifyTokenFailed: true };
    default:
      return state;
  }
};

const startVerifyToken = () => ({ type: START_VERIFY_TOKEN });
const completeVerifyToken = ({ isValid }) => ({ type: COMPLETE_VERIFY_TOKEN, payload: isValid });
const failVerifyToken = () => ({ type: FAIL_VERIFY_TOKEN });

export const isValidPasswordResetToken = token => dispatch => {
  dispatch(startVerifyToken);
  doIsValidPasswordResetToken(token)
    .then(response => {
      dispatch(completeVerifyToken(response.data));
    })
    .catch(() => dispatch(failVerifyToken()));
};
