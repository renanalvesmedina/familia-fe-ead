import { Route, Routes } from 'react-router-dom'

import { Curso } from './pages/Curso'
import { PainelAluno } from './pages/PainelAluno'
import { Perfil } from './pages/Perfil'
import { PageNotFound } from './pages/PageNotFound'
import { Users } from './pages/admin/Users/Users'
import { CreateUser } from './pages/admin/Users/CreateUser'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PainelAluno />} />
      <Route path='/' index element={<PainelAluno />} />
      <Route path='/curso/:courseId/aula/:aulaId' element={<Curso />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/info' element={<PageNotFound />} />
      <Route path='/admin/users' element={<Users />} />
      <Route path='/admin/user/:userId' element={<CreateUser />} />
    </Routes>
  )
}
