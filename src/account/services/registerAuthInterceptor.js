import history from '../../core/services/history';
import http from '../../core/services/http';
import { getAuthToken } from './session';

/* eslint-disable no-param-reassign */
const requestInterceptor = config => {
  const authToken = getAuthToken();

  if (authToken) {
    config.headers.Authorization = `bearer ${authToken}`;
  }

  return config;
};
/* eslint-enable no-param-reassign */

const requestErrorInterceptor = error => Promise.reject(error);

const responseInterceptor = response => response;

const responseErrorInterceptor = error => {
  if (error.response.status === 401) {
    history.push({ pathname: '/account/logout', state: { from: history.location } });
  }

  return Promise.reject(error);
};

const registerAuthInterceptor = () => {
  http.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
  http.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
};

export default registerAuthInterceptor;
