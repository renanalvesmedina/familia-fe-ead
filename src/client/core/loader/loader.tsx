import React from 'react'

import { twMerge } from 'tailwind-merge'

const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={twMerge('text-[inherit] h-5 w-5 animate-spin', className)}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
      />
    </svg>
  )
}

export default Loader
