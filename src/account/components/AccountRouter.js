import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage, ForgotPasswordPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
    <Route exact path="/account/forgot-password" component={ForgotPasswordPage} />
  </>
);

export default AccountRouter;
