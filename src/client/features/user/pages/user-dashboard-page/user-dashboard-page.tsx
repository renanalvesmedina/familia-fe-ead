import React from 'react'

import { BookOpen, CalendarCheck } from 'lucide-react'
import { NextSeo } from 'next-seo'

import { WebinarGirlIllustration } from '@assets/illustrations/webinar-girl-illustration'

import { useAuthContext } from '@contexts/auth.context'
import { getFirstName } from '@utils'
import { CourseCard } from '@components/course-card'
import { BannerCard } from '@components/banner-card'
import { EventCard } from '@components/event-card'
import { Container } from '@core/container'
import { Section } from '@components/section'
import { Header } from '@components/header'

import { welcomeStudentText } from './user-dashboard-page.constants'
import { useUserDashboardPage } from './user-dashboard-page.hook'

const UserDashboardPage: React.FC = () => {
  const { user } = useAuthContext()

  const {
    tiketoEventsLoading,
    coursesLoading,
    tiketoEvents,
    coursesError,
    courses,
  } = useUserDashboardPage()

  return (
    <React.Fragment>
      <NextSeo title="Home" />

      <main className="w-full min-h-[100vh] bg-white dark:bg-zinc-900">
        <Header />

        <Section>
          <BannerCard
            title={`Olá, ${getFirstName(user?.fullName)}`}
            colorScheme="indigo"
            illustration={<WebinarGirlIllustration className="h-[200px]" />}
            description={welcomeStudentText(
              user?.sexo as 'F' | 'M',
              coursesError
            )}
          />
        </Section>

        <Container className="flex flex-col gap-16 px-6 pt-16 pb-60">
          <div className="space-y-20">
            {coursesError ? null : (
              <Section title="Meus Cursos" icon={BookOpen}>
                <div className="w-full grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {coursesLoading
                    ? [0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="bg-zinc-700 bg-opacity-20 dark:bg-opacity-50 animate-pulse rounded-lg h-96"
                        />
                      ))
                    : null}

                  {courses && courses?.length > 0
                    ? courses.map((card) => (
                        <CourseCard key={card.courseId} {...card} />
                      ))
                    : null}
                </div>
              </Section>
            )}

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

            {tiketoEvents?.data && tiketoEvents?.data.length > 0 ? (
              <Section
                title="Fique atento aos novos cursos e eventos"
                icon={CalendarCheck}
              >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                  {tiketoEvents?.data && tiketoEvents?.data?.length > 0
                    ? tiketoEvents?.data.map((event) => (
                        <EventCard key={event.id} {...event} />
                      ))
                    : null}
                </div>
              </Section>
            ) : null}
          </div>
        </Container>
      </main>
    </React.Fragment>
  )
}

export default UserDashboardPage
