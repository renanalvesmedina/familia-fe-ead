import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export const container = (className?: string) =>
  twMerge('flex flex-col space-y-4', className)

export const twlabel = (className?: string) =>
  twMerge(
    'flex items-center space-x-2 text-sm text-zinc-800 dark:text-white',
    className
  )

export const inputWrapper = (className?: string) => twMerge(className)

export const input = tv({
  base: 'border text-zinc-800 dark:text-white w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none',
  variants: {
    padding: {
      true: 'px-4 py-6',
      false: 'px-0 py-0',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-lg',
    },
    error: {
      true: 'border-danger-300',
    },
    variant: {
      bordeless: 'bg-transparent border-transparent',
      filled_light: 'bg-gray-50 border-gray-300 focus-within:border-brand-700',
      filled_dark:
        'bg-zinc-900 border-zinc-700 focus-within:border-brand-700 text-white',
      outlined: 'bg-transparent',
    },
  },
  defaultVariants: {
    padding: true,
    rounded: false,
    error: false,
    variant: 'filled_dark',
  },
})
