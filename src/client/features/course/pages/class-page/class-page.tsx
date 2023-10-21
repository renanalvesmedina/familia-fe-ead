import React from 'react'

import ClassPageSkelleton from './class-page.skelleton'
import ReactPlayer from 'react-player/youtube'

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { NextSeo } from 'next-seo'

import { ClassPageHeader } from '@features/course'
import { ThemeSwitcher } from '@components/theme-switcher'
import { Container } from '@core/container'

import { useClassPage } from './class-page.hook'

interface ClassPageProps {
  courseId: string
  classId: string
}

const ClassPage: React.FC<ClassPageProps> = ({ courseId, classId }) => {
  const { handleRegisterHistory, showExamCard, activeClass, isLoading, aulas } =
    useClassPage(courseId, classId)

  const { push } = useRouter()

  const classPosition = React.useMemo(
    () => aulas?.findIndex((a) => a.classId === activeClass?.classId),
    [activeClass?.classId, aulas]
  )

  const nextClass = React.useMemo(
    () => aulas?.[classPosition! + 1],
    [aulas, classPosition]
  )

  const previousClass = React.useMemo(
    () => aulas?.[classPosition! - 1],
    [aulas, classPosition]
  )

  return (
    <React.Fragment>
      <NextSeo title={activeClass?.className ?? 'Assistir ao curso'} />

      <main className="w-full min-h-[100vh] bg-white dark:bg-zinc-900 flex">
        <div className={twMerge('w-full transition-all')}>
          <ClassPageHeader courseId={courseId} />

          <Container className="mt-10 mb-20 px-4 max-w-4xl">
            {isLoading ? (
              <ClassPageSkelleton />
            ) : activeClass ? (
              <div className="space-y-10">
                <div className="space-y-4">
                  <ThemeSwitcher />

                  <h1 className="text-2xl text-zinc-800 dark:text-white font-semibold">
                    {activeClass?.className}
                  </h1>

                  <p className="text-zinc-400 leading-loose">
                    {activeClass?.description}
                  </p>
                </div>

                <div className="player-wrapper bg-zinc-700/10 rounded-lg overflow-hidden">
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

                <div className="flex flex-col w-full gap-12">
                  <span className="text-base text-zinc-800 dark:text-gray-200 font-thin">
                    Se tiver qualquer dúvida, lembre-se que a estamos aqui para
                    ajudar! Ou entre em contato com o nosso suporte pelo email{' '}
                    <a
                      href="mailto:suporte@igrejafamilia.net"
                      className="text-indigo-600 dark:text-brand-700 font-semibold"
                    >
                      suporte@igrejafamilia.net
                    </a>
                  </span>

                  <div className="flex items-center justify-between">
                    {previousClass ? (
                      <button
                        type="button"
                        className="px-6 py-4 rounded-lg border border-indigo-600 dark:border-brand-700 text-indigo-600 dark:text-brand-700 text-sm font-medium flex items-center gap-2"
                        onClick={() =>
                          push(
                            `/course/${courseId}/class/${previousClass?.classId}`
                          )
                        }
                      >
                        <ArrowLeftCircle />
                        Aula anterior
                      </button>
                    ) : (
                      <div />
                    )}

                    {nextClass || showExamCard ? (
                      <button
                        type="button"
                        className="px-6 py-4 rounded-lg bg-indigo-600 dark:bg-brand-700 text-white dark:text-zinc-800 text-sm font-medium flex items-center gap-2"
                        onClick={() =>
                          nextClass
                            ? push(
                                `/course/${courseId}/class/${nextClass.classId}`
                              )
                            : showExamCard
                            ? window.open(
                                'https://forms.office.com/r/KqgUUABPy5',
                                '_blank',
                                'noreferrer'
                              )
                            : null
                        }
                      >
                        {nextClass
                          ? 'Próxima aula'
                          : showExamCard
                          ? 'Fazer prova final'
                          : null}

                        <ArrowRightCircle />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </Container>
        </div>
      </main>
    </React.Fragment>
  )
}

export default ClassPage
