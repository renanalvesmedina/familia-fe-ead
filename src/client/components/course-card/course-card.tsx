import React from 'react'
import Link from 'next/link'

import { CardCourseModel } from '@models/CardCourseModel'
import { ArrowRight } from 'lucide-react'

import { ProgressBar } from '../progress-bar'

const CourseCard: React.FC<CardCourseModel> = ({
  totalCompletedClasses,
  totalCourseClasses,
  courseCardUri,
  courseName,
  courseId,
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

        <span className="transition-colors py-4 rounded-lg text-white bg-indigo-700 hover:bg-indigo-600 font-medium flex items-center justify-center gap-2">
          Acessar curso
          <ArrowRight size={20} />
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
