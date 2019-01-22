import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import { TodoList } from './components';
import store from './store';
import { GlobalStyle } from './components/styled';

const App = () => (
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <TodoList />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
