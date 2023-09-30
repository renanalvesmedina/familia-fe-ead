import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthContext } from '@contexts/auth.context'

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuthContext()

  if (loading) return <></>

  if (!isAuthenticated) return <Navigate to="/login" />

  return children
}
