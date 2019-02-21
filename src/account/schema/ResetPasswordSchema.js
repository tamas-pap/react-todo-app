import * as Yup from 'yup';

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'Password is too short')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], "Confirm password doesn't match new password")
    .min(6, 'Password is too short')
    .required('Confirm password is required'),
});

export default ResetPasswordSchema;
