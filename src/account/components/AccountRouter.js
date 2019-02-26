import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage, SignupPage, LogoutPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
    <Route exact path="/account/logout" component={LogoutPage} />
    <Route exact path="/account/signup" component={SignupPage} />
  </>
);

export default AccountRouter;
