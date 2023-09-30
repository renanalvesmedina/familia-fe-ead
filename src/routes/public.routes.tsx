import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthContext } from '@contexts/auth.context'

interface PublicRouteProps {
  children: JSX.Element
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuthContext()

  if (loading) return <></>

  if (isAuthenticated) return <Navigate to="/" />

  return children
}
