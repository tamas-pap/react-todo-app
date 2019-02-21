import React from 'react';
import { Route } from 'react-router-dom';
import { TodoListPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/todos" component={TodoListPage} />
  </>
);

export default AccountRouter;
