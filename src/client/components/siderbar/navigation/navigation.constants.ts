import {
  LayoutDashboard,
  GraduationCap,
  CalendarHeart,
  Presentation,
  Settings2,
  BookOpen,
  Library,
  Users2,
} from 'lucide-react'

export const navigationMenus = [
  {
    title: 'Geral',
    links: [
      {
        title: 'Dashboard',
        route: '/admin/dashboard',
        icon: LayoutDashboard,
      },
      {
        title: 'Configurações',
        route: '/admin/settings',
        icon: Settings2,
      },
    ],
  },
  {
    title: 'Gestão',
    links: [
      {
        title: 'Usuários',
        route: '/admin/users',
        icon: Users2,
      },
      {
        title: 'Cursos',
        route: '/admin/courses',
        icon: Library,
      },
      {
        title: 'Turmas',
        route: '/admin/classes',
        icon: Presentation,
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
        title: 'Provas',
        route: '/admin/exams',
        icon: BookOpen,
      },
      {
        title: 'Calendário',
        route: '/admin/calendar',
        icon: CalendarHeart,
      },
    ],
  },
]
