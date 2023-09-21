import React from 'react'

import { useAuthContext } from '../contexts'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return <Navigate to="/login" />

  return children
}
