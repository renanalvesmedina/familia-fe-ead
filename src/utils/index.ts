import { deburr, join, memoize, toLower, words } from 'lodash'
import { format, parseISO } from 'date-fns'
import { LoadOptions } from 'react-select-async-paginate'
import { UsersModel } from '@models/UsersModel'
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

export const money = (s?: string | number) => {
  let num = 0

  if (typeof s === 'number') {
    num = s
  } else {
    num = Number(s)
  }

  return (num || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export const sanitizeSearchTerms = (terms: string) =>
  join(words(toLower(deburr(terms))), ' ')

export const filterUsers = memoize(
  (searchTerms: string, searchData: UsersModel[]) =>
    searchData.filter(({ email, fullName }) =>
      sanitizeSearchTerms(`${fullName} ${email}`).includes(searchTerms)
    )
)

export const filterUsersByRoles = memoize(
  (role: 'Admin' | 'Student', searchData: UsersModel[]) =>
    searchData.filter(({ profile }) => profile!.includes(role))
)

export const phoneMask = (value: string | number) => {
  const stringValue = value.toString()
  return stringValue
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})/, '$1-$2')
}
