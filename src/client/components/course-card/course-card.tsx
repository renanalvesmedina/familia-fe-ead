/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { useRouter } from 'next/router'
import { Play } from 'phosphor-react'

import { CardCourseModel } from '@models/CardCourseModel'
import { clickByKey } from '@utils'

import { ProgressBar } from '../progress-bar'

type CourseCardProps = CardCourseModel

const CourseCard: React.FC<CourseCardProps> = ({
  courseId,
  courseCardUri,
  courseName,
}) => {
  const { push } = useRouter()

  const onClick = React.useCallback(
    () => push(`/course/${courseId}`),
    [push, courseId]
  )

  return (
    <div
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => clickByKey(e, onClick)}
      className="
        cursor-pointer relative w-full flex flex-col pointer-events-auto rounded-lg
        border border-gray-200 dark:border-zinc-700/40 focus-within:border-brand-700
        bg-white dark:bg-zinc-800 transition outline-none hover:scale-[102%]
      "
    >
      <div>
        <img
          className="object-cover object-center rounded-t-lg pointer-events-auto"
          decoding="async"
          sizes="100vw"
          src={courseCardUri}
          alt=""
        />
      </div>

      <div className="px-6 py-8 flex flex-col justify-between h-full space-y-6">
        <h5 className="text-zinc-800 dark:text-white text-2xl font-semibold">
          {courseName}
        </h5>

        <span className="hover:bg-indigo-700/90 transition-colors py-4 px-4 bg-indigo-700 rounded-lg text-white font-medium flex items-center justify-center gap-2">
          <Play size={20} />
          Acessar curso
        </span>
      </div>

      <ProgressBar total={8} completed={7} />
    </div>
  )
}

export default CourseCard
