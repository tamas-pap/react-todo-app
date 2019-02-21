import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../ducks';
import { FormError } from '../../../core/components/styled';

import { Page, PageTitle, PageLogo } from '../../../common/components/styled';

import { SignupForm, SignupSchema } from '../forms';

class SignupPage extends Component {
  handleSubmit = ({ firstName, lastName, email, password }) => {
    const { signup } = this.props;
    signup(firstName, lastName, email, password);
  };

  render() {
    const { isSignInFailed, isSignInSuccessful } = this.props;
    return (
      <Page>
        <PageLogo />
        <PageTitle>Welcome!</PageTitle>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          onSubmit={this.handleSubmit}
          render={SignupForm}
          validationSchema={SignupSchema}
        />
        {isSignInFailed && <FormError> An error occured. Please try again later.</FormError>}

        {isSignInSuccessful && <Redirect to="/todos" />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isSignInSuccessful: state.account.signup.isSignInSuccessful,
  isSignInFailed: state.account.signup.isSignInFailed,
  isSigningIn: state.account.signup.isSigningIn,
});
const mapDispatchToProps = { signup };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupPage);
