import { Route, Routes } from 'react-router-dom'

import { Curso } from './pages/Curso'
import { PainelAluno } from './pages/PainelAluno'
import { Perfil } from './pages/Perfil'
import { PageNotFound } from './pages/PageNotFound'
import { CreateUser } from './pages/admin/Users/CreateUser'
import { Users } from './pages/admin/Users/Users'
import { Courses } from './pages/admin/Courses/Courses'
import { Dashboard } from './pages/admin/Dashboard/Dashboard'
import { EditUser } from './pages/admin/Users/EditUser'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PainelAluno />} />
      <Route path="/" index element={<PainelAluno />} />
      <Route path="/curso/:courseId/aula/:aulaId" element={<Curso />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/info" element={<PageNotFound />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/user/create" element={<CreateUser />} />
      <Route path="/admin/user/edit/:userId" element={<EditUser />} />

      <Route path="/admin/courses" element={<Courses />} />
    </Routes>
  )
}
