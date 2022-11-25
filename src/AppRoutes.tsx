import { Route, Routes } from 'react-router-dom'

import { Curso } from './pages/Curso'
import { Login } from './pages/Login'
import { PainelAluno } from './pages/PainelAluno'
import { Perfil } from './pages/Perfil'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' index element={<PainelAluno />} />
      <Route path="/curso" element={<Curso />} />
      <Route path='/login' element={<Login />} />
      <Route path='/perfil' element={<Perfil />} />
    </Routes>
  )
}
