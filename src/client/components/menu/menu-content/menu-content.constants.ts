import { UserCircleGear, ShieldStar, SignOut } from 'phosphor-react'
import { MenuProps } from './menu-content'

export const menus: MenuProps[] = [
  { title: 'Meu perfil', icon: UserCircleGear, href: '/perfil' },
  {
    title: 'Administrativo',
    icon: ShieldStar,
    href: '/admin/dashboard',
    isProtected: true,
  },
  { title: 'Sair', icon: SignOut },
]
