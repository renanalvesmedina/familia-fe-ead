import React from 'react'

import { TruncateText } from '@core/truncate-text'
import { Enrollment } from '@models/enrollment.model'

interface EnrollmentsListProps {
  enrollments?: Enrollment[]
  isLoading?: boolean
}

const EnrollmentCard: React.FC<{ enrollment: Enrollment }> = ({
  enrollment,
}) => {
  return (
    <div
      // onClick={onRowClick}
      className="flex flex-col gap-4 bg-white shadow-md border border-gray-200 dark:border-transparent dark:bg-zinc-800 w-full rounded-lg cursor-pointer"
    >
      <div className="flex flex-col items-start gap-4 flex-1 px-6 py-6">
        <div className="flex flex-col items-start gap-4">
          <TruncateText className="font-medium text-xs text-gray-500 text-left uppercase">
            {enrollment.courseName}
          </TruncateText>

          <span>
            <TruncateText className="font-medium text-lg text-zinc-800 dark:text-white text-left">
              {enrollment.fullName}
            </TruncateText>

            <TruncateText className="font-medium text-sm text-gray-400 text-left">
              {enrollment.email}
            </TruncateText>
          </span>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-t-gray-200 dark:border-none dark:bg-zinc-700/20 flex justify-between items-center rounded-b-lg">
        <button
          // onClick={onEditClick}
          className="w-full justify-center bg-zinc-700/0 p-3 rounded-bl-lg text-sm text-amber-500 font-medium flex gap-2 items-center hover:bg-gray-200/50 active:bg-gray-200/50 dark:hover:bg-zinc-700/40 dark:active:bg-zinc-700/40 transition"
        >
          Arquivar matrícula
        </button>
        <button
          // onClick={onEditClick}
          className="w-full justify-center bg-zinc-700/0 p-3 rounded-br-lg text-sm text-emerald-500 font-medium flex gap-2 items-center hover:bg-gray-200/50 active:bg-gray-200/50 dark:hover:bg-zinc-700/40 dark:active:bg-zinc-700/40 transition"
        >
          Matricular aluno
        </button>
      </div>
    </div>
  )
}

const EnrollmentsList: React.FC<EnrollmentsListProps> = ({
  isLoading,
  enrollments,
}) => {
  return isLoading ? (
    <div className="flex flex-col w-full space-y-4">
      {[0, 1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-zinc-700/30 animate-pulse h-14 w-full rounded-lg"
        />
      ))}
    </div>
  ) : (
    <div className="w-full space-y-4 mb-20">
      {enrollments?.map((enrollment) => (
        <EnrollmentCard key={enrollment.id} enrollment={enrollment} />
      ))}
    </div>
  )
}

export default EnrollmentsList
