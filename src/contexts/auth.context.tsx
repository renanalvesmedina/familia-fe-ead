import React from 'react'
import Router from 'next/router'

import { useMutation, useQuery, useQueryClient } from 'react-query'

import { AuthenticationModel } from '@models/AuthenticationModel'
import { UserProfileModel } from '@models/UserProfileModel'
import { AuthService } from '@services/AuthService'
import { api } from '@services/api'

import {
  removeAuthLocalStorage,
  getAuthLocalStorage,
  setAuthLocalStorage,
} from '@services/utils'

export interface Credentials {
  email: string
  password: string
}

interface IAuthContextData extends AuthenticationModel {
  isAuthenticated: boolean
  user?: UserProfileModel
  loading: boolean
  isLoginLoading: boolean
  login: (values: Credentials) => Promise<AuthenticationModel | Error>
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
    async ({ email, password }: Credentials) =>
      AuthService.auth(email, password),
    []
  )

  const loginMutation = useMutation(handleLogin, {
    onError: (error) => console.error(error),
    onSuccess: (result) => {
      const isError = result instanceof Error

      if (!isError) {
        api.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
        setAuthLocalStorage(result)
        setAuthData(result)
        queryClient.refetchQueries(queryKey)
        Router.push('/')
      }
    },
  })

  const handleLogout = React.useCallback(() => {
    removeAuthLocalStorage()

    Router.push('/login').then(() => {
      setAuthData(undefined)
      queryClient.cancelQueries(queryKey)
      queryClient.removeQueries(queryKey)
      queryClient.cancelQueries(['courses'])
      queryClient.removeQueries(['courses'])
      delete api.defaults.headers.common['Authorization']
    })
  }, [queryClient, queryKey])

  React.useLayoutEffect(() => {
    const accessData = getAuthLocalStorage()

    if (accessData) {
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
        isLoginLoading: loginMutation.isLoading,
        login: loginMutation.mutateAsync,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)
