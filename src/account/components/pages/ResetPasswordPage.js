import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetPassword } from '../../ducks';
import { FormError } from '../../../core/components/styled';
import { Page, PageTitle, PageLogo } from '../../../common/components/styled';
import { ResetPasswordForm } from '../forms';
import { ResetPasswordSchema } from '../../schema';

class ResetPasswordPage extends Component {
  handleSubmit = ({ newPassword }) => {
    const { resetPassword, match } = this.props;
    resetPassword(match.params.token, newPassword);
  };

  render() {
    const { isResetPasswordFailed, isResetPasswordSucces, isResettingPassword } = this.props;
    return (
      <Page isLoading={isResettingPassword}>
        <PageLogo />
        <PageTitle>Reset your password</PageTitle>
        {isResetPasswordFailed && <FormError> A problem occured. Please try again later</FormError>}
        <Formik validationSchema={ResetPasswordSchema} onSubmit={this.handleSubmit} render={ResetPasswordForm} />

        {isResetPasswordSucces && <Redirect to="/account/login" />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isResetPasswordFailed: state.account.resetPassword.isResetPasswordFailed,
  isResetPasswordSucces: state.account.resetPassword.isResetPasswordSucces,
  isResettingPassword: state.account.resetPassword.isResettingPassword,
});
const mapDispatchToProps = { resetPassword };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordPage);
