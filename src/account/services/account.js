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

export const signup = (firstName, lastName, email, password) => {
  const payload = {
    firstName,
    lastName,
    email,
    password,
  };
  return http.post('/account/sign-up', payload).then(response => {
    const user = response.data;
    const authToken = response.headers.authtoken;
    const refreshToken = response.headers.refreshtoken;
    create(authToken, refreshToken, user);
    return user;
  });
};

export const logout = () => http.post('/account/logout').then(() => destroy());
