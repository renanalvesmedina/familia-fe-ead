import React from 'react'
import toast from 'react-hot-toast'

import { useMutation, useQuery, useQueryClient } from 'react-query'

import { useUserDetails } from '@contexts/user-details.context'
import { api } from '@services/api'

export type Course = {
  courseId: string
  courseName: string
  cardUri: string
}

export type User = {
  fullName?: string
  email?: string
  password?: string
  phone?: string
  photoUri?: string
  profiles?: string[]
  gender?: string
  createdAt?: string
  courseEnrollments?: {
    courseId: string
    courseName: string
    lastClassAttendeceId: string
    totalCourseClasses: number
    totalCompletedClasses: number
    enrollmentDate: string
  }[]
}

export const getUser = async (userId?: string) =>
  api.get<User>(`/v1/User/details?UserId=${userId}`).then((res) => res.data)

const getCourses = async () =>
  api.get<Course[]>('/v1/Course').then((res) => res.data)

const enrollUser = async ({
  courseId,
  userId,
}: {
  userId: string
  courseId: string
}) =>
  api.post('/v1/Enrollment', {
    studentId: userId,
    courseId: courseId,
  })

const unenrollUser = async ({
  courseId,
  userId,
}: {
  userId: string
  courseId: string
}) =>
  api.put('/v1/Enrollment/Unenroll', {
    userId,
    courseId: courseId,
  })

const commonQueryOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (err: any) => {
    toast.error(err.response.data.errors[0].message)
  },
}

export const useUserDetailsData = () => {
  const { userId, onCloseUserDetails, openUserDetails } = useUserDetails()

  const queryClient = useQueryClient()

  const { data: user, isLoading: loadingUser } = useQuery(
    ['user', userId],
    () => getUser(userId),
    commonQueryOptions
  )

  const { data: courses } = useQuery(
    ['courses', 'admin-list'],
    () => getCourses(),
    commonQueryOptions
  )

  const profileUri = React.useMemo(
    () => (!user?.photoUri ? '/images/avatarDefault.png' : user?.photoUri),
    [user?.photoUri]
  )

  const onEnrollUser = useMutation(
    (courseId: string) => enrollUser({ userId: userId!, courseId }),
    {
      onMutate: async (courseId) => {
        await queryClient.cancelQueries(['user', userId])

        const previousUser = queryClient.getQueryData<User>(['user', userId])

        const newUser = {
          ...previousUser,
          courseEnrollments: [
            ...previousUser?.courseEnrollments!,
            {
              courseId: courseId,
              enrollmentDate: new Date().toISOString(),
              totalCompletedClasses: 0,
              totalCourseClasses: 8,
            },
          ],
        }

        queryClient.setQueryData(['user', userId], newUser)
        queryClient.invalidateQueries(['course', 'admin', courseId])

        return { previousUser, data: newUser }
      },
      onSettled: () =>
        Promise.all([
          queryClient.invalidateQueries(['user', userId]),
          queryClient.invalidateQueries(['courses', 'admin-list']),
        ]),
      onError: (_err, _newCategories, context) => {
        queryClient.setQueryData(['user', userId], context?.previousUser)
      },
    }
  )

  const onUnenrollUser = useMutation(
    (courseId: string) => unenrollUser({ userId: userId!, courseId }),
    {
      onMutate: async (courseId) => {
        await queryClient.cancelQueries(['user', userId])

        const previousUser = queryClient.getQueryData<User>(['user', userId])

        const newUser = {
          ...previousUser,
          courseEnrollments: [
            ...previousUser?.courseEnrollments?.filter(
              (courseEnrollment) => courseEnrollment.courseId !== courseId
            )!,
          ],
        }

        queryClient.setQueryData(['user', userId], newUser)
        queryClient.invalidateQueries(['course', 'admin', courseId])

        return { previousUser, data: newUser }
      },
      onSettled: () =>
        Promise.all([
          queryClient.invalidateQueries(['user', userId]),
          queryClient.invalidateQueries(['courses', 'admin-list']),
        ]),
      onError: (_err, _newCategories, context) => {
        queryClient.setQueryData(['user', userId], context?.previousUser)
      },
    }
  )

  return {
    onCloseUserDetails,
    openUserDetails,
    onUnenrollUser,
    onEnrollUser,
    loadingUser,
    profileUri,
    courses,
    user,
  }
}
