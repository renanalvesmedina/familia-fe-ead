import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from './contexts'
import './index.css'
import { Login } from './pages/Login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Login>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Login>
    </AuthProvider>
  </React.StrictMode>
)
