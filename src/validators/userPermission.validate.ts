import { UserModel } from '@models/UserModel'

type ValidateUserPermissionsParams = Partial<UserModel> | null

export function validateUserPermission(user: ValidateUserPermissionsParams) {
  if (!user) return false

  const hasPermission = user?.fullName === 'Administrador'

  if (!hasPermission) return false

  return true
}
