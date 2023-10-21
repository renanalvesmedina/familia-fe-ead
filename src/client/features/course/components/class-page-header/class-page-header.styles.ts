import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export const container = (className?: string) =>
  twMerge(
    'flex items-center justify-between h-full gap-10 px-4 py-6',
    className
  )

export const button = tv({
  base: 'py-3 rounded-full flex items-center gap-2',
  variants: {
    theme: {
      dark: 'text-gray-500',
      light: 'text-gray-400',
    },
    active: {
      false: 'hover:text-indigo-600 dark:hover:text-brand-700',
      true: 'text-indigo-600 dark:text-brand-700',
    },
  },
  defaultVariants: { theme: 'dark', active: false },
})

export const linkOut = tv({
  base: 'p-3 rounded-full transition',
  variants: {
    theme: {
      dark: 'text-gray-500 bg-aux-500/50 hover:bg-aux-500',
      light: 'text-gray-400 bg-gray-200/50 hover:bg-gray-200',
    },
  },
  defaultVariants: { theme: 'dark' },
})

export const headerWrapper = tv({
  base: 'flex justify-center items-center w-full',
  variants: {
    theme: {
      dark: 'bg-zinc-800',
      light: 'bg-gray-100',
    },
  },
  defaultVariants: { theme: 'dark' },
})
