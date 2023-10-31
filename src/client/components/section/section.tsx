import React from 'react'

import { IconProps } from 'phosphor-react'

interface SectionProps {
  children: React.ReactNode
  title?: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children }) => (
  <section className="space-y-10">
    {title || Icon ? (
      <div className="flex flex-col w-full gap-4">
        {Icon ? <Icon size={32} className="text-brand-700" /> : null}
        {title ? (
          <h4 className="flex text-2xl text-zinc-800 dark:text-white m-0 gap-2 font-medium">
            {title}
          </h4>
        ) : null}
      </div>
    ) : null}

    {children}
  </section>
)

export default Section
