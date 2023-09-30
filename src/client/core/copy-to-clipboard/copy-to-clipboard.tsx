import React from 'react'
import copy from 'copy-to-clipboard'

import { Check, Copy } from 'phosphor-react'

import { useHover } from '@hooks/use-hover'

export interface CopyToClipboardProps {
  value: string
  truncate?: boolean
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  value,
  truncate,
}) => {
  const [copied, setCopied] = React.useState(false)
  const timer = React.useRef<any>()

  const [ref, isHover] = useHover()

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation()
      setCopied(copy(value))
    },
    [value]
  )

  React.useEffect(() => {
    timer.current = setTimeout(setCopied, 1000, false)
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [copied])

  return (
    <button
      ref={ref as never}
      onClick={onClick}
      className="relative select-none hover:text-white transition-colors cursor-pointer"
    >
      {isHover ? (
        <span className="absolute -right-5 top-0">
          {copied ? (
            <Check className="text-indigo-600" size={16} />
          ) : (
            <Copy className="text-indigo-600" size={16} />
          )}
        </span>
      ) : null}

      {truncate ? value.slice(0, 40) : value}
    </button>
  )
}
