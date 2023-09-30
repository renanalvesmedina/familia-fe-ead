import { validateUserPermission } from '@validators/userPermission.validate'
import { useAuthContext } from '@contexts/auth.context'
import { UserModel } from '@models/UserModel'

type UseCanParams = {
  user: Partial<UserModel> | null
}

export function useCan({ user }: UseCanParams) {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return false

  return validateUserPermission(user)
}
