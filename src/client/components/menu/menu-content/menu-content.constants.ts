import { LogOut, ShieldCheck, UserCircle } from 'lucide-react'
import { MenuProps } from './menu-content'

export const menus: MenuProps[] = [
  { title: 'Meu perfil', icon: UserCircle, href: '/profile' },
  {
    title: 'Administrativo',
    icon: ShieldCheck,
    href: '/admin/dashboard',
    isProtected: true,
  },
  { title: 'Sair', icon: LogOut },
]
