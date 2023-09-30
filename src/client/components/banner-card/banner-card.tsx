import React from 'react'

import { useNavigate } from 'react-router-dom'
import { IconProps } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

import { clickByKey } from '@utils'

interface BannerCardProps {
  illustration?: React.ReactNode
  colorScheme?: 'indigo' | 'brand'
  description?: string
  ctaText?: string
  ctaLink?: string
  title: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  ctaLink,
  ctaText,
  description,
  icon: Icon,
  colorScheme = 'indigo',
  illustration,
}) => {
  const navigate = useNavigate()

  const onClick = React.useCallback(
    () => ctaLink && navigate(ctaLink),
    [ctaLink, navigate]
  )

  return (
    <div
      className={twMerge(
        'select-none flex justify-between bg-gradient-to-l to-zinc-800 rounded-lg border border-zinc-800 transition',
        colorScheme === 'indigo' && 'from-indigo-900 hover:border-indigo-700',
        colorScheme === 'brand' && 'from-[#453C1F] hover:border-brand-700',
        ctaLink && ctaText ? 'cursor-pointer' : 'hover:border-zinc-800'
      )}
      {...(ctaLink &&
        ctaText && {
          tabIndex: 0,
          onClick,
          onKeyDown: (e) => clickByKey(e, onClick),
        })}
    >
      <div className="md:max-w-[1180px] mx-auto p-8 w-full flex max-md:flex-col justify-between md:items-center max-md:space-y-6">
        <div className="space-y-2">
          <h4 className="flex text-2xl text-white font-semibold m-0 gap-2">
            {title}
          </h4>

          {description ? (
            <p className="text-gray-300 font-normal text-base md:max-w-xl">
              {description}
            </p>
          ) : null}
        </div>

        {ctaLink && ctaText ? (
          <span
            className={twMerge(
              'font-medium flex items-center gap-2 max-md:justify-between',
              colorScheme === 'indigo' && 'text-indigo-200',
              colorScheme === 'brand' && 'text-yellow-100'
            )}
          >
            {ctaText}

            <span
              className={twMerge(
                'p-3 rounded-full text-white',
                colorScheme === 'indigo' && 'bg-indigo-600',
                colorScheme === 'brand' && 'bg-brand-700'
              )}
            >
              {Icon ? <Icon size={20} /> : null}
            </span>
          </span>
        ) : null}
      </div>

      {React.isValidElement(illustration) ? (
        <div className="max-md:hidden mr-24 pt-8">{illustration}</div>
      ) : null}
    </div>
  )
}

export default BannerCard
