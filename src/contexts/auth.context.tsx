import React from 'react'
import Router from 'next/router'

import { useQuery, useQueryClient } from 'react-query'

import { AuthenticationModel } from '@models/AuthenticationModel'
import { UserProfileModel } from '@models/UserProfileModel'
import { AuthService } from '@services/AuthService'
import { api } from '@services/api'

import {
  removeAuthLocalStorage,
  getAuthLocalStorage,
  setAuthLocalStorage,
} from '@services/utils'

interface IAuthContextData extends AuthenticationModel {
  isAuthenticated: boolean
  user?: UserProfileModel
  loading: boolean
  login: (email: string, password: string) => Promise<string | void>
  logout: () => void
}

const AuthContext = React.createContext({} as IAuthContextData)

interface IAuthProviderProps {
  children: React.ReactNode
}

const getMe = async () =>
  api.get<UserProfileModel>('/v1/Me/profile').then((data) => data.data)

export const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps) => {
  const [authData, setAuthData] = React.useState<AuthenticationModel>()

  const queryClient = useQueryClient()
  const queryKey = React.useMemo(() => ['me'], [])

  const { data: me, isLoading } = useQuery(queryKey, getMe, {
    staleTime: 1000 * 60 * 1, // 1 minutes
    onError: (error) => console.error(error),
  })

  const handleLogin = React.useCallback(
    async (email: string, password: string) => {
      const result = await AuthService.auth(email, password)

      if (result instanceof Error) return result.message

      api.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
      setAuthLocalStorage(result)
      setAuthData(result)

      Router.push('/')
    },
    []
  )

  const handleLogout = React.useCallback(() => {
    queryClient.cancelQueries(queryKey)
    queryClient.removeQueries(queryKey)
    removeAuthLocalStorage()
    setAuthData(undefined)
    delete api.defaults.headers.common['Authorization']
    Router.push('/login')
  }, [queryClient, queryKey])

  React.useEffect(() => {
    const accessData = getAuthLocalStorage()

    if (accessData) {
      if (Date.parse(accessData.expiration) <= Date.now()) handleLogout()

      setAuthData(accessData)

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessData.token}`
    } else {
      handleLogout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authData,
        loading: isLoading,
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
