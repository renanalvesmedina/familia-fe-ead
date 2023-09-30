import React from 'react'

import { Headphones, IconProps, X } from 'phosphor-react'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { validateUserPermission } from '@validators/userPermission.validate'
import { useAuthContext } from '@contexts/auth.context'
import { clickByKey } from '@utils'
import { Can } from '@core/can'

import { Backdrop, Container } from './menu-content.styles'
import { whatsappSuportLink } from 'src/constants'
import { menus } from './menu-content.constants'

export interface MenuProps {
  isProtected?: boolean
  title: string
  href?: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const LinkButton: React.FC<MenuProps> = ({ icon: Icon, ...menu }) => {
  const { push } = useRouter()

  const { logout } = useAuthContext()

  const handleLogout = React.useCallback(async () => {
    push('/')
    logout()
  }, [push, logout])

  return (
    <li key={menu.title}>
      <button
        onClick={() => (menu.href ? push(menu.href) : handleLogout())}
        className={twMerge(
          'flex items-center justify-start gap-4 w-full rounded-full py-2 px-3 border border-transparent transition outline-none text-white',
          'hover:text-brand-700 hover:bg-brand-700/10 hover:border-brand-700/60',
          'active:text-brand-700 active:bg-brand-700/10 active:border-brand-700/60',
          'focus-within:text-brand-700 focus-within:bg-brand-700/10 focus-within:border-brand-700/60'
        )}
      >
        <Icon size={24} />
        <p>{menu.title}</p>
      </button>
    </li>
  )
}

interface MenuContentProps {
  onClose: () => void
}

const MenuContent: React.FC<MenuContentProps> = ({ onClose }) => {
  const menuRef: React.LegacyRef<HTMLDivElement> = React.useRef(null)

  const { push } = useRouter()

  const { user, userName } = useAuthContext()

  const onHelpClick = React.useCallback(
    () => window.open(whatsappSuportLink, '_blank', 'noreferrer'),
    []
  )

  const handleClose = React.useCallback(() => {
    menuRef.current?.classList.add('leaving')
    setTimeout(onClose, 200)
  }, [onClose])

  return (
    <Backdrop onClick={handleClose}>
      <Container
        onClick={(e) => e.stopPropagation()}
        ref={menuRef}
        className="bg-zinc-800 border-l border-zinc-700/50 shadow-2xl"
      >
        <button
          className="p-3 absolute top-6 right-2 rounded-full hover:bg-zinc-700/50 transition"
          onClick={handleClose}
        >
          <X size={18} className="text-gray-400" />
        </button>

        <span className="space-y-2">
          <p className="font-medium text-2xl text-white">Menu</p>
          <p className="text-gray-400">Olá, {userName}</p>
        </span>

        <ul className="my-16 space-y-4">
          {menus.map((menu) =>
            menu.isProtected ? (
              <Can key={menu.title} user={user}>
                <LinkButton key={menu.title} {...menu} />
              </Can>
            ) : (
              <LinkButton key={menu.title} {...menu} />
            )
          )}
        </ul>

        {!validateUserPermission(user) ? (
          <div
            className="bg-brand-700/10 rounded-lg py-5 px-4 space-y-2 my-6 select-none cursor-pointer outline-none border border-transparent hover:border-brand-700 focus-within:border-brand-700 transition"
            onKeyDown={(e) => clickByKey(e, onHelpClick)}
            onClick={onHelpClick}
            tabIndex={0}
          >
            <span className="flex items-center space-x-2 text-white">
              <Headphones />
              <p className="font-semibold text-base">Precisando de ajuda?</p>
            </span>

            <p className="text-sm text-white">
              Entre em contato conosco e tire suas dúvidas.
            </p>
          </div>
        ) : null}

        <Can user={user}>
          <span className="space-y-4">
            <p className="font-semibold text-base text-white">
              Novas matrículas
            </p>
            <p className="text-gray-200 text-sm">
              Veja os alunos que se cadastraram em um curso e matricule-os agora
              mesmo:
            </p>
            <button
              onClick={() => push('/admin/enrollments')}
              className="w-full bg-brand-700 py-4 px-4 rounded-lg font-medium text-zinc-800"
            >
              Ir para matrículas
            </button>
          </span>
        </Can>
      </Container>
    </Backdrop>
  )
}

export default MenuContent
