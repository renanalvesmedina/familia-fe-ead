import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Play } from 'phosphor-react'

import { CardCourseModel } from '@models/CardCourseModel'
import { clickByKey } from '@utils'

import { ProgressBar } from '../progress-bar'

type CourseCardProps = CardCourseModel

const CourseCard: React.FC<CourseCardProps> = ({
  courseId,
  courseCardUri,
  courseName,
  lastClassAttendedId,
}) => {
  const navigate = useNavigate()

  const onClick = React.useCallback(
    () => navigate(`/curso/${courseId}/aula/${lastClassAttendedId}`),
    [navigate, courseId, lastClassAttendedId]
  )

  return (
    <div
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => clickByKey(e, onClick)}
      className="cursor-pointer relative w-full flex flex-col pointer-events-auto rounded-lg bg-zinc-800 border border-zinc-700 border-opacity-50 hover:border-opacity-100 transition outline-none focus-within:border-indigo-600 hover:scale-[101%]"
    >
      <div className="">
        <img
          className="object-cover object-center rounded-t-lg pointer-events-auto"
          decoding="async"
          sizes="100vw"
          src={courseCardUri}
          alt=""
        />
      </div>

      <div className="px-6 py-8 flex flex-col justify-between h-full space-y-6">
        <h5 className="text-white text-2xl font-semibold">{courseName}</h5>

        <span className="hover:bg-indigo-500 transition-colors py-4 px-4 bg-indigo-600 rounded-full text-white font-medium flex items-center justify-center gap-2">
          <Play size={20} />
          Acessar curso
        </span>
      </div>

      <ProgressBar total={8} completed={7} />
    </div>
  )
}

export default CourseCard
