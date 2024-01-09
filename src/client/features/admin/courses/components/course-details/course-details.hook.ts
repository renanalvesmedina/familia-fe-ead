import React from 'react'
import toast from 'react-hot-toast'

import { useQuery } from 'react-query'

import { UserHistoryModel } from '@models/UserHistoryModel'
import { useUserDetails } from '@contexts/user-details.context'
import { EditUserModel } from '@models/EditUserModel'
import { api } from '@services/api'

type Course = {
  courseId: string
  courseName: string
  cardUri: string
}

const putUser = async (userId?: string) =>
  api
    .get<EditUserModel>(`/v1/User/details?UserId=${userId}`)
    .then((res) => res.data)

const getUserHistory = async (userId?: string) =>
  api
    .get<UserHistoryModel[]>(`/v1/student/history?studentId=${userId}`)
    .then((res) => res.data)

const getCourses = async () =>
  api.get<Course[]>('/v1/Course').then((res) => res.data)

const commonQueryOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (err: any) => {
    toast.error(err.response.data.errors[0].message)
  },
}

export const useUserDetailsData = () => {
  const { userId, onCloseUserDetails, openUserDetails } = useUserDetails()

  const { data: user, isLoading: loadingUser } = useQuery(
    ['user', userId],
    () => putUser(userId),
    commonQueryOptions
  )

  const { data: history, isLoading: loadingHistory } = useQuery(
    ['user-history', userId],
    () => getUserHistory(userId),
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

  return {
    onCloseUserDetails,
    openUserDetails,
    loadingHistory,
    loadingUser,
    profileUri,
    history,
    courses,
    user,
  }
}
