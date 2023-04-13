import { toast } from "react-hot-toast";
import { AuthenticationModel } from "../models/AuthenticationModel";
import { api } from "./api";

export const auth = async (email: string, password: string): Promise<AuthenticationModel | Error> => {
  const toastId = toast.loading('Carregando...');
  try {
    const { data } = await api.post('/api/Authentication', {email, password});
    if(data) {
      toast.dismiss(toastId);
      return data;
    }

    return new Error('Falha no Login!');
  } catch (error: any) {
    toast.dismiss(toastId);
    toast.error(`${error.response.data.errors[0].message} :(`);
    return new Error((error as { message: string }).message || 'Falha no Login!');
  }

  
}

export const AuthService = {
  auth
}