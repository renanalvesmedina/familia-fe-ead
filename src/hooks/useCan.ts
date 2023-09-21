import { validateUserPermission } from '../validators/userPermission.validate'
import { UserModel } from '../models/UserModel'
import { useAuthContext } from '../contexts'

type UseCanParams = {
  user: Partial<UserModel> | null
}

export function useCan({ user }: UseCanParams) {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return false

  return validateUserPermission(user)
}
