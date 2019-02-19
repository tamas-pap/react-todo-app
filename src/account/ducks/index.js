import { combineReducers } from 'redux';
import { reducer as loginReducer } from './todos';

export { login } from './todos';

export const reducer = combineReducers({
  login: loginReducer,
});
