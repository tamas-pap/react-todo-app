import React from 'react';
import { Route } from 'react-router-dom';
import { InvalidPasswordResetToken, LoginPage, ResetPasswordPage } from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
    <Route exact path="/account/password-reset/:token" component={ResetPasswordPage} />
    <Route exact path="/account/invalid-password" component={InvalidPasswordResetToken} />
  </>
);

export default AccountRouter;
