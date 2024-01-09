import {
  LayoutDashboard,
  // CalendarHeart,
  // BookOpenCheck,
  // Presentation,
  // Component,
  // Settings2,
  // BookOpen,
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
      // {
      //   title: 'Configurações',
      //   route: '/admin/configuracoes',
      //   icon: Settings2,
      // },
    ],
  },
  {
    title: 'Gestão',
    links: [
      // {
      //   title: 'Circuitos',
      //   route: '/admin/circuitos',
      //   icon: Component,
      // },
      // {
      //   title: 'Turmas',
      //   route: '/admin/turmas',
      //   icon: Presentation,
      // },

      // {
      //   title: 'Treinamentos',
      //   route: '/admin/treinamentos',
      //   icon: BookOpenCheck,
      // },
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
    ],
  },
  // {
  //   title: 'Operações',
  //   links: [
  //     // {
  //     //   title: 'Matriculas',
  //     //   route: '/admin/enrollments',
  //     //   icon: GraduationCap,
  //     // },
  //     {
  //       title: 'Provas',
  //       route: '/admin/provas',
  //       icon: BookOpen,
  //     },
  //     {
  //       title: 'Calendário',
  //       route: '/admin/calendario',
  //       icon: CalendarHeart,
  //     },
  //   ],
  // },
]
