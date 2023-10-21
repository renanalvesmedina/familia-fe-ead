import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { AuthenticationModel } from '@models/AuthenticationModel'

import {
  REACT_LOCAL_STORAGE_COMPLETED_CLASS,
  REACT_LOCAL_STORAGE_AUTH_TOKEN,
  REACT_LOCAL_STORAGE_AUTH_DATA,
} from '@config'

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
  setCookie(
    undefined,
    REACT_LOCAL_STORAGE_AUTH_TOKEN,
    String(authData?.token),
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
  destroyCookie(null, REACT_LOCAL_STORAGE_AUTH_TOKEN, { path: '/' })
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
