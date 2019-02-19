import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { FormInput } from '../../../core/components';
import { Button, ButtonSet } from '../../../core/components/styled';

const LoginForm = ({ isSubmitting, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="email" placeholder="Email" component={FormInput} />
    <Field name="password" placeholder="Password" type="password" component={FormInput} />
    <Link to="/account/forgot-password">Forgot password?</Link>

    <ButtonSet>
      <Button type="submit">{isSubmitting ? 'Logging...' : 'Log In'}</Button>
    </ButtonSet>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
