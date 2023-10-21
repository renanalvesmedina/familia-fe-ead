import { useQuery } from 'react-query'

import { TIKETO_EVENTS_LIST_URL } from '@config'
import { TiketoEventListModel } from '@models/TiketoEventModel'
import { CardCourseModel } from '@models/CardCourseModel'
import { api } from '@services/api'

const getCourses = async () =>
  api.get<CardCourseModel[]>('/v1/me/courses').then((response) => response.data)

const getTiketoEvents = async (): Promise<TiketoEventListModel> =>
  fetch(TIKETO_EVENTS_LIST_URL, {
    method: 'GET',
  }).then((response) => response.json())

const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

export const useUserDashboardPage = () => {
  const {
    data: courses,
    isLoading: coursesLoading,
    isError: coursesError,
  } = useQuery(['courses'], getCourses, commonQueriesOptions)

  const {
    data: tiketoEvents,
    isLoading: tiketoEventsLoading,
    isError: tiketoEventsError,
  } = useQuery(['tiketo'], getTiketoEvents, commonQueriesOptions)

  return {
    coursesLoading,
    coursesError,
    courses,
    tiketoEventsLoading,
    tiketoEventsError,
    tiketoEvents,
  }
}
