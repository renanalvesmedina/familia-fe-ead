import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from './contexts'
import './index.css'
import { Login } from './pages/Login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <AuthProvider>
      <Login>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Login>
    </AuthProvider>
  </React.StrictMode>
)
