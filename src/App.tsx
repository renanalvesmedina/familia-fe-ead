import React from 'react'

import { AuthProvider } from './contexts'
import { AppRoutes } from './routes'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <AppRoutes />
    </AuthProvider>
  )
}
