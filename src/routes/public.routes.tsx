import React from 'react'

import { useAuthContext } from '../contexts'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  children: JSX.Element
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext()

  if (isAuthenticated) return <Navigate to="/" />

  return children
}
