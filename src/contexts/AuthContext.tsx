import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { AuthenticationModel } from '../models/AuthenticationModel'
import { AuthService } from '../services/AuthService'
import { api } from '../services/api'

import {
  removeAuthLocalStorage,
  getAuthLocalStorage,
  setAuthLocalStorage,
} from '../services/utils'

interface IAuthContextData extends AuthenticationModel {
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<string | void>
  logout: () => void
}

const AuthContext = createContext({} as IAuthContextData)

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps) => {
  const [authData, setAuthData] = useState<AuthenticationModel>()

  useEffect(() => {
    const accessData = getAuthLocalStorage()

    if (accessData) {
      if (Date.parse(accessData.expiration) <= Date.now()) {
        handleLogout()
      }

      setAuthData(accessData)
      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessData.token}`
    } else {
      handleLogout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Login => //
  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password)

    if (result instanceof Error) {
      return result.message
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
    setAuthLocalStorage(result)
    setAuthData(result)
  }, [])
  // <= Login //

  // <= Logout //
  const handleLogout = useCallback(() => {
    removeAuthLocalStorage()
    setAuthData(undefined)
  }, [])
  // <= Logout //

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authData,
        ...authData,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
