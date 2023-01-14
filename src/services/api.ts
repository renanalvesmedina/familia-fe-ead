import axios from 'axios'
import { errorInterceptor } from './ErrorInterceptor';
import { responseInterceptor } from './ResponseInterceptor';
import { getToken } from './utils';

const api = axios.create({
  baseURL: 'https://localhost:7238',
  headers: {
    'Authorization': 'Bearer ' + getToken(),
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { api };