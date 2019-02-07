import axios from 'axios';
import humps from 'humps';
import { isPlainObject, isArray } from 'lodash-es';

const transformResponse = data => (isPlainObject(data) || isArray(data) ? humps.camelizeKeys(data) : data);

const defaultHttpSettings = {
  responseType: 'json',
  transformResponse: axios.defaults.transformResponse.concat(transformResponse),
};

const http = axios.create({
  ...defaultHttpSettings,
  baseURL: 'http://react-todo-app-api.us-east-1.elasticbeanstalk.com',
});

export default http;