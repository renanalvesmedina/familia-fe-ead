import React from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { Headphones, IconProps, X } from 'phosphor-react'
import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { validateUserPermission } from '@validators/validatePermission'
import { useAuthContext } from '@contexts/auth.context'
import { ThemeSwitcher } from '@components/theme-switcher'
import { useBreakpoint } from '@hooks/use-breakpoints'
import { clickByKey } from '@utils'
import { Modal } from '@components/modal'
import { Can } from '@core/can'
import { api } from '@services/api'

import { whatsappSuportLink } from '@config'
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

  const Component = menu?.href ? Link : 'button'

  return (
    <li key={menu.title}>
      <Component
        href={menu?.href!}
        onClick={() => !menu.href && handleLogout()}
        className={twMerge(
          'flex items-center justify-start gap-4 w-full rounded-full py-2 px-3 border border-transparent transition outline-none text-zinc-800 dark:text-white',
          'hover:text-brand-700 dark:hover:bg-brand-700/10 dark:hover:border-brand-700/60',
          'active:text-brand-700 dark:active:bg-brand-700/10 dark:active:border-brand-700/60',
          'focus-within:text-brand-700 dark:focus-within:bg-brand-700/10 dark:focus-within:border-brand-700/60'
        )}
      >
        <Icon size={24} />
        <p>{menu.title}</p>
      </Component>
    </li>
  )
}

interface MenuContentProps {
  onClose?: () => void
  showProfilePicture?: boolean
}

const MenuContent: React.FC<MenuContentProps> = ({
  onClose,
  showProfilePicture = false,
}) => {
  const queryClient = useQueryClient()

  const [showModel, setShowModal] = React.useState(false)
  const [file, setFile] = React.useState<File | null>()

  const { user, userName } = useAuthContext()
  const { push } = useRouter()
  const { md } = useBreakpoint()

  const userProfilePicture = React.useMemo(
    () =>
      user?.profilePicture == undefined
        ? '/images/avatarDefault.png'
        : user?.profilePicture,
    [user?.profilePicture]
  )

  const onHelpClick = React.useCallback(
    () => window.open(whatsappSuportLink, '_blank', 'noreferrer'),
    []
  )

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.item(0))
  }

  async function handleSendPhoto(event: React.FormEvent) {
    const toastId = toast.loading('Carregando...')
    event.preventDefault()

    if (!file) {
      toast.error('Selecione uma imagem!')
      return
    }

    await api
      .put(
        '/v1/Me/profile/avatar',
        { image: file },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      .then(() => {
        toast.dismiss(toastId)
        queryClient.invalidateQueries(['me'])
      })
      .catch((err) => {
        toast.dismiss(toastId)
        toast.error(err.response.data.errors[0].message)
      })
  }

  return (
    <React.Fragment>
      {onClose ? (
        <button
          className="p-3 absolute top-6 right-2 rounded-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
          onClick={onClose}
        >
          <X size={18} className="text-gray-400" />
        </button>
      ) : null}

      <div>
        {showProfilePicture ? (
          <div className="flex flex-col items-center justify-center p-4">
            <label
              onClick={() => setShowModal(true)}
              className="cursor-pointer p-2 text-[8px] text-zinc-900 transition hover:opacity-90"
            >
              <img
                src={userProfilePicture}
                alt=""
                title="Alterar Imagem do Perfil"
                className="w-40 h-40 rounded-full object-cover origin-center"
              />
            </label>

            <p className="text-zinc-800 dark:text-white font-medium">
              {userName}
            </p>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
        ) : (
          <span className="space-y-2">
            <p className="font-medium text-2xl text-zinc-800 dark:text-white">
              Menu
            </p>
            <p className="text-gray-400">Olá, {userName}</p>
          </span>
        )}

        {(showProfilePicture && md) || !showProfilePicture ? (
          <React.Fragment>
            <ul className="my-16 space-y-4">
              {menus.map((menu) =>
                menu.isProtected ? (
                  <Can key={menu.title}>
                    <LinkButton key={menu.title} {...menu} />
                  </Can>
                ) : (
                  <LinkButton key={menu.title} {...menu} />
                )
              )}
            </ul>

            {!validateUserPermission() ? (
              <div
                className="bg-brand-700/20 dark:bg-brand-700/10 rounded-lg py-5 px-4 space-y-2 my-6 select-none cursor-pointer outline-none border border-transparent hover:border-brand-700 focus-within:border-brand-700 transition"
                onKeyDown={(e) => clickByKey(e, onHelpClick)}
                onClick={onHelpClick}
                tabIndex={0}
              >
                <span className="flex items-center space-x-2 text-zinc-800 dark:text-white">
                  <Headphones />
                  <p className="font-semibold text-base">
                    Precisando de ajuda?
                  </p>
                </span>

                <p className="text-sm text-zinc-800 dark:text-white">
                  Entre em contato conosco e tire suas dúvidas.
                </p>
              </div>
            ) : null}

            <Can>
              <span className="space-y-4">
                <p className="font-semibold text-base text-zinc-800 dark:text-white">
                  Novas matrículas
                </p>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Veja os alunos que se cadastraram em um curso e matricule-os
                  agora mesmo:
                </p>
                <button
                  onClick={() => push('/admin/users')}
                  className="w-full bg-brand-700 py-4 px-4 rounded-lg font-medium text-zinc-800"
                >
                  Ir para matrículas
                </button>
              </span>
            </Can>
          </React.Fragment>
        ) : null}
      </div>

      {(showProfilePicture && md) || !showProfilePicture ? (
        <div className="mt-16">
          <ThemeSwitcher />
        </div>
      ) : null}

      <Modal isVisible={showModel} onClose={() => setShowModal(false)}>
        <div className="py-6 px-6 lg:px-8 text-left w-full">
          <h3 className="mb-4 text-xl font-medium text-zinc-800 dark:text-white">
            Alterar foto de perfil:
          </h3>
          <form className="space-y-6" onSubmit={handleSendPhoto}>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-48 h-48 rounded-full border-4 items-center justify-center border-dashed dark:border-zinc-700/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700/30 hover:border-gray-300 dark:hover:border-zinc-700/60 transition">
                {!file && (
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Selecione uma foto
                    </p>
                  </div>
                )}

                {file && (
                  <img
                    src={file.name ? URL.createObjectURL(file) : undefined}
                    alt=""
                    className={twMerge(
                      'w-48 h-48 object-cover p-2 rounded-full',
                      file ? 'opacity-1' : 'opacity-0'
                    )}
                  />
                )}

                <input
                  type="file"
                  onChange={handleImage}
                  className="opacity-0"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-zinc-800 bg-brand-700 hover:bg-brand-700/90 focus:ring-4 focus:outline-none focus:ring-brand-500 font-medium rounded-lg text-sm p-4 text-center transition"
            >
              Atualizar
            </button>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default MenuContent
