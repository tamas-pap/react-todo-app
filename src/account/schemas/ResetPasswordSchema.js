import * as Yup from 'yup';

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, 'Password is too short')
    .matches(/(?=.*?[0-9])(?=.*?[A-Za-z]).+/, 'Password must contain at least one letter and one digit!')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], "Confirm password doesn't match new password")
    .min(8, 'Password is too short')
    .required('Confirm password is required'),
});

export default ResetPasswordSchema;
