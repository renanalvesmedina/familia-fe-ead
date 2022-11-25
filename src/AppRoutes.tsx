import { Route, Routes } from 'react-router-dom'

import App from './App'
import { Curso } from './pages/Curso'
import { Login } from './pages/Login'
import { PainelAluno } from './pages/PainelAluno'
import { Perfil } from './pages/Perfil'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/curso" element={<Curso />} />
      <Route path='/login' element={<Login />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route index element={<PainelAluno />} />
    </Routes>
  )
}
