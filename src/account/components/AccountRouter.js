import React from 'react';
import { Route } from 'react-router-dom';
import {
  InvalidPasswordResetToken,
  ForgotPasswordPage,
  SignupPage,
  LoginPage,
  LogoutPage,
  ResetPasswordPage,
} from './pages';

const AccountRouter = () => (
  <>
    <Route exact path="/account/login" component={LoginPage} />
    <Route exact path="/account/logout" component={LogoutPage} />
    <Route exact path="/account/signup" component={SignupPage} />
    <Route exact path="/account/forgot-password" component={ForgotPasswordPage} />
    <Route exact path="/account/password-reset/:token" component={ResetPasswordPage} />
    <Route exact path="/account/invalid-password" component={InvalidPasswordResetToken} />
  </>
);

export default AccountRouter;
