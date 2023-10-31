import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetServerSideProps,
} from 'next'

import { REACT_LOCAL_STORAGE_AUTH_TOKEN } from '@config'
import { validateToken } from '@validators/validateToken'
import { parseCookies } from 'nookies'

export function withSSRGuest<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { [REACT_LOCAL_STORAGE_AUTH_TOKEN]: token } = parseCookies(ctx)
    const { isValidToken } = validateToken(token)

    if (token && isValidToken) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return await fn(ctx)
  }
}
