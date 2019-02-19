import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { THEME } from './common/constants';
import { TodoList } from './todos/components';
import { GlobalStyle } from './core/components/styled';
import store from './store';

const App = () => (
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <TodoList />
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
