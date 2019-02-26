import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';
import { reducer as createPasswordResetTokenReducer } from './createPasswordResetToken';
import { reducer as resetPasswordReducer } from './resetPassword';
import { reducer as isValidPasswordResetTokenReducer } from './isValidPasswordResetToken';

export { login } from './login';
export { createPasswordResetToken } from './createPasswordResetToken';
export { resetPassword } from './resetPassword';
export { isValidPasswordResetToken } from './isValidPasswordResetToken';

export const reducer = combineReducers({
  login: loginReducer,
  createPasswordResetToken: createPasswordResetTokenReducer,
  resetPassword: resetPasswordReducer,
  isValidPasswordResetToken: isValidPasswordResetTokenReducer,
});
