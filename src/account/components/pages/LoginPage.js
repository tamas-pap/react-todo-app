import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../ducks';
import { FormError } from '../../../core/components/styled';

import { Page, PageTitle, PageLogo } from '../../../common/components/styled';

import { LoginForm } from '../forms';

class LoginPage extends Component {
  handleSubmit = ({ email, password }) => {
    const { login } = this.props;
    login(email, password);
  };

  render() {
    const { isLoginFailed, isLoggedIn } = this.props;
    return (
      <Page>
        <PageLogo />
        <PageTitle>Welcome back</PageTitle>
        {isLoginFailed && <FormError> Wrong credentials provided</FormError>}
        <Formik onSubmit={this.handleSubmit} render={LoginForm} />

        {isLoggedIn && <Redirect to="/todos" />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.account.login.isLoggedIn,
  isLoginFailed: state.account.login.isLoginFailed,
  isLoggingIn: state.account.login.isLoggingIn,
});
const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
