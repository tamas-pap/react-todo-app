import { combineReducers } from 'redux';
import { reducer as todoListsReducer } from './todoLists';

export { createTodoList } from './todoLists';

export const reducer = combineReducers({
  todoLists: todoListsReducer,
});
