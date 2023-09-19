import illustrationImg from '../assets/rafiki.svg'

import { useEffect, useState } from 'react'
import { CardCourseModel } from '../models/CardCourseModel'
import { BookBookmark } from 'phosphor-react'
import { Loading } from '../components/Loading'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import { api } from '../services/api'

export function PainelAluno() {
  const [cardCourses, setCardCourses] = useState<CardCourseModel[]>([])
  const [inLoading, setInLoading] = useState(true)
  const [isEnrollment, setIsEnrollment] = useState(true)

  useEffect(() => {
    api
      .get('/v1/me/courses')
      .then((response) => {
        setCardCourses(response.data)
        setInLoading(false)
      })
      .catch(() => {
        setIsEnrollment(false)
        setInLoading(false)
      })
  }, [])

  return (
    <main className="w-full h-full bg-zinc-900">
      <div className="flex items-center flex-col">
        <Header />

        <div className="flex flex-col gap-20 px-4 pb-60 w-full md:max-w-[1180px] mt-8">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center gap-2">
              <h4 className="flex text-xl text-white m-0 gap-2">
                <BookBookmark size={32} /> Meus Cursos
              </h4>
            </div>

            {cardCourses.length > 0 && (
              <div className="flex w-full justify-center md:justify-start flex-wrap gap-4 ">
                {cardCourses.map((card) => (
                  <Card
                    key={card.courseId}
                    courseId={card.courseId}
                    classId={card.lastClassAttendedId}
                    image={card.courseCardUri}
                  />
                ))}
              </div>
            )}

            {inLoading && (
              <div className="flex w-full h-full items-center justify-center">
                <Loading />
              </div>
            )}

            {!isEnrollment && (
              <div className="flex flex-col justify-center items-center pt-6 h-full">
                <img src={illustrationImg} className="w-96" alt="" />
                <h2 className="font-semibold text-xl text-white text-center">
                  Você ainda não foi matriculado em um curso!
                </h2>
              </div>
            )}
          </div>
        </div>

        {/* <div className="flex items-end justify-center w-full h-14">
          <Footer></Footer>
        </div> */}
      </div>
    </main>
  )
}
