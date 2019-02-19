import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Page, PageTitle, PageLogo } from '../../../common/components/styled';

import { LoginForm } from '../forms';

class LoginPage extends Component {
  static propTypes = {};

  handleSubmit = ({ email, password }) => {
    console.log('email', email);
    console.log('password', password);
  };

  render() {
    return (
      <Page>
        <PageLogo />
        <PageTitle>Welcome back</PageTitle>
        <Formik onSubmit={this.handleSubmit} render={LoginForm} />
      </Page>
    );
  }
}

export default LoginPage;
