import Cookies from 'js-cookie';
import { AUTH_TOKEN_TTL, REFRESH_TOKEN_TTL } from '../constants';

export const create = (authToken, refreshToken, user) => {
  Cookies.set('authToken', authToken, { expires: AUTH_TOKEN_TTL });
  Cookies.set('refreshToken', refreshToken, { expires: REFRESH_TOKEN_TTL });
  Cookies.set('user', user);
};

export const getAuthToken = () => Cookies.get('authToken');

export const getRefreshToken = () => Cookies.get('refreshToken');

export const getUser = () => Cookies.getJSON('user');

export const destroy = () => {
  Cookies.remove('authToken');
  Cookies.remove('refreshToken');
  Cookies.remove('user');
};
