import React from 'react'

import { useQuery } from 'react-query'
import { api } from '@services/api'

const getClassThumb = async (classId?: string) =>
  api.get(`/v1/Class/details?classId=${classId}`).then((res) => ({
    video: res.data?.video,
  }))

export const useLessonCard = (classId?: string) => {
  const { data, isLoading } = useQuery(
    ['class-thumb', classId],
    () => getClassThumb(classId),
    {
      staleTime: 1000 * 60 * 2, // 2 minutes
      onError: (error: unknown) => console.error(error),
    }
  )

  const thumb = React.useMemo(
    () => `https://i.ytimg.com/vi/${data?.video}/hqdefault.jpg`,
    [data?.video]
  )

  return { thumb, thumbLoading: isLoading }
}
