import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './pages';
import { SignupPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
    <Route exact path="/account/signup" component={SignupPage} />
  </>
);

export default AccountRouter;
