import React from 'react'

import { Toaster } from 'react-hot-toast'

import { withQueryClient } from './hocs/withQueryClient'
import { AuthProvider } from './contexts/auth.context'
import { AppRoutes } from './routes'

import 'react-calendar/dist/Calendar.css'

const App: React.FC = () =>
  withQueryClient(
    <AuthProvider>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <AppRoutes />
    </AuthProvider>
  )

export default App
