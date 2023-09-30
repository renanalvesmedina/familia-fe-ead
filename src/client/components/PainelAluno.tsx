import illustrationImg from '@assets/illustrations/rafiki.svg'

import { BookOpen, CalendarCheck, Play } from 'phosphor-react'
import { useQuery } from 'react-query'

import { TiketoEventListModel } from '@models/TiketoEventModel'
import { withPrivateRoute } from '@hocs/withPrivateRoute'
import { CardCourseModel } from '@models/CardCourseModel'
import { api } from '@services/api'

import { BannerCard } from './banner-card'
import { CourseCard } from './course-card'
import { EventCard } from './event-card'
import { Section } from './section'
import { Header } from './header'

const getCourses = async () =>
  api.get<CardCourseModel[]>('/v1/me/courses').then((response) => response.data)

const getTiketoEvents = async () =>
  api
    .get<TiketoEventListModel>('https://api.tiketo.com.br/usuario/id/28486')
    .then((response) => response.data)

const commonQueriesOptions = {
  staleTime: 1000 * 60 * 1, // 1 minutes
  onError: (error: unknown) => console.error(error),
}

const PainelAluno: React.FC = () => {
  // const { user } = useAuthContext()

  const {
    data: cardCourses,
    isLoading: cardCoursesLoading,
    isError,
  } = useQuery(['courses'], getCourses, commonQueriesOptions)

  const { data: tiketoEvents, isLoading: tiketoEventsLoading } = useQuery(
    ['tiketo'],
    getTiketoEvents,
    commonQueriesOptions
  )

  return (
    <main className="w-full h-full bg-zinc-900">
      <Header />

      <div className="flex mx-auto flex-col gap-20 px-6 pt-16 pb-60 w-full md:max-w-[1180px]">
        {isError ? (
          <div className="flex flex-col justify-center items-center pt-6 h-full">
            <img src={illustrationImg} className="w-96" alt="" />
            <h2 className="font-semibold text-xl text-white text-center">
              Você ainda não foi matriculado em um curso!
            </h2>
          </div>
        ) : null}

        <div className="space-y-20">
          <Section>
            {/* <BannerCard
              title={`Olá, ${user?.fullName}`}
              description="Seja muito bem-vindo (a) ao nosso portal de ensino. Antes de
              começar, assista à aula inaugural para entender como nossa
              plataforma funciona."
              ctaText="Assistir agora"
              ctaLink="/"
              icon={Play}
              colorScheme="brand"
            /> */}

            <BannerCard
              title="Continue de onde parou"
              description="Memórias do casulo / Módulo 01"
              ctaText="Continuar assistindo"
              ctaLink="/"
              icon={Play}
            />
          </Section>

          <Section title="Meus Cursos" icon={BookOpen}>
            <div className="w-full grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {cardCoursesLoading
                ? [0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="bg-zinc-700 bg-opacity-50 animate-pulse rounded-lg h-96"
                    />
                  ))
                : null}

              {cardCourses && cardCourses?.length > 0
                ? cardCourses.map((card) => (
                    <CourseCard key={card.courseId} {...card} />
                  ))
                : null}
            </div>
          </Section>

          {tiketoEventsLoading ? (
            <div className="w-full grid gap-10">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-zinc-700 bg-opacity-50 animate-pulse rounded-lg h-60"
                />
              ))}
            </div>
          ) : null}

          {tiketoEvents?.eventos && tiketoEvents?.eventos.length > 0 ? (
            <Section
              title="Fique atento aos novos cursos e eventos"
              icon={CalendarCheck}
            >
              <div className="w-full grid gap-10">
                {tiketoEvents?.eventos && tiketoEvents?.eventos?.length > 0
                  ? tiketoEvents?.eventos.map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))
                  : null}
              </div>
            </Section>
          ) : null}
        </div>
      </div>
    </main>
  )
}

export default withPrivateRoute(PainelAluno)
