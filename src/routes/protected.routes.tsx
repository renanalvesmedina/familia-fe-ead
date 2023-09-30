import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthContext } from '@contexts/auth.context'
import { useCan } from '@hooks/use-can'

interface ProtectedRouteProps {
  children: JSX.Element
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, userName, loading } = useAuthContext()
  const isAdmin = useCan({ user: { fullName: userName! } })

  if (loading) return <></>

  if (!isAuthenticated) return <Navigate to="/login" />

  if (!isAdmin) return <Navigate to="/" />

  return children
}
