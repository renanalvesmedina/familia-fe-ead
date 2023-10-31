import React from 'react'

import { useQuery } from 'react-query'

import { useUserDashboardPage } from '@features/user/pages/user-dashboard-page/user-dashboard-page.hook'
import { CourseModel } from '@models/CourseModel'
import { ClassModel } from '@models/ClassModel'
import { api } from '@services/api'

export const getClasses = async (courseId?: string) =>
  api
    .get<ClassModel[]>(`/v1/Me/classes?courseId=${courseId}`)
    .then((response) => response.data)

export const getCourseDetails = async (courseId?: string) =>
  api
    .get<CourseModel>(`/v1/Course/details?courseId=${courseId}`)
    .then((response) => response.data)

export const getlastClassAttended = async (classId?: string) =>
  api.get(`/v1/Class/details?classId=${classId}`).then((res) => ({
    classId,
    className: res.data?.className,
    orderId: res.data?.orderId,
    description: res.data?.description,
    video: res.data?.video,
  }))

export const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

export const useCoursePage = (courseId?: string) => {
  const { courses } = useUserDashboardPage()

  const course = React.useMemo(
    () => courses?.find((course) => String(course.courseId) === courseId),
    [courseId, courses]
  )

  const queriesKeys = React.useMemo(
    () => ({
      classes: ['classes', courseId],
      course: ['course-details', courseId],
      lastClassAttended: ['lastClassAttended', course?.lastClassAttendedId],
    }),
    [course?.lastClassAttendedId, courseId]
  )

  const { data: aulas, isLoading: classLoading } = useQuery(
    queriesKeys.classes,
    () => getClasses(courseId),
    commonQueriesOptions
  )

  const { data: curso, isLoading: courseLoading } = useQuery(
    queriesKeys.course,
    () => getCourseDetails(courseId),
    commonQueriesOptions
  )

  const { data: lastClassAttended, isLoading: lastClassAttendedLoading } =
    useQuery(
      queriesKeys.lastClassAttended,
      () => getlastClassAttended(String(course?.lastClassAttendedId)),
      commonQueriesOptions
    )

  const showExamCard = React.useMemo(
    () => Boolean(aulas?.every((aula) => !aula.isPending)),
    [aulas]
  )

  const isLoading = React.useMemo(
    () => classLoading || courseLoading || lastClassAttendedLoading,
    [classLoading, courseLoading, lastClassAttendedLoading]
  )

  return {
    lastClassAttended,
    showExamCard,
    isLoading,
    aulas,
    curso,
  }
}
