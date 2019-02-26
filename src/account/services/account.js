import http from '../../core/services/http';
import { create, destroy } from './session';

export const login = (email, password) => {
  const payload = {
    email,
    password,
  };
  return http.post('/account/login', payload).then(response => {
    const user = response.data;
    const authToken = response.headers.authtoken;
    const refreshToken = response.headers.refreshtoken;
    create(authToken, refreshToken, user);
    return user;
  });
};

export const logout = () => http.post('/account/logout').then(() => destroy());

export const createPasswordResetToken = email => {
  const payload = { email };
  return http.post('/account/create-password-reset-token', payload);
};

export const resetPassword = (token, password) => {
  const payload = {
    password,
  };

  return http.post(`/account/reset-password?passwordResetToken=${token}`, payload);
};

export const isValidPasswordResetToken = token => http.get(`/account/is-valid-password-reset-token?passwordResetToken=${token}`);
