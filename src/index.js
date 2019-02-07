import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { THEME } from './common/constants';
import { Provider } from 'react-redux';
import { TodoList } from './components';
import store from './store';
import { GlobalStyle } from './components/styled';

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
