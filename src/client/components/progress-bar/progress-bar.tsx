import React from 'react'

import { twMerge } from 'tailwind-merge'

import { calculateProgressPercentage } from '@utils'

interface ProgressBarProps {
  total: number
  completed: number
  rounded_full?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  completed,
  rounded_full = false,
}) => {
  const calculatedProgress = React.useMemo(
    () => calculateProgressPercentage(completed, total),
    [completed, total]
  )

  const getProgressColor = React.useCallback(() => {
    if (calculatedProgress <= 25) return 'bg-red-500'

    if (calculatedProgress > 25 && calculatedProgress <= 75)
      return 'bg-brand-700'

    if (calculatedProgress > 75) return 'bg-emerald-500'
  }, [calculatedProgress])

  return (
    <div
      className={twMerge(
        'bg-zinc-700 bg-opacity-30 absolute bottom-0 left-0 right-0 h-2 overflow-hidden',
        rounded_full ? 'rounded-full' : 'rounded-b-lg'
      )}
    >
      <div
        className={twMerge(
          'bg-emerald-400 absolute bottom-0 left-0 h-2 transition-all',
          rounded_full ? 'rounded-full' : 'rounded-r-full',
          getProgressColor()
        )}
        style={{
          right: `${100 - calculatedProgress}%`,
        }}
      />
    </div>
  )
}

export default ProgressBar
