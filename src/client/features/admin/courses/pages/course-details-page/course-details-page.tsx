import React from 'react'
import toast from 'react-hot-toast'

import { useQuery } from 'react-query'
// import { Edit } from 'lucide-react'

import { AdminLayout } from '@layouts/admin-layout'
import { CourseModel } from '@models/CourseModel'
// import { parseDate } from '@utils'
import { Loader } from '@core/loader'
import { api } from '@services/api'

import { StudentsEnrolledCardModal } from '../../components/students-enrolled-card-modal'
import { LessonsCardModal } from '../../components/lessons-card-modal'
import { TicketoApiKeyModal } from '../../components/tiketo-api-key-modal'
import { ExamDateModal } from '../../components/exam-date-modal'

const getCourse = async (courseId?: string) =>
  api
    .get<CourseModel>(`/v1/Course/details?courseId=${courseId}`)
    .then((res) => res.data)

export const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

interface CourseDetailsPageProps {
  courseId?: string
}

const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ courseId }) => {
  const {
    data: course,
    isLoading,
    isRefetching,
    isFetching,
  } = useQuery(['course', 'admin', courseId], () => getCourse(courseId), {
    staleTime: 1000 * 60 * 1, // 1 minutes
    onError: (err: any) => {
      toast.error(err.response.data.errors[0].message)
    },
  })

  return (
    <AdminLayout>
      <div className="flex items-center justify-between sticky top-0 pt-10 pb-6 px-2 bg-white dark:bg-zinc-900 z-40">
        <span className="flex items-center gap-2">
          <p className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-white">
            {course?.courseName}
          </p>

          {isLoading || isRefetching || isFetching ? (
            <Loader className="text-brand-600" />
          ) : null}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <LessonsCardModal course={course} courseId={courseId} />

        <StudentsEnrolledCardModal course={course} courseId={courseId} />

        <TicketoApiKeyModal course={course} courseId={courseId} />

        <ExamDateModal course={course} courseId={courseId} />

        <div className="bg-white dark:bg-zinc-700/20 shadow-lg rounded-lg p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-zinc-500 text-sm">Descrição</p>
            <p className="text-xl text-white font-semibold">
              {course?.description}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-700/20 shadow-lg rounded-lg p-6 gap-4 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-zinc-500 text-sm">Banner</p>

            <img
              src={course?.courseCardUri}
              alt=""
              className="w-full max-h-72 rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default CourseDetailsPage
