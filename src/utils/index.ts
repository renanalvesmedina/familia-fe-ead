import { format, parseISO } from 'date-fns'
import { LoadOptions } from 'react-select-async-paginate'
import { GroupBase } from 'react-select'
import { ptBR } from 'date-fns/locale'

export const clickByKey = (
  event: React.KeyboardEvent<HTMLDivElement>,
  onClick: (event: React.KeyboardEvent<HTMLDivElement>) => void,
  keysForClick = [' ', 'Enter']
) => {
  const keyName = event.key
  if (onClick && keysForClick.indexOf(keyName) >= 0) {
    onClick(event)
  }
}

export const calculateProgressPercentage = (completed: number, total: number) =>
  Math.ceil((completed / total) * 100)

export const parseDate = (
  value?: string | number | Date,
  pattern = 'dd/MM/yyyy'
): string | null =>
  value
    ? format(parseISO(value.toString()), pattern, {
        locale: { ...ptBR },
      }).toString()
    : null

export const array = <T>(v: T | T[]) => (Array.isArray(v) ? v : [v])

export interface Option<T> {
  label: string
  value: T
}

export type AsyncLoadOptions<T, R = Record<string, unknown>> = LoadOptions<
  Option<T>,
  GroupBase<Option<T>>,
  { page: number } & R
>

export const numonly = (s?: string | null) =>
  !s ? null : s.replace(/[^\d]+/g, '')

export const getFirstName = (name?: string) => {
  if (!name) return
  const completeName = name.split(' ')
  return completeName.length > 1 ? completeName[0] : name
}

export const getAvatarLetters = (userName: string) => {
  const words = userName.trim().toLowerCase().split(' ')
  let avatarLetters = ''

  for (let a = 0; a < words.length; a++) {
    const w = words[a]
    words[a] = w[0]?.toUpperCase()
    avatarLetters = words.join().replace(',', '').substring(0, 2)
  }

  return avatarLetters
}

export const stripTags = (content: any, tags: any) => {
  if (!tags || !content) return content
  const regex = new RegExp(`</?(${tags.join('|')})[^>]*>`, 'gmi')
  return content.replace(regex, '')
}

export const getProgressColor = (percentage: number) => {
  if (percentage <= 25) return 'text-red-500 bg-red-500/5 border-red-500'

  if (percentage > 25 && percentage <= 75)
    return 'text-brand-700 bg-brand-700/5 border-brand-700'

  if (percentage > 75)
    return 'text-emerald-500 bg-emerald-500/5 border-emerald-500'
}
