import React from 'react'

import { useCan } from '@hooks/use-can'

export interface CanProps {
  children: React.ReactNode
}

const Can: React.FC<CanProps> = ({ children }) => {
  const userCanSeeComponent = useCan()

  return !userCanSeeComponent ? null : (
    <React.Fragment>{children}</React.Fragment>
  )
}

export default Can
