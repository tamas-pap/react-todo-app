import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';
import { reducer as signupReducer } from './signup';
import { reducer as createPasswordResetTokenReducer } from './createPasswordResetToken';
import { reducer as resetPasswordReducer } from './resetPassword';
import { reducer as isValidPasswordResetTokenReducer } from './isValidPasswordResetToken';

export { completeLogin, login, logout } from './login';
export { signup } from './signup';
export { createPasswordResetToken } from './createPasswordResetToken';
export { resetPassword } from './resetPassword';
export { isValidPasswordResetToken } from './isValidPasswordResetToken';

export const reducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  createPasswordResetToken: createPasswordResetTokenReducer,
  resetPassword: resetPasswordReducer,
  isValidPasswordResetToken: isValidPasswordResetTokenReducer,
});
