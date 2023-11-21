/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { Play } from 'phosphor-react'

import { CardCourseModel } from '@models/CardCourseModel'

import { ProgressBar } from '../progress-bar'

type CourseCardProps = CardCourseModel

const CourseCard: React.FC<CourseCardProps> = ({
  courseCardUri,
  courseName,
  courseId,
  totalCourseClasses,
  totalCompletedClasses,
}) => (
  <Link href={`/course/${courseId}`}>
    <div
      className="
        cursor-pointer relative w-full flex flex-col pointer-events-auto rounded-lg
        border border-gray-200 dark:border-zinc-700/40
        bg-white dark:bg-zinc-800 transition hover:scale-[102%]
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

        <span className="hover:bg-gray-600/80 transition-colors py-4 px-4 bg-gray-600 rounded-lg text-white font-medium flex items-center justify-center gap-2">
          <Play size={20} />
          Acessar curso
        </span>
      </div>

      <ProgressBar
        total={totalCourseClasses}
        completed={totalCompletedClasses}
      />
    </div>
  </Link>
)

export default CourseCard
