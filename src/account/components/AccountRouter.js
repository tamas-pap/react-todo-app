import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
  </>
);

export default AccountRouter;
