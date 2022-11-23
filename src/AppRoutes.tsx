import { Route, Routes } from 'react-router-dom'

import App from './App'
import { Login } from './pages/Login'
import { PainelAluno } from './pages/PainelAluno'

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path='login' element={<Login />} />
      <Route path="painel" element={<PainelAluno />} />
    </Routes>
  )
}
