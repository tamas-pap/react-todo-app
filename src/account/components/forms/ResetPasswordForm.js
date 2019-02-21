import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { FormInput } from '../../../core/components';
import { Button, ButtonSet } from '../../../core/components/styled';

const ResetPasswordForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="newPassword" placeholder="New password" type="password" component={FormInput} />
    <Field name="confirmPassword" placeholder="Confirm your password" type="password" component={FormInput} />

    <ButtonSet>
      <Button type="submit">Reset password</Button>
    </ButtonSet>
  </form>
);

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
