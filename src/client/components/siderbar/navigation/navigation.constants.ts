import {
  GraduationCap,
  CirclesFour,
  UsersThree,
  BookOpen,
  Calendar,
  Books,
  Gear,
  ChalkboardSimple,
} from 'phosphor-react'

export const navigationMenus = [
  {
    title: 'Geral',
    links: [
      {
        title: 'Dashboard',
        route: '/admin/dashboard',
        icon: CirclesFour,
      },
      {
        title: 'Configurações',
        route: '/admin/settings',
        icon: Gear,
      },
    ],
  },
  {
    title: 'Operações',
    links: [
      {
        title: 'Matriculas',
        route: '/admin/enrollments',
        icon: GraduationCap,
      },
      {
        title: 'Usuários',
        route: '/admin/users',
        icon: UsersThree,
      },
      {
        title: 'Cursos',
        route: '/admin/courses',
        icon: Books,
      },
      {
        title: 'Turmas',
        route: '/admin/classes',
        icon: ChalkboardSimple,
      },
      {
        title: 'Provas',
        route: '/admin/exams',
        icon: BookOpen,
      },
      {
        title: 'Calendário',
        route: '/admin/calendar',
        icon: Calendar,
      },
    ],
  },
]
