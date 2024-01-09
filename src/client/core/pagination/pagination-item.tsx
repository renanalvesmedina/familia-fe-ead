import React from 'react'

import { twMerge } from 'tailwind-merge'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  onPageChange,
  isCurrent = false,
  number,
}) => {
  const baseClassName =
    'rounded-md w-[32px] h-[32px] p-1 text-base font-semibold shadow-md'

  if (isCurrent) {
    return (
      <button
        className={twMerge(
          baseClassName,
          'text-slate-100 bg-slate-700 hover:brightness-110'
        )}
      >
        {number}
      </button>
    )
  }

  return (
    <button
      className={twMerge(
        baseClassName,
        'text-slate-500 bg-slate-800 bg-opacity-60 hover:bg-opacity-100'
      )}
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  )
}
