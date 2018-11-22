import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';

import {
  GlobalStyle,
  TodoList,
  TodoListTitle,
  TodoListItems,
  TodoListItem,
  TodoListInput,
  TodoListCheckbox,
} from './components/styled';

const App = () => (
  <Fragment>
    <Normalize />
    <GlobalStyle />
    <TodoList>
      <TodoListTitle>Todo list</TodoListTitle>
      <TodoListInput />
      <TodoListItems>
        <TodoListItem>
          <TodoListCheckbox />
          Todo 1
        </TodoListItem>
        <TodoListItem>
          <TodoListCheckbox />
          Todo 2
        </TodoListItem>
      </TodoListItems>
    </TodoList>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
