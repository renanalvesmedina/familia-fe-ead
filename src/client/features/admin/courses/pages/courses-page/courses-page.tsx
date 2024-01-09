import React from 'react'
import toast from 'react-hot-toast'

import { Plus, RefreshCw } from 'lucide-react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { AdminLayout } from '@layouts/admin-layout'
import { Loader } from '@core/loader'
import { api } from '@services/api'

import { CoursesData } from '../../components/course-data'

export type Course = {
  courseId: string
  courseName: string
  cardUri: string
}

const getCourses = async () =>
  api.get<Course[]>('/v1/Course').then((res) => res.data)

const CoursesPage: React.FC = () => {
  const { push } = useRouter()

  const {
    data: courses,
    isLoading,
    isRefetching,
    isFetching,
    refetch,
  } = useQuery(['courses', 'admin-list'], () => getCourses(), {
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
            Gestão de cursos
          </p>
          {isLoading || isRefetching || isFetching ? (
            <Loader className="text-brand-600" />
          ) : null}
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={() => refetch()}
            className="flex justify-center gap-1 text-white bg-zinc-800 font-medium rounded-lg text-sm p-4 text-center hover:bg-zinc-800/90 active:bg-zinc-800/90 transition"
          >
            <RefreshCw size={20} />
            <span className="max-lg:hidden">Refresh</span>
          </button>

          <button
            onClick={() => push('/admin/courses/create')}
            className="flex justify-center gap-2 text-zinc-800 bg-brand-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-brand-700/90 active:bg-brand-700/90 transition"
          >
            <Plus size={16} />
            <span className="max-lg:hidden">Novo curso</span>
          </button>
        </div>
      </div>

      <div className="mb-4 text-zinc-500 px-2">
        <p>
          Total de{' '}
          <strong className="text-zinc-800 dark:text-white">
            {courses?.length}
          </strong>{' '}
          curso{courses?.length === 1 ? '' : 's'}
        </p>
      </div>

      <CoursesData courses={courses || []} isLoading={isLoading} />
    </AdminLayout>
  )
}

export default CoursesPage
