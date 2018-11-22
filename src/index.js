import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { TodoList } from './components';

import { GlobalStyle } from './components/styled';

const App = () => (
  <Fragment>
    <Normalize />
    <GlobalStyle />
    <TodoList />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
