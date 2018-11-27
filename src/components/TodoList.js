import React, { Component } from 'react';
import {
  TodoList as TodoListContainer,
  TodoListTitle,
  TodoListItems,
  TodoListItem,
  TodoListInput,
  TodoListCheckbox,
  TodoListDelete,
} from './styled';

class TodoList extends Component {
  state = {
    inputValue: '',
    todos: [
      {
        title: 'todo 1',
        isCompleted: false,
      },
      {
        title: 'todo 2',
        isCompleted: true,
      },
    ],
  };

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

  render() {
    const { todos, inputValue } = this.state;
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
          {todos.map((todo, index) => (
            <TodoListItem key={index}>
              <TodoListCheckbox isChecked={todo.isCompleted} onClick={() => this.toggleTodo(index)} />
              {todo.title}
              <TodoListDelete onClick={() => this.deleteTodo(index)} />
            </TodoListItem>
          ))}
        </TodoListItems>
      </TodoListContainer>
    );
  }
}

export default TodoList;
