import React from 'react'

import { useRouter } from 'next/router'
import { IconProps } from 'phosphor-react'

interface QuikAccessCardProps {
  title: string
  href: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const QuikAccessCard: React.FC<QuikAccessCardProps> = ({
  title,
  icon: Icon,
  href,
}) => {
  const { push } = useRouter()

  return (
    <button
      onClick={() => push(href)}
      className="flex items-center select-none border border-zinc-700/10 dark:border-zinc-700/50 cursor-pointer flex-1 bg-white dark:bg-zinc-700/20 dark:hover:bg-zinc-700/40 dark:focus-within:bg-zinc-700/50 transition-colors px-8 py-6 rounded-lg gap-6 text-zinc-800 dark:text-white outline-none"
    >
      <span className="p-3 rounded-lg dark:bg-zinc-700/40">
        <Icon size={24} className="text-brand-700" />
      </span>

      <span className="text-lg">{title}</span>
    </button>
  )
}

export default QuikAccessCard
