import { combineReducers } from 'redux';
import { reducer as todoReducer } from './todos';

export { addTodo, toggleTodo, deleteTodo, updateFilter, filterTodos } from './todos';

export const reducer = combineReducers({
  todos: todoReducer,
});
