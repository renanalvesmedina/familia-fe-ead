import { AuthenticationModel } from '@models/AuthenticationModel'

const REACT_LOCAL_STORAGE_AUTH_DATA = '@App:authData'
const REACT_LOCAL_STORAGE_COMPLETED_CLASS = '@App:completedClass'

export function setAuthLocalStorage(authData: AuthenticationModel | null) {
  localStorage.setItem(REACT_LOCAL_STORAGE_AUTH_DATA, JSON.stringify(authData))
}

export function getAuthLocalStorage() {
  const data = localStorage.getItem(REACT_LOCAL_STORAGE_AUTH_DATA)
  if (!data) {
    return null
  }

  return JSON.parse(data)
}

export function getToken() {
  const authData = getAuthLocalStorage()
  return authData != null ? authData.token.toString() : ''
}

export function removeAuthLocalStorage() {
  localStorage.removeItem(REACT_LOCAL_STORAGE_AUTH_DATA)
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
