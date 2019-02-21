import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';
import { reducer as signupReducer } from './signup';

export { login } from './login';
export { signup } from './signup';

export const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});
