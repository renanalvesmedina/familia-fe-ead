import { validateUserPermission } from '@validators/validatePermission'
import { useAuthContext } from '@contexts/auth.context'

export function useCan() {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return false

  return validateUserPermission()
}
