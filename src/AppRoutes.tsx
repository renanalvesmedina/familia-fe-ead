import { Route, Routes } from 'react-router-dom'

import { Curso } from './pages/Curso'
import { PainelAluno } from './pages/PainelAluno'
import { Perfil } from './pages/Perfil'
import { PageNotFound } from './pages/PageNotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PainelAluno />} />
      <Route path='/' index element={<PainelAluno />} />
      <Route path='/curso/:courseId/aula/:aulaId' element={<Curso />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/info' element={<PageNotFound />} />
    </Routes>
  )
}
