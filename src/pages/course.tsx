import ReactPlayer from 'react-player/youtube'
import React from 'react'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Books, CaretLeft, Exam } from 'phosphor-react'

import { withPrivateRoute } from '@hocs/withPrivateRoute'
import { useBreakpoint } from '@hooks/use-breakpoints'
import { CourseModel } from '@models/CourseModel'
import { ClassModel } from '@models/ClassModel'
import { Header } from '@components/header'
import { Lesson } from '@components/Lesson'
import { api } from '@services/api'

import {
  getCompletedClassLocalStorage,
  setCompletedClassLocalStorage,
} from '@services/utils'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Separator from '@radix-ui/react-separator'

const getClasses = async (courseId?: string) =>
  api
    .get<ClassModel[]>(`/v1/Me/classes?courseId=${courseId}`)
    .then((response) => response.data)

const getCourseDetails = async (courseId?: string) =>
  api
    .get<CourseModel>(`/v1/Course/details?courseId=${courseId}`)
    .then((response) => response.data)

const getActiveClass = async (aulaId?: string) =>
  api.get(`/v1/Class/details?classId=${aulaId}`).then((res) => ({
    classId: aulaId,
    className: res.data?.className,
    orderId: res.data?.orderId,
    description: res.data?.description,
    video: res.data?.video,
  }))

const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

const CoursePage: React.FC = () => {
  const { courseId, aulaId } = useParams()

  const navigate = useNavigate()

  const { md } = useBreakpoint()

  const queryClient = useQueryClient()

  const queriesKeys = React.useMemo(
    () => ({
      classes: ['classes', courseId],
      course: ['course-details', courseId],
      activeClass: ['active-class', aulaId],
    }),
    [courseId, aulaId]
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
    () => getActiveClass(aulaId),
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

  const details = (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col w-full h-fit gap-4">
        <h1 className="text-2xl text-white font-semibold">
          {activeClass?.className}
        </h1>

        <p className="text-base text-white font-light">
          {activeClass?.description}
        </p>
      </div>

      <Separator.Root className="w-full h-[1px] bg-[#2E3A42]" />

      <p className="text-base text-gray-200 font-thin">
        Se tiver qualquer dúvida, lembre-se que a estamos aqui para ajudar! Ou
        entre em contato com o nosso suporte pelo email{' '}
        <a href="mailto:suporte@igrejafamilia.net" className="text-brand-500">
          suporte@igrejafamilia.net ✉️
        </a>
      </p>
    </div>
  )

  return (
    <main className="w-full h-full bg-zinc-900">
      <Header />

      <div className="flex items-center flex-col pt-8 pb-16 space-y-4">
        {isLoading ? (
          <section className="grid grid-cols-3 gap-4 px-4 w-full md:max-w-[1180px] opacity-30">
            <div className="bg-zinc-700 animate-pulse h-[420px] rounded-lg col-start-1 col-end-4 md:col-end-3" />
            <div className="bg-zinc-700 animate-pulse h-[420px] rounded-lg col-start-1 md:col-start-3 col-end-4" />
            <div className="bg-zinc-700 animate-pulse rounded-lg col-start-1 col-end-4 h-48" />
          </section>
        ) : null}

        {!isLoading && activeClass ? (
          <React.Fragment>
            <div className="flex items-center gap-1 px-4 md:max-w-[1180px] w-full">
              <button
                type="button"
                className="text-gray-400 hover:text-white transition flex items-center gap-2"
                onClick={() => navigate('/')}
              >
                <CaretLeft className="md:hidden" />
                Home
              </button>
              <span className="max-md:hidden text-gray-400 hover:text-white transition select-none">
                {' - ' + activeClass?.className}
              </span>
            </div>

            <section>
              <div className="grid grid-cols-3 gap-4 px-4 md:max-w-[1180px]">
                <div className="col-start-1 col-end-4 md:col-end-3 relative space-y-6">
                  <div className="player-wrapper">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${activeClass?.video}`}
                      className="react-player"
                      playing={false}
                      width="100%"
                      height="100%"
                      controls={true}
                      onProgress={(state) =>
                        state.played >= 0.97 &&
                        handleRegisterHistory(activeClass?.classId, courseId)
                      }
                    />
                  </div>

                  {md ? details : null}
                </div>

                <div className="col-start-1 md:col-start-3 col-end-4 flex flex-col gap-8 md:gap-4">
                  <div className="flex flex-col rounded-md h-full max-h-[420px] relative bg-zinc-800">
                    <div className="flex grow items-center rounded-t-md gap-2 bg-gradient-to-r from-aux-500 to-zinc-800 px-5 py-4">
                      <Books size={24} className="text-white" />
                      <span className="font-medium text-2xl text-white">
                        Aulas
                      </span>
                    </div>

                    <ScrollArea.Root className="w-full h-full overflow-hidden px-3 py-4">
                      <ScrollArea.Viewport className="w-full h-full overflow-scroll">
                        {aulas?.map((aula) => (
                          <Lesson
                            key={aula.classId}
                            title={aula.orderId + ' - ' + aula.className}
                            isPending={aula.isPending}
                            thumb={aula.thumb}
                            classId={aula.classId}
                            isActive={aula.classId === aulaId}
                            handleClick={() =>
                              navigate(
                                `/curso/${courseId}/aula/${aula.classId}`
                              )
                            }
                          />
                        ))}
                      </ScrollArea.Viewport>

                      <ScrollArea.Scrollbar
                        className="flex w-[6px] select-none rounded-full p-[2px] bg-zinc-700/20"
                        orientation="vertical"
                      >
                        <ScrollArea.Thumb className="flex flex-1 bg-brand-500 rounded-full before:absolute min-w-[2px] min-h-[2px]" />
                      </ScrollArea.Scrollbar>
                    </ScrollArea.Root>
                  </div>

                  {!md ? details : null}

                  {showExamCard ? (
                    <div className="flex items-center gap-4 rounded-md bg-gradient-to-r from-aux-500 to-zinc-800 px-3 py-4">
                      <img
                        src={curso?.courseCardUri}
                        width={60}
                        className="rounded-full aspect-square"
                        alt=""
                      />

                      <div className="flex flex-col gap-1">
                        <h1 className="text-sm text-white font-medium">
                          {curso?.courseName}
                        </h1>
                        <span className="text-xs font-thin text-zinc-400">
                          Carga Horária: {curso?.workload} Aulas
                        </span>

                        <button
                          className="flex justify-center gap-1 w-full mt-4 text-zinc-900 font-bold bg-brand-700 rounded-lg text-sm px-5 py-2.5 text-center shadow hover:bg-gradient-to-bl from-brand-500 active:opacity-90"
                          onClick={() =>
                            window.open(
                              'https://forms.office.com/r/KqgUUABPy5',
                              '_blank',
                              'noreferrer'
                            )
                          }
                        >
                          <Exam size={20} /> Faça sua Prova!
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          </React.Fragment>
        ) : null}
      </div>
    </main>
  )
}

export default withPrivateRoute(CoursePage)
