import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo_icone from '../assets/logo_icone.png'
import logo_texto from '../assets/logo_texto.png'
import {
  Books,
  CaretCircleLeft,
  CirclesFour,
  Gear,
  GraduationCap,
  UsersThree,
} from 'phosphor-react'

interface SidebarProps {
  menuActived: string
}

export function Sidebar({ menuActived }: SidebarProps) {
  const [open, setOpen] = useState(true)
  const _navigate = useNavigate()

  const menus = [
    {
      title: 'Dashboard',
      route: '/admin/dashboard',
      icon: <CirclesFour size={30} />,
    },
    {
      title: 'Cursos',
      route: '/admin/courses',
      spacing: true,
      icon: <Books size={30} />,
    },
    {
      title: 'Usuários',
      route: '/admin/users',
      icon: <UsersThree size={30} />,
    },
    {
      title: 'Matriculas',
      route: '/admin/enrollments',
      icon: <GraduationCap size={30} />,
    },
    {
      title: 'Configurações',
      route: '/admin/settings',
      spacing: true,
      icon: <Gear size={30} />,
    },
  ]

  function handleOpenCloseSide() {
    setOpen(!open)
  }

  return (
    <div
      className={`bg-zinc-900 h-screen p-5 pt-4 w-72 text-white duration-300 relative ${
        open ? 'w-72' : 'w-24'
      }`}
    >
      <CaretCircleLeft
        size={32}
        className={`bg-white text-zinc-900 rounded-full absolute -right-4 top-6 cursor-pointer ${
          !open && 'rotate-180'
        }`}
        onClick={handleOpenCloseSide}
      />

      <div className="flex gap-1 cursor-pointer" onClick={() => _navigate('/')}>
        <img src={logo_icone} alt="" className="h-16" />
        <img src={logo_texto} alt="" className={`h-16 ${!open && 'hidden'}`} />
      </div>

      <ul className="pt-2 mt-8">
        {menus.map((menu, i) => (
          <li
            key={i}
            onClick={() => _navigate(menu.route)}
            className={`text-zinc-200 flex items-center justify-center gap-x-4 cursor-pointer p-2 rounded-lg hover:bg-gradient-to-r from-aux-500 active:bg-aux-500 ${
              menuActived == menu.title && 'bg-aux-500'
            } ${menu.spacing ? 'mt-9' : 'mt-2'}`}
          >
            <span>{menu.icon}</span>
            <span
              className={`text-lg flex-1 duration-300 ${!open && 'hidden'}`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
