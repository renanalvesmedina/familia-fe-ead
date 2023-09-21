import React from 'react'

import { UserModel } from '../../models/UserModel'
import { useCan } from '../../hooks/useCan'

export interface CanProps {
  children: React.ReactNode
  user: Partial<UserModel> | null
}

const Can: React.FC<CanProps> = ({ children, user }) => {
  const userCanSeeComponent = useCan({ user })

  return !userCanSeeComponent ? null : (
    <React.Fragment>{children}</React.Fragment>
  )
}

export default Can
