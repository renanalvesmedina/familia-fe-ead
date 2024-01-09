import React from 'react'

import { twMerge } from 'tailwind-merge'
import { NextSeo } from 'next-seo'

import {
  calculateProgressPercentage,
  getProgressColor,
  parseDate,
} from '@utils'

import { LessonCard, TakeExamCard } from '@features/course'
import { ProgressBar } from '@components/progress-bar'
import { BannerCard } from '@components/banner-card'
import { Container } from '@core/container'
import { Section } from '@components/section'
import { Header } from '@components/header'

import { useCoursePage } from './course-page.hook'

interface CoursePageProps {
  courseId: string
}

const CoursePage: React.FC<CoursePageProps> = ({ courseId }) => {
  const { isLoading, aulas, curso, lastClassAttended, showExamCard, course } =
    useCoursePage(courseId)

  const PlayIcon = () => (
    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white" />
  )

  return (
    <React.Fragment>
      <NextSeo title={curso?.courseName ?? 'Assistir ao curso'} />

      <main className="w-full min-h-[100vh] bg-white dark:bg-zinc-900 flex">
        <div className="w-full transition-all">
          <Header />

          {lastClassAttended ? (
            <Section>
              <BannerCard
                title="Continue de onde parou"
                description={`${lastClassAttended?.className}`}
                ctaText="Continuar assistindo"
                ctaLink={`/course/${courseId}/class/${lastClassAttended?.classId}`}
                icon={PlayIcon as never}
              />
            </Section>
          ) : null}

          <Container className="my-20 px-4 space-y-24">
            <div className="space-y-16 md:space-y-10">
              {isLoading ? (
                <div className="w-full h-[10vh] bg-zinc-700/20 rounded-lg animate-pulse" />
              ) : (
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-5xl font-semibold text-zinc-800 dark:text-white">
                    {curso?.courseName}
                  </h1>
                  <p className="text-xl text-gray-500">
                    Carga horária: {curso?.workload} aulas
                  </p>
                </div>
              )}

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full h-[10vh] bg-zinc-700/20 rounded-lg animate-pulse" />
                  <div className="w-full h-[10vh] bg-zinc-700/20 rounded-lg animate-pulse" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div
                    id="course-progress-card"
                    className="flex items-center justify-between border border-gray-200 dark:border-transparent bg-white shadow dark:shadow-none dark:bg-zinc-800 p-6 rounded-lg space-y-4 relative"
                  >
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">
                        Progreso do curso
                      </p>

                      <p className="text-xl font-medium text-zinc-800 dark:text-white">
                        {course?.totalCompletedClasses || 0} de{' '}
                        {course?.totalCourseClasses || curso?.workload} aulas
                        concluídas
                      </p>
                    </div>

                    <span
                      className={twMerge(
                        'text-xs px-2 py-1 rounded-full w-fit border whitespace-nowrap',
                        getProgressColor(
                          calculateProgressPercentage(
                            course?.totalCompletedClasses || 0,
                            course?.totalCourseClasses || +curso?.workload! || 0
                          )
                        )
                      )}
                    >
                      {calculateProgressPercentage(
                        course?.totalCompletedClasses || 0,
                        course?.totalCourseClasses || +curso?.workload!
                      ) + '%'}{' '}
                      Concluído
                    </span>

                    <ProgressBar
                      completed={course?.totalCompletedClasses || 0}
                      total={
                        course?.totalCourseClasses || +curso?.workload! || 0
                      }
                    />
                  </div>

                  <div className="flex flex-col justify-between border border-gray-200 dark:border-transparent bg-white shadow dark:shadow-none dark:bg-zinc-800 p-6 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">
                      Prova disponível até
                    </p>
                    <p className="text-xl font-medium text-zinc-800 dark:text-white">
                      {parseDate(curso?.examDate, "dd 'de' MMMM, yyyy")}
                    </p>
                  </div>
                </div>
              )}
            </div>
            {isLoading ? (
              <div className="space-y-4">
                {[0, 1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-full h-[10vh] bg-zinc-700/20 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {aulas?.map((aula) => (
                  <LessonCard
                    key={aula.classId}
                    title={aula.orderId + ' - ' + aula.className}
                    isPending={aula.isPending}
                    thumb={aula.thumb}
                    classId={aula.classId}
                    href={`/course/${courseId}/class/${aula.classId}`}
                  />
                ))}
              </div>
            )}

            {showExamCard ? (
              <TakeExamCard />
            ) : (
              <div className="bg-brand-700/20 dark:bg-brand-700/10 p-6 rounded-lg">
                <p className="text-amber-800 dark:text-brand-700">
                  ⚠️ Atenção: A prova é liberada somente quando for alcançado no
                  mínimo 70% de presença nas aulas.
                </p>
              </div>
            )}
          </Container>
        </div>
      </main>
    </React.Fragment>
  )
}

export default CoursePage
