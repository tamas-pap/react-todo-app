import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';
import { reducer as createPasswordResetTokenReducer } from './createPasswordResetToken';

export { login } from './login';
export { createPasswordResetToken } from './createPasswordResetToken';

export const reducer = combineReducers({
  login: loginReducer,
  createPasswordResetToken: createPasswordResetTokenReducer,
});
