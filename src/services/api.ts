import axios from 'axios'
import { errorInterceptor } from './ErrorInterceptor';
import { responseInterceptor } from './ResponseInterceptor';

const api = axios.create({
  baseURL: 'https://familia-ms-ead.azurewebsites.net',
  // baseURL: 'https://localhost:7238',
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { api };