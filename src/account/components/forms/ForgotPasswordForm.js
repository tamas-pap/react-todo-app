import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { FormInput } from '../../../core/components';
import { Button, ButtonSet } from '../../../core/components/styled';

const ForgotPasswordForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="email" placeholder="Email address" component={FormInput} />
    <ButtonSet>
      <Button type="submit">Send Email</Button>
    </ButtonSet>
  </form>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
