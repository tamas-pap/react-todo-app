import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage, ResetPasswordPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
    <Route exact path="/account/password-reset/:token" component={ResetPasswordPage} />
  </>
);

export default AccountRouter;
