import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { FormInput } from '../../../core/components';
import { Button, ButtonSet } from '../../../core/components/styled';

const SignupForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="firstName" placeholder="First Name" component={FormInput} />
    <Field name="lastName" placeholder="Last Name" component={FormInput} />
    <Field name="email" placeholder="Email" component={FormInput} />
    <Field name="password" placeholder="Password" type="password" component={FormInput} />
    <Link to="/account/login">Do have an account? Sign in.</Link>

    <ButtonSet>
      <Button type="submit">Sign Up</Button>
    </ButtonSet>
  </form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
