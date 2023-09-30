import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { AuthenticationModel } from '@models/AuthenticationModel'

export const REACT_LOCAL_STORAGE_AUTH_DATA = '@App:authData'
export const REACT_LOCAL_STORAGE_COMPLETED_CLASS = '@App:completedClass'

export function setAuthLocalStorage(authData: AuthenticationModel | null) {
  setCookie(
    undefined,
    REACT_LOCAL_STORAGE_AUTH_DATA,
    JSON.stringify(authData),
    {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/', // Whitch paths in my app has access to this cookie
    }
  )
}

export function getAuthLocalStorage() {
  const { [REACT_LOCAL_STORAGE_AUTH_DATA]: data } = parseCookies()

  if (!data) return null

  return JSON.parse(data)
}

export function getToken() {
  const authData = getAuthLocalStorage()
  return authData != null ? authData.token.toString() : ''
}

export function removeAuthLocalStorage() {
  destroyCookie(null, REACT_LOCAL_STORAGE_AUTH_DATA, { path: '/' })
}

export function getAvatarLetters(userName: string) {
  const words = userName.trim().toLowerCase().split(' ')
  let avatarLetters = ''

  for (let a = 0; a < words.length; a++) {
    const w = words[a]
    words[a] = w[0]?.toUpperCase()
    avatarLetters = words.join().replace(',', '').substring(0, 2)
  }

  return avatarLetters
}

export function setCompletedClassLocalStorage(completedClass: string[]) {
  localStorage.setItem(
    REACT_LOCAL_STORAGE_COMPLETED_CLASS,
    JSON.stringify(completedClass)
  )
}

export function getCompletedClassLocalStorage(): string[] {
  const data = localStorage.getItem(REACT_LOCAL_STORAGE_COMPLETED_CLASS)
  if (!data) {
    return []
  }

  return JSON.parse(data)
}
