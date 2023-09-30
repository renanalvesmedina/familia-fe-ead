import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetServerSideProps,
} from 'next'

import { REACT_LOCAL_STORAGE_AUTH_DATA } from '@services/utils'
import { parseCookies } from 'nookies'

export function withSSRGuest<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { [REACT_LOCAL_STORAGE_AUTH_DATA]: accessData } = parseCookies(ctx)

    if (accessData) {
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
