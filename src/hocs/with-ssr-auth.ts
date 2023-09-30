import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import {
  REACT_LOCAL_STORAGE_AUTH_DATA,
  removeAuthLocalStorage,
} from '@services/utils'

import { AuthTokenError } from '@services/errors/AuthTokenError'
import { api } from '@services/api'

import * as nookies from 'nookies'

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
  mustBeAdmin = false
) {
  return async (ctx: GetServerSidePropsContext) => {
    const { [REACT_LOCAL_STORAGE_AUTH_DATA]: accessData } =
      nookies.parseCookies(ctx)

    if (!accessData) {
      delete api.defaults.headers.common['Authorization']
      removeAuthLocalStorage()

      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    if (mustBeAdmin && JSON.parse(accessData).userName !== 'Administrador')
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
        nookies.default.destroy(ctx, REACT_LOCAL_STORAGE_AUTH_DATA)

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
