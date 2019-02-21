import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Required'),

  password: Yup.string()
    .min(8, 'Password must be min 8 chars long!')
    .matches(/(?=.*?[0-9])(?=.*?[A-Za-z]).+/, 'Password must contain at least one letter and one digit!')
    .required('Required'),
});

export default SignupSchema;
