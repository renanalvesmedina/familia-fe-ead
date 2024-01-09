import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { clickByKey } from '@utils'

import { Course } from '../../pages/courses-page/courses-page'

interface CoursesTableProps {
  courses?: Course[]
  isLoading?: boolean
}

const CoursesTable: React.FC<CoursesTableProps> = ({ isLoading, courses }) => {
  const router = useRouter()

  if (isLoading)
    return (
      <div className="bg-zinc-700/30 animate-pulse h-[60vh] w-full rounded-lg" />
    )

  return (
    <div className="w-full relative overflow-y-auto max-h-[56vh] rounded-lg shadow-lg scrollbar-none px-2">
      <table className="table table-auto w-full relative">
        <tbody>
          {courses?.map((course) => {
            const onRowClick = () =>
              router.push(`/admin/courses/${course.courseId}`)

            return (
              <tr
                key={course.courseName}
                onClick={onRowClick}
                tabIndex={0}
                onKeyDown={(e) => clickByKey(e, onRowClick)}
                className="select-none bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700/20 data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-zinc-700/20 transition-colors cursor-pointer outline-none focus-within:bg-gray-100 dark:focus-within:bg-zinc-700/30"
              >
                <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 border-opacity-50">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-24 h-16 relative rounded-md">
                        <img
                          alt={course.courseName}
                          src={course.cardUri}
                          className="absolute w-full h-full"
                        />
                      </div>
                    </div>
                    <span>
                      <p className="font-medium text-base text-zinc-800 dark:text-white">
                        {course.courseName}
                      </p>
                    </span>
                  </div>
                </td>

                <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 border-opacity-50">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <button
                      type="button"
                      onClick={onRowClick}
                      className="text-white bg-zinc-700/50 px-4 py-4 font-medium rounded-lg text-sm"
                    >
                      Ver informações
                    </button>

                    <Link
                      href={`/admin/courses/${course.courseId}/enrollments`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-800 bg-brand-700 px-4 py-4 font-medium rounded-lg text-sm flex items-center justify-center"
                    >
                      Matricular alunos
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CoursesTable
