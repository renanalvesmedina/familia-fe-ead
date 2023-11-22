import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { REACT_LOCAL_STORAGE_AUTH_TOKEN } from '@config'
import { removeAuthLocalStorage } from '@services/utils'
import { AuthTokenError } from '@services/errors/AuthTokenError'
import { validateToken } from '@validators/validateToken'
import { parseCookies } from 'nookies'
import { api } from '@services/api'

type Roles = 'Admin' | 'Student' | 'Teacher'

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
  roles?: Roles[]
) {
  return async (ctx: GetServerSidePropsContext) => {
    const { [REACT_LOCAL_STORAGE_AUTH_TOKEN]: token } = parseCookies(ctx)
    const { isValidToken, decodedData } = validateToken(token)

    if (token && isValidToken)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    if (!token || !isValidToken) {
      delete api.defaults.headers.common['Authorization']
      removeAuthLocalStorage()

      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    const hasRole = () =>
      roles
        ?.map((r) => decodedData?.role?.includes(r) && r)
        .every((r) => r !== false)

    if (roles?.length && !hasRole())
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }

    try {
      return fn(ctx)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        removeAuthLocalStorage()

        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }
    }
  }
}
