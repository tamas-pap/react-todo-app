import React, { Component } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { forgotPassword } from '../../ducks';

import { FormError } from '../../../core/components/styled';

import { Page, PageTitle, PageLogo, PageSubtitle } from '../../../common/components/styled';

import { ForgotPasswordForm } from '../forms';

class ForgotPasswordPage extends Component {
  handleSubmit = ({ email }) => {
    const { forgotPassword } = this.props;
    forgotPassword(email);
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.isCreatingPasswordResetToken &&
      !this.props.isCreatingPasswordResetToken &&
      !this.props.isCreatingPasswordResetTokenFailed
    ) {
      // <Redirect to="/todos" />;
    }
  }

  render() {
    const { isCreatingPasswordResetToken, isCreatingPasswordResetTokenFailed } = this.props;
    return (
      <Page>
        <PageLogo />
        <PageTitle>Forgot your password?</PageTitle>
        <PageSubtitle>Enter your email address and we will send you a link to reset your password.</PageSubtitle>
        {isCreatingPasswordResetToken && <PageSubtitle>Loading...</PageSubtitle>}
        {isCreatingPasswordResetTokenFailed && <FormError> Wrong Email! :(</FormError>}
        <Formik onSubmit={this.handleSubmit} render={ForgotPasswordForm} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isCreatingPasswordResetToken: state.account.forgotPassword.isCreatingPasswordResetToken,
  isCreatingPasswordResetTokenFailed: state.account.forgotPassword.isCreatingPasswordResetTokenFailed,
});
const mapDispatchToProps = { forgotPassword };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordPage);
