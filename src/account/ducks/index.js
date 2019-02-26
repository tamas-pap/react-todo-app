import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';
import { reducer as forgotPasswordReducer } from './forgotPassword';

export { login } from './login';
export { forgotPassword } from './forgotPassword';

export const reducer = combineReducers({
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
});
