import { combineReducers } from 'redux';
import { reducer as loginReducer } from './login';

export { login } from './login';

export const reducer = combineReducers({
  login: loginReducer,
});
