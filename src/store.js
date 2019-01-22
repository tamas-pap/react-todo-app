import { createStore } from 'redux';
import produce from 'immer';
import memoize from 'memoize-one';
import { TODO_FILTERS } from './constants';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_FILTER = 'UPDATE_FILTER';

// initial state
const initialState = { todos: [], filter: TODO_FILTERS.all };

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, draftState => {
        draftState.todos.push({ ...action.todo, isCompleted: false });
      });

    case TOGGLE_TODO:
      return produce(state, draftState => {
        draftState.todos[action.index].isCompleted = !draftState.todos[action.index].isComplete;
      });

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
export const addTodo = todo => ({ type: ADD_TODO, todo });
export const toggleTodo = index => ({ type: TOGGLE_TODO, index });
export const deleteTodo = index => ({ type: DELETE_TODO, index });
export const updateFilter = filter => ({ type: UPDATE_FILTER, filter });

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

const store = createStore(todoReducer);

export default store;
