import React from 'react'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { CourseModel } from '@models/CourseModel'
import { ClassModel } from '@models/ClassModel'
import { api } from '@services/api'

import {
  getCompletedClassLocalStorage,
  setCompletedClassLocalStorage,
} from '@services/utils'

export const getClasses = async (courseId?: string) =>
  api
    .get<ClassModel[]>(`/v1/Me/classes?courseId=${courseId}`)
    .then((response) => response.data)

export const getCourseDetails = async (courseId?: string) =>
  api
    .get<CourseModel>(`/v1/Course/details?courseId=${courseId}`)
    .then((response) => response.data)

export const getActiveClass = async (aulaId?: string) =>
  api.get(`/v1/Class/details?classId=${aulaId}`).then((res) => ({
    classId: aulaId,
    className: res.data?.className,
    orderId: res.data?.orderId,
    description: res.data?.description,
    video: res.data?.video,
  }))

export const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

export const useClassPage = (courseId?: string, classId?: string) => {
  const queryClient = useQueryClient()

  const queriesKeys = React.useMemo(
    () => ({
      classes: ['classes', courseId],
      course: ['course-details', courseId],
      activeClass: ['active-class', classId],
    }),
    [courseId, classId]
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

  const { data: activeClass, isLoading: activeClassLoading } = useQuery(
    queriesKeys.activeClass,
    () => getActiveClass(classId),
    commonQueriesOptions
  )

  const showExamCard = React.useMemo(
    () => Boolean(aulas?.every((aula) => !aula.isPending)),
    [aulas]
  )

  const isLoading = React.useMemo(
    () => classLoading || courseLoading || activeClassLoading,
    [activeClassLoading, classLoading, courseLoading]
  )

  const registerHistory = useMutation(
    async ({ classId, courseId }: { classId?: string; courseId?: string }) =>
      api.post(`v1/Me/history/register`, { classId, courseId }),
    {
      onError: (error) => console.error(error),
      onSuccess: () =>
        Promise.all([
          queryClient.invalidateQueries(queriesKeys.classes),
          queryClient.invalidateQueries(queriesKeys.course),
          queryClient.invalidateQueries(queriesKeys.activeClass),
        ]),
    }
  )

  const handleRegisterHistory = React.useCallback(
    async (classId?: string, courseId?: string) => {
      if (classId == undefined || courseId == undefined) return

      const completedClass = getCompletedClassLocalStorage()

      if (completedClass.includes(classId)) return

      return registerHistory.mutateAsync({ classId, courseId }).then(() => {
        completedClass.push(classId)
        setCompletedClassLocalStorage(completedClass)
        console.log('AULA CONCLUÍDA', completedClass)
      })
    },
    [registerHistory]
  )

  return {
    handleRegisterHistory,
    showExamCard,
    activeClass,
    isLoading,
    aulas,
    curso,
  }
}
