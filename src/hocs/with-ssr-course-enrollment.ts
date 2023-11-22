import { GetServerSideProps } from 'next'

import { CardCourseModel } from '@models/CardCourseModel'
import { api } from '@services/api'

import { withSSRAuth } from './with-ssr-auth'

type Roles = 'Admin' | 'Student' | 'Teacher'

export const getCourses = async () =>
  api.get<CardCourseModel[]>('/v1/me/courses').then((response) => response.data)

export function withSSRCourseEnrollment<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
  roles?: Roles[]
) {
  return withSSRAuth(async (ctx) => {
    const { courseId } = ctx.params as never

    try {
      const userCourses = await getCourses()

      if (!userCourses.some((course) => course.courseId === courseId)) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }

      return fn(ctx)
    } catch (error) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }, roles)
}
