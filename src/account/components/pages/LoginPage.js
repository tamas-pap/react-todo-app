import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../ducks';
import { FormError } from '../../../core/components/styled';

import { Page, PageTitle, PageLogo } from '../../../common/components/styled';

import { LoginForm } from '../forms';

class LoginPage extends Component {
  static propTypes = {};

  handleSubmit = ({ email, password }) => {
    this.props.login(email, password);
  };

  render() {
    return (
      <Page>
        <PageLogo />
        <PageTitle>Welcome back</PageTitle>
        {this.props.isLoginFailed && <FormError> Wrong credentials provided</FormError>}
        <Formik onSubmit={this.handleSubmit} render={LoginForm} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoginFailed: state.account.login.isLoginFailed,
  isLoggingIn: state.account.login.isLoggingIn,
});
const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
