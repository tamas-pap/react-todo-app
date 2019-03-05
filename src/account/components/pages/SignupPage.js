import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../ducks';
import { FormError } from '../../../core/components/styled';
import { Page, PageTitle, PageLogo } from '../../../common/components/styled';
import { SignupForm } from '../forms';
import { SignupSchema } from '../../schemas';

class SignupPage extends Component {
  handleSubmit = ({ firstName, lastName, email, password }) => {
    const { signup } = this.props;
    signup(firstName, lastName, email, password);
  };

  render() {
    const { isSignUpFailed, isSignUpSuccessful, isSigningUp } = this.props;
    return (
      <Page isLoading={isSigningUp}>
        <PageLogo />
        <PageTitle>Welcome!</PageTitle>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          onSubmit={this.handleSubmit}
          render={SignupForm}
          validationSchema={SignupSchema}
        />
        {isSignUpFailed && <FormError> An error occured. Please try again later.</FormError>}

        {isSignUpSuccessful && <Redirect to="/todos" />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isSignUpSuccessful: state.account.signup.isSignUpSuccessful,
  isSignUpFailed: state.account.signup.isSignUpFailed,
  isSigningUp: state.account.signup.isSigningUp,
});
const mapDispatchToProps = { signup };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupPage);
