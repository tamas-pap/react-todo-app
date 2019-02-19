import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as todoReducer } from './todos/ducks';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
