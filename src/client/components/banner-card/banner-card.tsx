import React from 'react'

import { LucideIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { clickByKey } from '@utils'
import { RichText } from '@core/rich-text'
import { Container } from '@core/container'

interface BannerCardProps {
  illustration?: React.ReactNode
  colorScheme?: 'indigo' | 'brand'
  description?: string
  rounded?: boolean
  ctaText?: string
  ctaLink?: string
  title: string
  icon?: LucideIcon
}

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  ctaLink,
  ctaText,
  description,
  icon: Icon,
  colorScheme = 'indigo',
  illustration,
  rounded,
}) => {
  const { push } = useRouter()

  const onClick = React.useCallback(
    () => ctaLink && push(ctaLink),
    [ctaLink, push]
  )

  return (
    <div
      className={twMerge(
        'select-none flex justify-between bg-indigo-500 dark:bg-gradient-to-l dark:to-zinc-800 transition',
        rounded ? 'rounded-lg' : 'rounded-none',
        colorScheme === 'indigo' && 'from-indigo-900',
        colorScheme === 'brand' && 'from-[#453C1F]',
        ctaLink && ctaText ? 'cursor-pointer' : ''
      )}
      {...(ctaLink &&
        ctaText && {
          tabIndex: 0,
          onClick,
          onKeyDown: (e) => clickByKey(e, onClick),
        })}
    >
      <Container
        className={twMerge(
          'flex justify-between max-md:space-y-6',
          illustration
            ? 'px-6 max-sm:pb-12 max-sm:flex-col-reverse items-center'
            : 'p-6 max-sm:flex-col md:items-center'
        )}
      >
        <div className="space-y-2">
          <h4 className="flex text-2xl text-white font-semibold m-0 gap-2">
            {title}
          </h4>

          {description ? (
            <RichText className="text-gray-50 font-normal text-base md:max-w-xl">
              {description}
            </RichText>
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

        {React.isValidElement(illustration) ? (
          <div className="py-4">{illustration}</div>
        ) : null}
      </Container>
    </div>
  )
}

export default BannerCard
