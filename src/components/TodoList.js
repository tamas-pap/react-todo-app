import React, { Component } from 'react';
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

class TodoList extends Component {
  state = {
    inputValue: '',
    todos: [],
    filter: FILTERS.all,
    filteredTodos: [],
  };

  static getDerivedStateFromProps(props, state) {
    let filteredTodos;
    switch (state.filter) {
      case FILTERS.all:
        filteredTodos = state.todos;
        break;
      case FILTERS.completed:
        filteredTodos = state.todos.filter(todo => todo.isCompleted);
        break;
      case FILTERS.incompleted:
        filteredTodos = state.todos.filter(todo => !todo.isCompleted);
        break;
      default:
        filteredTodos = state.todos;
        break;
    }
    return { filteredTodos };
  }

  addTodo = title => {
    this.setState(prevState => ({ todos: [{ isCompleted: false, title }, ...prevState.todos] }));
  };

  toggleTodo = toggleIndex => {
    const { todos } = this.state;
    const newTodos = todos.map((todo, index) => {
      if (toggleIndex === index) {
        return {
          isCompleted: !todo.isCompleted,
          title: todo.title,
        };
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = deleteIndex => {
    const shouldDelete = window.confirm('Are you sure?');
    if (shouldDelete) {
      const { todos } = this.state;
      const newTodos = todos.filter((todo, index) => deleteIndex !== index);
      this.setState({
        todos: newTodos,
      });
    }
  };

  onInputKeyPress = event => {
    const { inputValue } = this.state;
    if (event.key === 'Enter' && !!inputValue.trim()) {
      this.addTodo(inputValue);
      this.setState({ inputValue: '' });
    }
  };

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  setFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { inputValue, filter, filteredTodos } = this.state;
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
          {filteredTodos.map((todo, index) => (
            <TodoListItem key={index}>
              <TodoListCheckbox isChecked={todo.isCompleted} onClick={() => this.toggleTodo(index)} />
              {todo.title}
              <TodoListDelete onClick={() => this.deleteTodo(index)} />
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
