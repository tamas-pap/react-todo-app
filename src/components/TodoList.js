import React, { Component } from 'react';
import memoize from 'memoize-one';
import io from 'socket.io-client';
import nanoid from 'nanoid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants';
import {
  TodoList as TodoListContainer,
  TodoListTitle,
  TodoListItems,
  TodoListItem,
  TodoListInput,
  TodoListCheckbox,
  TodoListDelete,
  TodoListFilter,
  TodoListFilterOptions,
  TodoListFilterOption,
  TodoListFilterLabel,
} from './styled';

const FILTERS = {
  all: 'All',
  completed: 'Completed',
  incompleted: 'Incompleted',
};

const filterTodos = memoize((todos, filter) => {
  switch (filter) {
    case FILTERS.all:
      return todos;

    case FILTERS.completed:
      return todos.filter(todo => todo.isCompleted);

    case FILTERS.incompleted:
      return todos.filter(todo => !todo.isCompleted);

    default:
      return todos;
  }
});

class TodoList extends Component {
  constructor(props) {
    super(props);
    const storedTodos = localStorage.getItem('todos');
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    const filter = localStorage.getItem('filter') || FILTERS.all;

    this.state = {
      inputValue: '',
      todos,
      filter,
    };
  }

  componentDidMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', this.onMessage);
  }

  componentDidUpdate() {
    this.saveToLocalStorage();
  }

  onMessage = message => {
    const { type, payload } = message;
    switch (type) {
      case ADD_TODO:
        this.addTodo(payload.title, payload.id);
        break;

      case TOGGLE_TODO:
        this.toggleTodo(payload.id);
        break;

      case DELETE_TODO:
        this.deleteTodo(payload.id);
        break;

      default:
        break;
    }
  };

  addTodo = (title, existingId, shouldSendMessage = false) => {
    const id = existingId || nanoid();
    this.setState(prevState => ({ todos: [{ id, isCompleted: false, title }, ...prevState.todos] }));
    if (shouldSendMessage) {
      this.socket.emit('message', { type: ADD_TODO, payload: { title, id } });
    }
  };

  toggleTodo = (toggleId, shouldSendMessage = false) => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => {
      if (toggleId === todo.id) {
        return {
          isCompleted: !todo.isCompleted,
          title: todo.title,
          id: todo.id,
        };
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
    if (shouldSendMessage) {
      this.socket.emit('message', { type: TOGGLE_TODO, payload: { id: toggleId } });
    }
  };

  deleteTodo = (deleteId, shouldSendMessage = false) => {
    const shouldDelete = !shouldSendMessage || window.confirm('Are you sure?');
    if (shouldDelete) {
      const { todos } = this.state;
      const newTodos = todos.filter(todo => deleteId !== todo.id);
      this.setState({
        todos: newTodos,
      });
      if (shouldSendMessage) {
        this.socket.emit('message', { type: DELETE_TODO, payload: { id: deleteId } });
      }
    }
  };

  onInputKeyPress = event => {
    const { inputValue } = this.state;
    if (event.key === 'Enter' && !!inputValue.trim()) {
      this.addTodo(inputValue, undefined, true);
      this.setState({ inputValue: '' });
    }
  };

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  setFilter = filter => {
    this.setState({ filter });
  };

  saveToLocalStorage = () => {
    const { todos, filter } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('filter', filter);
  };

  render() {
    const { inputValue, filter, todos } = this.state;
    const filteredTodos = filterTodos(todos, filter);

    return (
      <TodoListContainer>
        <TodoListTitle>Todo list</TodoListTitle>
        <TodoListInput
          placeholder="Write your idea here..."
          onKeyPress={this.onInputKeyPress}
          onChange={this.onInputChange}
          value={inputValue}
        />
        <TodoListItems>
          {filteredTodos.map(todo => (
            <TodoListItem key={todo.id}>
              <TodoListCheckbox isChecked={todo.isCompleted} onClick={() => this.toggleTodo(todo.id, true)} />
              {todo.title}
              <TodoListDelete onClick={() => this.deleteTodo(todo.id, true)} />
            </TodoListItem>
          ))}
        </TodoListItems>
        <TodoListFilter>
          <TodoListFilterLabel>Show:</TodoListFilterLabel>
          <TodoListFilterOptions>
            <TodoListFilterOption isSelected={filter === FILTERS.all} onClick={() => this.setFilter(FILTERS.all)}>
              {FILTERS.all}
            </TodoListFilterOption>
            <TodoListFilterOption
              isSelected={filter === FILTERS.completed}
              onClick={() => this.setFilter(FILTERS.completed)}
            >
              {FILTERS.completed}
            </TodoListFilterOption>
            <TodoListFilterOption
              isSelected={filter === FILTERS.incompleted}
              onClick={() => this.setFilter(FILTERS.incompleted)}
            >
              {FILTERS.incompleted}
            </TodoListFilterOption>
          </TodoListFilterOptions>
        </TodoListFilter>
      </TodoListContainer>
    );
  }
}

export default TodoList;
