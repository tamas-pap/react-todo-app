import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { THEME } from './common/constants';
import { GlobalStyle } from './core/components/styled';
import store from './store';

import { LoginPage } from './account/components/pages';

const App = () => (
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/account/login" component={LoginPage} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
