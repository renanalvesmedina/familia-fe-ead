import React from 'react'

import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { Pencil } from 'lucide-react'
import { format } from 'date-fns'
import { X } from 'phosphor-react'

import {
  calculateProgressPercentage,
  getProgressColor,
  phoneMask,
} from '@utils'

import { PhoneToWhatsapp } from '@core/phone-to-whatsapp'
import { CopyToClipboard } from '@core/copy-to-clipboard'
import { useUserDetails } from '@contexts/user-details.context'
import { ProgressBar } from '@components/progress-bar'

import { useUserDetailsData } from './user-details.hook'

const Component: React.FC = () => {
  const { push } = useRouter()
  const { userId } = useUserDetails()

  const {
    onCloseUserDetails,
    openUserDetails,
    onUnenrollUser,
    onEnrollUser,
    loadingUser,
    profileUri,
    courses,
    user,
  } = useUserDetailsData()

  const onEditClick = React.useCallback(
    () => push(`/admin/users/edit/${userId}`),
    [push, userId]
  )

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => e.key === 'Escape' && onCloseUserDetails(),
    [onCloseUserDetails]
  )

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div
      className={twMerge(
        'overflow-y-auto z-50 space-y-16 bg-white dark:bg-zinc-900 fixed top-0 right-0 bottom-0 md:max-w-[540px] transition-all pb-20 px-6 md:px-12 border-l border-zinc-700/10 dark:border-zinc-700/60 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-700/50 scrollbar-track-rounded-lg scrollbar-track-zinc-700/30',
        openUserDetails ? 'translate-x-0 w-full' : 'translate-x-[100%] w-0'
      )}
    >
      {openUserDetails ? (
        <React.Fragment>
          <div className="flex items-center justify-between sticky top-0 left-12 right-12 bg-white dark:bg-zinc-900 pt-8 pb-2 z-50">
            <p className="text-zinc-800 dark:text-white font-medium text-xl">
              Perfil do usuário
            </p>

            <button
              type="button"
              onClick={onCloseUserDetails}
              className="text-zinc-800 dark:text-white p-3 rounded-full dark:hover:bg-aux-400/50 dark:active:bg-aux-400/50 hover:bg-aux-400/10 active:bg-aux-400/10 transition-all"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="h-36 w-36 rounded-full bg-zinc-700 relative">
              <img
                src={profileUri}
                alt=""
                className="absolute rounded-full w-full h-full object-cover object-center border border-brand-700"
              />
            </div>

            <span className="flex items-center justify-center flex-col">
              <p className="text-zinc-800 dark:text-white font-medium text-lg">
                {user?.fullName}
              </p>

              <p className="text-gray-400 text-sm">
                {user?.email ? <CopyToClipboard value={user?.email} /> : null}
              </p>
            </span>
          </div>

          {loadingUser ? (
            <div className="space-y-4">
              <div className="w-full bg-zinc-700/50 animate-pulse h-10 rounded-lg" />
              <div className="w-full bg-zinc-700/50 animate-pulse h-40 rounded-lg" />
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Informações
              </p>

              <div className="w-full grid grid-cols-2 gap-6 shadow-md dark:bg-zinc-800 rounded-lg px-6 py-6 border border-zinc-700/10 dark:border-zinc-700/50">
                <div className="flex flex-col items-start justify-center space-y-2">
                  <p className="text-sm text-gray-400">Telefone:</p>
                  <p className="text-gray-500 dark:text-white font-medium whitespace-nowrap">
                    {user?.phone ? (
                      <PhoneToWhatsapp
                        value={phoneMask(user.phone)}
                        iconPosition="right"
                      />
                    ) : null}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center space-y-2">
                  <p className="text-sm text-gray-400">Perfil:</p>
                  <p className="text-gray-500 dark:text-white font-medium">
                    {user?.profiles?.includes('Admin')
                      ? 'Administrador'
                      : 'Aluno'}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center space-y-2">
                  <p className="text-sm text-gray-400">Sexo:</p>
                  <p className="text-gray-500 dark:text-white font-medium">
                    {user?.gender === 'M' ? 'Masculino' : 'Feminino'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onEditClick}
                  className="col-start-1 col-end-3 bg-brand-700 hover:bg-brand-700/90 transition-colors text-zinc-800 px-4 py-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <Pencil size={16} />
                  Editar dados
                </button>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Cursos matriculados
            </p>

            <div className="space-y-8">
              {courses?.map((course) => {
                const studentCourse = user?.courseEnrollments?.find(
                  (courseEnrollment) =>
                    courseEnrollment.courseId === course.courseId
                )

                const isUserEnrolled = !!studentCourse

                return (
                  <div
                    key={course.courseId}
                    className="flex items-center justify-between gap-10 px-6 pt-6 pb-8 relative shadow-md dark:bg-zinc-800 rounded-lg border border-zinc-700/10 dark:border-zinc-700/50"
                  >
                    <div className="flex flex-col space-y-6 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-800 dark:text-white font-medium text-lg">
                          {course.courseName}
                        </span>

                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isUserEnrolled}
                            className="sr-only peer"
                            onChange={() => {
                              if (!isUserEnrolled) {
                                onEnrollUser.mutateAsync(course.courseId)
                              } else {
                                onUnenrollUser.mutateAsync(course.courseId)
                              }
                            }}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>

                      {isUserEnrolled ? (
                        <>
                          <hr className="border-zinc-700/50" />

                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <p className="text-sm text-gray-400">
                                  Matriculado em:
                                </p>
                                <p className="text-sm text-zinc-800 dark:text-white">
                                  {format(
                                    new Date(studentCourse.enrollmentDate),
                                    'dd/MM/yyyy'
                                  )}
                                </p>
                              </div>

                              <div className="space-y-2">
                                <p className="text-sm text-gray-400">
                                  Progresso:
                                </p>
                                <p className="text-sm text-zinc-800 dark:text-white">
                                  {studentCourse.totalCompletedClasses} de{' '}
                                  {studentCourse.totalCourseClasses} aulas
                                  concluídas
                                </p>
                              </div>

                              <span
                                className={twMerge(
                                  'text-xs px-2 py-1 rounded-full w-fit border whitespace-nowrap',
                                  getProgressColor(
                                    calculateProgressPercentage(
                                      studentCourse.totalCompletedClasses,
                                      studentCourse.totalCourseClasses
                                    )
                                  )
                                )}
                              >
                                {calculateProgressPercentage(
                                  studentCourse.totalCompletedClasses,
                                  studentCourse.totalCourseClasses
                                ) + '%'}{' '}
                                Concluído
                              </span>
                            </div>
                          </div>

                          <ProgressBar
                            completed={studentCourse.totalCompletedClasses}
                            total={studentCourse.totalCourseClasses}
                          />
                        </>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  )
}

const UserDetails: React.FC = () =>
  useUserDetails().userId ? <Component /> : null

export default UserDetails
