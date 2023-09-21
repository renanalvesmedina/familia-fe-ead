import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesPaths } from './paths.routes'

import PageNotFound from '../pages/PageNotFound'
import PainelAluno from '../pages/PainelAluno'
import CreateUser from '../pages/admin/Users/CreateUser'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import EditUser from '../pages/admin/Users/EditUser'
import Courses from '../pages/admin/Courses/Courses'
import Perfil from '../pages/Perfil'
import Curso from '../pages/Curso'
import Users from '../pages/admin/Users/Users'
import Login from '../pages/Login'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path={routesPaths.home} index element={<PainelAluno />} />

        <Route path={routesPaths.login} element={<Login />} />

        <Route path={routesPaths.class} element={<Curso />} />

        <Route path={routesPaths.profile} element={<Perfil />} />

        <Route path={routesPaths.notFound} element={<PageNotFound />} />

        <Route path={routesPaths.adminDashboard} element={<Dashboard />} />

        <Route path={routesPaths.adminUsers} element={<Users />} />

        <Route path={routesPaths.adminUserCreation} element={<CreateUser />} />

        <Route path={routesPaths.adminUserEdition} element={<EditUser />} />

        <Route path={routesPaths.adminCourses} element={<Courses />} />
      </Routes>
    </BrowserRouter>
  )
}
