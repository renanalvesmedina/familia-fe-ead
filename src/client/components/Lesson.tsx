import React from 'react'

import { RadioButton } from 'phosphor-react'
import { useQuery } from 'react-query'
import { twMerge } from 'tailwind-merge'

import { api } from '@services/api'

interface LessonProps {
  title: string
  isPending: boolean
  thumb: string
  classId: string
  isActive?: boolean
  handleClick: () => void
}

const getClassThumb = async (classId?: string) =>
  api.get(`/v1/Class/details?classId=${classId}`).then((res) => ({
    video: res.data?.video,
  }))

export const Lesson: React.FC<LessonProps> = ({
  handleClick,
  isPending,
  isActive,
  classId,
  title,
}) => {
  const { data } = useQuery(
    ['class-thumb', classId],
    () => getClassThumb(classId),
    {
      staleTime: 1000 * 60 * 2, // 2 minutes
      onError: (error: unknown) => console.error(error),
    }
  )

  return (
    <a
      onClick={handleClick}
      className={twMerge('group cursor-pointer', isActive && 'active')}
    >
      <div
        className={twMerge(
          'rounded-lg p-3 group-hover:bg-gradient-to-r from-aux-500 group-active:bg-aux-500',
          isActive && 'bg-gradient-to-r from-aux-400 to-aux-500'
        )}
      >
        <div className="flex">
          <div className="flex items-center w-full">
            <img
              src={`https://i.ytimg.com/vi/${data?.video}/hqdefault.jpg`}
              width="80px"
              className="mr-4 rounded aspect-video object-cover object-center"
            />

            <strong className="text-gray-200 font-thin text-sm block">
              {title}
            </strong>
          </div>

          <div className="flex justify-end">
            {isPending ? (
              <RadioButton size={24} className="m-3 text-zinc-500" />
            ) : (
              <RadioButton
                size={24}
                weight="fill"
                className="m-3 text-green-400"
              />
            )}
          </div>
        </div>
      </div>
    </a>
  )
}
