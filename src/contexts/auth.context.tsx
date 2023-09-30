import React from 'react'

import { useQuery } from 'react-query'

import { AuthenticationModel } from '@models/AuthenticationModel'
import { AuthService } from '@services/AuthService'
import { UserModel } from '@models/UserModel'
import { api } from '@services/api'

import {
  removeAuthLocalStorage,
  getAuthLocalStorage,
  setAuthLocalStorage,
} from '@services/utils'

interface IAuthContextData extends AuthenticationModel {
  isAuthenticated: boolean
  user: UserModel | null
  loading: boolean
  login: (email: string, password: string) => Promise<string | void>
  logout: () => void
}

const AuthContext = React.createContext({} as IAuthContextData)

interface IAuthProviderProps {
  children: React.ReactNode
}

const getMe = async () => api.get('/v1/Me/profile').then((data) => data.data)

export const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps) => {
  const [authData, setAuthData] = React.useState<AuthenticationModel>()
  const [loading, setLoading] = React.useState(true)

  const { data: me } = useQuery('me', getMe, {
    staleTime: 1000 * 60 * 1, // 1 minutes
    onError: (error) => console.error(error),
  })

  React.useEffect(() => {
    const accessData = getAuthLocalStorage()

    if (accessData) {
      if (Date.parse(accessData.expiration) <= Date.now()) handleLogout()

      setAuthData(accessData)
      setLoading(false)

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessData.token}`
    } else {
      handleLogout()
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Login => //
  const handleLogin = React.useCallback(
    async (email: string, password: string) => {
      const result = await AuthService.auth(email, password)

      if (result instanceof Error) {
        return result.message
      }

      api.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
      setAuthLocalStorage(result)
      setAuthData(result)
    },
    []
  )
  // <= Login //

  // <= Logout //
  const handleLogout = React.useCallback(() => {
    removeAuthLocalStorage()
    setAuthData(undefined)
  }, [])
  // <= Logout //

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authData,
        loading,
        ...authData,
        user: me,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)
