import produce from 'immer';
import memoize from 'memoize-one';
import { TODO_FILTERS } from '../constants';
import { createTodo as doTodo, listTodos as doListTodos } from '../services/todos';

const START_ADD_TODO = 'TODOS/START_ADD_TODO';
const COMPLETE_ADD_TODO = 'TODOS/COMPLETE_ADD_TODO';
const FAIL_ADD_TODO = 'TODOS/FAIL_ADD_TODO';

const START_LIST_TODOS = 'TODOS/START_LIST_TODOS';
const COMPLETE_LIST_TODOS = 'TODOS/COMPLETE_LIST_TODOS';
const FAIL_LIST_TODOS = 'TODOS/FAIL_LIST_TODOS';

const START_TOGGLE_TODO = 'TODOS/START_TOGGLE_TODO';
const COMPLETE_TOGGLE_TODO = 'TODOS/COMPLETE_TOGGLE_TODO';
const FAIL_TOGGLE_TODO = 'TODOS/FAIL_TOGGLE_TODO';

const DELETE_TODO = 'TODOS/DELETE_TODO';
const UPDATE_FILTER = 'TODOS/UPDATE_FILTER';

// initial state
const initialState = { todos: [], filter: TODO_FILTERS.all };

// reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_ADD_TODO:
      return { ...state, isAddingTodo: true };

    case COMPLETE_ADD_TODO:
      return produce(state, draftState => {
        draftState.todos.push({ ...action.todo });
        draftState.isAddingTodo = false;
        draftState.isAddTodoSuccessful = true;
      });

    case FAIL_ADD_TODO:
      return produce(state, draftState => {
        draftState.isAddingTodo = false;
        draftState.isAddTodoSuccessful = false;
        draftState.isAddTodoFailed = true;
      });

    case START_LIST_TODOS:
      return { ...state, isListingTodos: true };

    case COMPLETE_LIST_TODOS:
      return { ...state, todos: action.todos, isListTodosSuccessful: true, isListingTodos: false };

    case FAIL_LIST_TODOS:
      return { ...state, isListTodosFailed: true, isListTodosSuccessful: false, isListingTodos: false };

    case START_TOGGLE_TODO:
      return { ...state, isTogglingTodo: true };

    case COMPLETE_TOGGLE_TODO:
      return produce(state, draftState => {
        draftState.todos[action.index].isCompleted = !draftState.todos[action.index].isCompleted;
        draftState.isToggleTodoSuccessful = true;
        draftState.isTogglingTodo = false;
      });

    case FAIL_TOGGLE_TODO:
      return { ...state, isToggleTodoFailed: true, isToggleTodoSuccessful: false, isTogglingTodo: false };

    case DELETE_TODO:
      return produce(state, draftState => {
        draftState.todos.splice(action.index, 1);
      });

    case UPDATE_FILTER:
      return produce(state, draftState => {
        draftState.filter = action.filter;
      });

    default:
      return state;
  }
};

// action creators
export const startAddTodo = () => ({ type: START_ADD_TODO });
export const failAddTodo = () => ({ type: FAIL_ADD_TODO });
export const completeAddTodo = todo => ({ type: COMPLETE_ADD_TODO, todo });
export const startListTodos = () => ({ type: START_LIST_TODOS });
export const failListTodos = () => ({ type: FAIL_LIST_TODOS });
export const completeListTodos = todos => ({ type: COMPLETE_LIST_TODOS, todos });
export const toggleTodo = index => ({ type: COMPLETE_TOGGLE_TODO, index });
export const deleteTodo = index => ({ type: DELETE_TODO, index });
export const updateFilter = filter => ({ type: UPDATE_FILTER, filter });

export const addTodo = (todoListId, title) => dispatch => {
  dispatch(startAddTodo());
  doTodo(todoListId, title)
    .then(newTodo => dispatch(completeAddTodo(newTodo)))
    .catch(() => dispatch(failAddTodo()));
};

export const listTodos = todoListId => dispatch => {
  dispatch(startListTodos());
  doListTodos(todoListId)
    .then(todos => dispatch(completeListTodos(todos)))
    .catch(() => dispatch(failListTodos()));
};

// selectors
export const filterTodos = memoize(todosState => {
  switch (todosState.filter) {
    case TODO_FILTERS.all:
      return todosState.todos;

    case TODO_FILTERS.completed:
      return todosState.todos.filter(todo => todo.isCompleted);

    case TODO_FILTERS.incompleted:
      return todosState.todos.filter(todo => !todo.isCompleted);

    default:
      return todosState.todos;
  }
});
