import React from 'react'

import { parseDate } from '@utils'
import { twMerge } from 'tailwind-merge'

interface ScheduleCardProps {
  title: string
  date: string
  description: string
  highlight?: boolean
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  description,
  highlight = false,
  title,
  date,
}) => (
  <div
    className={twMerge(
      'flex-1 border border-zinc-700/10 dark:border-zinc-700/50 px-6 py-8 rounded-lg gap-6 flex items-center',
      highlight
        ? 'bg-indigo-600 dark:bg-indigo-900'
        : 'bg-white dark:bg-aux-400'
    )}
  >
    <span
      className={twMerge(
        'text-4xl font-bold text-zinc-800 dark:text-white',
        highlight && 'text-white'
      )}
    >
      {parseDate(date, 'dd')}
    </span>

    <div className="h-full w-0.5 bg-white"></div>

    <div className="w-full">
      <div className="flex justify-between items-center">
        <p
          className={twMerge(
            'text-xl text-zinc-800 dark:text-white',
            highlight && 'text-white'
          )}
        >
          {title}
        </p>
        <time className="text-sm text-gray-400 uppercase">
          {parseDate(date, 'dd/MMM')}
        </time>
      </div>
      <p
        className={twMerge(
          'text-sm text-zinc-800 dark:text-white',
          highlight && 'text-white'
        )}
      >
        {description}
      </p>
    </div>
  </div>
)

export default ScheduleCard
