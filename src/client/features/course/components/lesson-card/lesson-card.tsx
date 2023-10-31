import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { RadioButton } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

import { useLessonCard } from './lesson-card.hook'

interface LessonCardProps {
  isPending: boolean
  classId: string
  title: string
  thumb: string
  href: string
}

const LessonCard: React.FC<LessonCardProps> = ({
  href,
  isPending,
  classId,
  thumb,
  title,
}) => {
  const { thumb: ytThumb, thumbLoading } = useLessonCard(classId)

  return (
    <div
      className={twMerge(
        'group cursor-pointer rounded-lg transition-all border',
        'bg-white hover:bg-gradient-to-r hover:from-indigo-600/10 border-gray-200 shadow',
        'dark:bg-zinc-800 dark:hover:bg-gradient-to-r dark:hover:from-aux-500 dark:border-transparent shadow-none'
      )}
    >
      <Link href={href}>
        <div className="flex items-center p-4">
          <div className="flex items-center w-full gap-4">
            <div
              className={twMerge(
                'relative rounded-lg w-28 h-16',
                thumbLoading && 'bg-zinc-700 animate-pulse'
              )}
            >
              {!thumbLoading ? (
                <Image
                  src={ytThumb ?? thumb}
                  className="rounded-lg object-cover object-center absolute"
                  fill
                  sizes="100%"
                  alt=""
                />
              ) : null}
            </div>

            <strong
              className={twMerge('text-zinc-800 dark:text-white text-sm block')}
            >
              {title}
            </strong>
          </div>

          <div className="flex justify-end">
            {isPending ? (
              <RadioButton size={24} className="text-zinc-500" />
            ) : (
              <RadioButton size={24} weight="fill" className="text-green-400" />
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LessonCard
