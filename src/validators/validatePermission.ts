import { REACT_LOCAL_STORAGE_AUTH_TOKEN } from '@config'
import { parseCookies } from 'nookies'

import decode from 'jwt-decode'

export const validateUserPermission = () => {
  const { [REACT_LOCAL_STORAGE_AUTH_TOKEN]: token } = parseCookies()

  if (!token) return false

  const { role } = decode<{ role: string }>(token)

  const hasPermission = role.includes('Admin')

  if (!hasPermission) return false

  return true
}
