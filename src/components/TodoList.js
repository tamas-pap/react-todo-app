import React, { Component } from 'react';
import {
  TodoList as TodoListContainer,
  TodoListTitle,
  TodoListItems,
  TodoListItem,
  TodoListInput,
  TodoListCheckbox,
} from './styled';

class TodoList extends Component {
  state = {
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
    this.setState(prevState => ({ todos: [...prevState.todos, { isCompleted: false, title }] }));
  };

  render() {
    const { todos } = this.state;
    return (
      <TodoListContainer>
        <TodoListTitle>Todo list</TodoListTitle>
        <TodoListInput />
        <TodoListItems>
          {todos.map((todo, index) => (
            <TodoListItem key={index}>
              <TodoListCheckbox isChecked={todo.isCompleted} />
              {todo.title}
            </TodoListItem>
          ))}
        </TodoListItems>
      </TodoListContainer>
    );
  }
}

export default TodoList;
