import React from 'react'

import { WhatsappLogo } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'
import { Check } from 'lucide-react'

import { useHover } from '@hooks/use-hover'
import { numonly } from '@utils'

export interface PhoneToWhatsappProps {
  value: string
  iconPosition?: 'left' | 'right'
}

export const PhoneToWhatsapp: React.FC<PhoneToWhatsappProps> = ({
  value,
  iconPosition = 'left',
}) => {
  const [copied, setCopied] = React.useState(false)
  const timer = React.useRef<any>()

  const [ref, isHover] = useHover()

  React.useEffect(() => {
    timer.current = setTimeout(setCopied, 1000, false)
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [copied])

  return (
    <a
      ref={ref as never}
      href={`https://api.whatsapp.com/send?phone=55${numonly(value)}`}
      target="_blank"
      rel="noreferrer"
      className="relative select-none hover:text-zinc-800 dark:hover:text-white transition-colors cursor-pointer"
    >
      {isHover ? (
        <span
          className={twMerge(
            'absolute -top-[2px]',
            iconPosition === 'left' ? '-left-7' : '-right-7'
          )}
        >
          {copied ? (
            <Check className="text-indigo-600" size={18} />
          ) : (
            <WhatsappLogo className="text-emerald-600" size={20} />
          )}
        </span>
      ) : null}

      {value}
    </a>
  )
}
