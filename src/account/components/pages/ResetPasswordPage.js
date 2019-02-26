import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetPassword, isValidPasswordResetToken } from '../../ducks';
import { FormError } from '../../../core/components/styled';
import { Page, PageTitle, PageLogo } from '../../../common/components/styled';
import { ResetPasswordForm } from '../forms';
import { ResetPasswordSchema } from '../../schemas';

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);

    const { isValidPasswordResetToken, match } = this.props;
    isValidPasswordResetToken(match.params.token)
  }

  handleSubmit = ({ newPassword }) => {
    const { resetPassword, match } = this.props;
    resetPassword(match.params.token, newPassword);
  };

  render() {
    const { isResetPasswordFailed, isResetPasswordCompleted, isResettingPassword, isVerifyingToken, isValidToken } = this.props;
    return (
      <Page isLoading={isVerifyingToken || isResettingPassword}>
        <PageLogo />
        <PageTitle>Reset your password</PageTitle>
        {isResetPasswordFailed && <FormError> A problem occured. Please try again later</FormError>}
        <Formik validationSchema={ResetPasswordSchema} onSubmit={this.handleSubmit} render={ResetPasswordForm} />

        {isResetPasswordCompleted && <Redirect to="/account/login" />}
        {!isVerifyingToken && !isValidToken && <Redirect to="/account/invalid-password" />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isResetPasswordFailed: state.account.resetPassword.isResetPasswordFailed,
  isResetPasswordCompleted: state.account.resetPassword.isResetPasswordCompleted,
  isResettingPassword: state.account.resetPassword.isResettingPassword,
  isVerifyingToken: state.account.isValidPasswordResetToken.isVerifyingToken,
  isValidToken: state.account.isValidPasswordResetToken.isValidToken,
  isVerifyTokenFailed: state.account.isValidPasswordResetToken.isVerifyTokenFailed,
});
const mapDispatchToProps = { resetPassword, isValidPasswordResetToken };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordPage);
