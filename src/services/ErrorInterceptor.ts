import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { removeAuthLocalStorage } from "./utils";

export const errorInterceptor = (error: AxiosError) => {
  if(error.message == 'Network Error') {
    removeAuthLocalStorage();
    toast.error('Falha de conexão com servidor!');
    return Promise.reject(new Error('Falha de conexão com servidor!'))
  }

  if(error.response?.status == 401) {
    return Promise.reject(new Error('Erro de login!'))
  }

  return Promise.reject(error);
}