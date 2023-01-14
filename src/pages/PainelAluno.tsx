import { Header } from '../components/Header'
import { BookBookmark } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { api } from '../services/api'
import { Card } from '../components/Card';
import { CardCourseModel } from '../models/CardCourseModel';
import illustrationImg from '../assets/rafiki.svg'

export function PainelAluno() {
  const [cardCourses, setCardCourses] = useState<CardCourseModel[]>([])

  useEffect(() => {
    api.get('/v1/Me/courses').then((response) => {
      setCardCourses(response.data);
    });
  }, []);

  return (
    <main className="w-full h-full">
      <div className="flex items-center flex-col">
        <Header />
        <div className="flex flex-col gap-20 pb-60 w-full md:max-w-[1180px] mt-8">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center gap-2">
              <h4 className="flex text-xl m-0 gap-2"><BookBookmark size={32} /> Meus Cursos</h4>
            </div>

            { cardCourses.length > 0 ? (
              <div className="flex w-full justify-center md:justify-start flex-wrap gap-4 ">
                {cardCourses.map(card => (
                  <Card key={card.courseId} courseId={card.courseId} classId={card.lastClassAttendedId}  image={card.courseCardUri} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center pt-6 h-full">
                <img src={illustrationImg} className="w-96" alt="" />
                <h2 className="font-semibold text-xl text-center">Você ainda não foi matriculado em um curso!</h2>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  )
}
