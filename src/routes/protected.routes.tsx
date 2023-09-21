import React from 'react'

import { useAuthContext } from '../contexts'
import { Navigate } from 'react-router-dom'
import { useCan } from '../hooks/useCan'

interface ProtectedRouteProps {
  children: JSX.Element
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, userName } = useAuthContext()
  const isAdmin = useCan({ isAuthenticated, user: { fullName: userName! } })

  if (!isAuthenticated) return <Navigate to="/login" />

  if (!isAdmin) return <Navigate to="/" />

  return children
}
