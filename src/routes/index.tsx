import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesPaths } from './paths.routes'

import PainelAlunoPage from '@components/PainelAluno'
import NotFoundPage from '@pages/page-not-found'
import ProfilePage from '@pages/profile'
import CoursePage from '@pages/course'
import LoginPage from '@pages/login'

import EnrollmentsPage from '@pages/admin/enrollments'
import CreateUserPage from '@pages/admin/users/create-user'
import DashboardPage from '@pages/admin/dashboard'
import EditUserPage from '@pages/admin/users/edit-user'
import CoursesPage from '@pages/admin/courses'
import UsersPage from '@pages/admin/users'

import SettingsPage from '@pages/admin/dashboard'
import CalendarPage from '@pages/admin/dashboard'
import ClassesPage from '@pages/admin/dashboard'
import ExamsPage from '@pages/admin/dashboard'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route path={routesPaths.home} index element={<PainelAlunoPage />} />

        <Route path={routesPaths.login} element={<LoginPage />} />

        <Route path={routesPaths.class} element={<CoursePage />} />

        <Route path={routesPaths.profile} element={<ProfilePage />} />

        <Route path={routesPaths.notFound} element={<NotFoundPage />} />

        <Route path={routesPaths.adminDashboard} element={<DashboardPage />} />

        <Route path={routesPaths.adminSettings} element={<SettingsPage />} />
        <Route path={routesPaths.adminCalendar} element={<CalendarPage />} />
        <Route path={routesPaths.adminClasses} element={<ClassesPage />} />
        <Route path={routesPaths.adminExams} element={<ExamsPage />} />

        <Route
          path={routesPaths.adminEnrollments}
          element={<EnrollmentsPage />}
        />

        <Route path={routesPaths.adminUsers} element={<UsersPage />} />

        <Route
          path={routesPaths.adminUserCreation}
          element={<CreateUserPage />}
        />

        <Route path={routesPaths.adminUserEdition} element={<EditUserPage />} />

        <Route path={routesPaths.adminCourses} element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
