import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { AuthenticationModel } from '../models/AuthenticationModel';
import { AuthService } from '../services/AuthService';
import { getAuthLocalStorage, removeAuthLocalStorage, setAuthLocalStorage } from '../services/utils';

interface IAuthContextData extends AuthenticationModel {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => void;
}

const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthenticationModel | null>();

  useEffect(() => {
    const accessData = getAuthLocalStorage();
    if(accessData) {
      setAuthData(accessData);
    } else {
      handleLogout();
    }
  }, []);

  // Login => //
  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password);

    if(result instanceof Error) {
      return result.message;
    }

    setAuthLocalStorage(result);
    setAuthData(result);
  }, []);
  // <= Login //

  // <= Logout //
  const handleLogout = useCallback(() => {
    removeAuthLocalStorage();
    setAuthData(undefined);
  }, []);
  // <= Logout //

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!authData, ...authData, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);