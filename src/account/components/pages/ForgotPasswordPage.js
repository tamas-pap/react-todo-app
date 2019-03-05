import React, { Component } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPasswordResetToken } from '../../ducks';
import { FormError } from '../../../core/components/styled';
import { Page, PageTitle, PageLogo, PageSubtitle } from '../../../common/components/styled';
import { ForgotPasswordForm } from '../forms';
import { ForgetPasswordSchema } from '../../schemas';

class ForgotPasswordPage extends Component {
  handleSubmit = ({ email }) => {
    const { createPasswordResetToken } = this.props;
    createPasswordResetToken(email);
  };

  render() {
    const {
      isCreatingPasswordResetToken,
      isCreatePasswordResetTokenFailed,
      isCreatePasswordResetTokenCompleted,
    } = this.props;
    return (
      <Page isLoading={isCreatingPasswordResetToken}>
        <PageLogo />
        <PageTitle>Forgot your password?</PageTitle>
        <PageSubtitle>Enter your email address and we will send you a link to reset your password.</PageSubtitle>
        {isCreatePasswordResetTokenFailed && <FormError> Wrong Email! :(</FormError>}
        {isCreatePasswordResetTokenCompleted && <Redirect to="/account/login" />}
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgetPasswordSchema}
          onSubmit={this.handleSubmit}
          render={ForgotPasswordForm}
        />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isCreatingPasswordResetToken: state.account.createPasswordResetToken.isCreatingPasswordResetToken,
  isCreatePasswordResetTokenFailed: state.account.createPasswordResetToken.isCreatePasswordResetTokenFailed,
  isCreatePasswordResetTokenCompleted: state.account.createPasswordResetToken.isCreatePasswordResetTokenCompleted,
});
const mapDispatchToProps = { createPasswordResetToken };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordPage);
