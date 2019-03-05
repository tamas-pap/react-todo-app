import {
  createTodoList as doCreateTodoList,
  deleteTodoList as doDeleteTodoList,
  loadTodoLists as doLoadTodoLists,
} from './services/todoLists';
import produce from 'immer';

const START_CREATE_TODOLIST = 'TODOLISTS/START_CREATE_TODOLIST';
const COMPLETE_CREATE_TODOLIST = 'TODOLISTS/COMPLETE_CREATE_TODOLIST';
const FAILED_CREATE_TODOLIST = 'TODOLISTS/FAILED_CREATE_TODOLIST';
const START_DELETE_TODOLIST = 'TODOLISTS/START_DELETE_TODOLIST';
const COMPLETE_DELETE_TODOLIST = 'TODOLISTS/COMPLETE_DELETE_TODOLIST';
const FAILED_DELETE_TODOLIST = 'TODOLISTS/FAILED_DELETE_TODOLIST';
const START_LOAD_TODOLISTS = 'TODOLISTS/START_LOAD_TODOLISTS';
const COMPLETE_LOAD_TODOLISTS = 'TODOLISTS/COMPLETE_LOAD_TODOLISTS';
const FAILED_LOAD_TODOLISTS = 'TODOLISTS/FAILED_LOAD_TODOLISTS';

const INITIAL_STATE = {
  todoLists: [],
  isCreatingTodoList: false,
  isCreatedTodoList: false,
  isCreateTodoListFailed: false,
  isDeletingTodoList: false,
  isDeletedTodoList: false,
  isDeleteTodoListFailed: false,
  isLoadingTodoLists: false,
  isLoadedTodoLists: false,
  isLoadTodoListsFailed: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_CREATE_TODOLIST:
      return { ...state, isCreatingTodoList: true, isCreatedTodoList: false, isCreateTodoListFailed: false };

    case COMPLETE_CREATE_TODOLIST:
      return produce(state, draftState => {
        draftState.todoLists.push({
          ...action.todoList,
        }),
          (draftState.isCreatingTodoList = false),
          (draftState.isCreatedTodoList = true),
          (draftState.isCreateTodoListFailed = false);
      });

    case FAILED_CREATE_TODOLIST:
      return { ...state, isCreatingTodoList: false, isCreatedTodoList: false, isCreateTodoListFailed: true };
    case START_DELETE_TODOLIST:

    case COMPLETE_DELETE_TODOLIST:

    case FAILED_DELETE_TODOLIST:

    case START_LOAD_TODOLISTS:
      return { ...state, isLoadingTodoLists: true, isLoadedTodoLists: false, isLoadTodoListsFailed: false };

    case COMPLETE_LOAD_TODOLISTS:
      return produce(state, draftState => {
        (draftState.todoLists = action.todoLists),
          (draftState.isLoadingTodoLists = false),
          (draftState.isLoadedTodoLists = true),
          (draftState.isCreateTodoListFailed = false);
      });
    case FAILED_LOAD_TODOLISTS:
      return { ...state, isLoadingTodoLists: false, isLoadedTodoLists: false, isLoadTodoListsFailed: true };
    default:
      return state;
  }
};

const startCreateTodoList = () => ({ type: START_CREATE_TODOLIST });
const completeCreateTodoList = todoList => ({ type: COMPLETE_CREATE_TODOLIST, todoList });
const failCreateTodoList = () => ({ type: FAILED_CREATE_TODOLIST });
export const createTodoList = title => dispatch => {
  dispatch(startCreateTodoList);
  doCreateTodoList(title)
    .then(todoList => {
      dispatch(completeCreateTodoList(todoList));
    })
    .catch(() => dispatch(failCreateTodoList()));
};

const startLoadTodoLists = () => ({ type: START_LOAD_TODOLISTS });
