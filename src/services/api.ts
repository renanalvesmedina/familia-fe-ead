import axios from 'axios'
import { errorInterceptor } from './ErrorInterceptor';
import { responseInterceptor } from './ResponseInterceptor';

const api = axios.create({
  // baseURL: 'https://familiaeadapi.azurewebsites.net',
  baseURL: 'https://localhost:49153',
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { api };