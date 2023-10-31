import React from 'react'

import { ArrowRightIcon } from 'lucide-react'

const TakeExamCard: React.FC = () => (
  <button
    className="flex justify-between items-center w-full text-lg text-zinc-800 dark:text-brand-700 font-bold bg-brand-700/20 dark:bg-brand-700/5 border border-brand-700/40 rounded-lg px-6 py-8 text-center"
    onClick={() =>
      window.open(
        'https://forms.office.com/r/KqgUUABPy5',
        '_blank',
        'noreferrer'
      )
    }
  >
    Prova final disponível!
    <span className="flex items-center gap-2">
      <span className="max-md:hidden">ir para a prova</span>
      <ArrowRightIcon size={20} />
    </span>
  </button>
)

export default TakeExamCard
