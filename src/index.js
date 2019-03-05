import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { THEME } from './common/constants';
import { GlobalStyle } from './core/components/styled';
import { AccountRouter, AuthRoute } from './account/components';
import { TodosRouter } from './todos/components';
import history from './core/services/history';
import registerAuthInterceptor from './account/services/registerAuthInterceptor';
import store from './store';

registerAuthInterceptor();

const App = () => (
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/account" component={AccountRouter} />
          <AuthRoute path="/todo-list" component={TodosRouter} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
