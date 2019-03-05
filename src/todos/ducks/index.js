import { combineReducers } from 'redux';
import { reducer as todoReducer } from './todos';

export { addTodo, listTodos, toggleTodo, deleteTodo, updateFilter, filterTodos } from './todos';

export const reducer = combineReducers({
  todos: todoReducer,
});
