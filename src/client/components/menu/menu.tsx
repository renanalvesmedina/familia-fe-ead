import React from 'react'

import { getAvatarLetters } from '@utils'
import { useAuthContext } from '@contexts/auth.context'

import { Backdrop, Container } from './menu-content/menu-content.styles'
import { MenuContent } from './menu-content'

import * as Avatar from '@radix-ui/react-avatar'

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false)

  const menuRef: React.LegacyRef<HTMLDivElement> = React.useRef(null)

  const { user } = useAuthContext()

  const onClose = React.useCallback(() => setOpenMenu(false), [])

  const handleClose = React.useCallback(() => {
    menuRef.current?.classList.add('leaving')
    setTimeout(onClose, 200)
  }, [onClose])

  return (
    <React.Fragment>
      <div className="flex items-center">
        <div className="mr-4 text-right max-lg:hidden">
          <p className="font-medium text-zinc-800 dark:text-white">
            {user?.fullName}
          </p>
          <p className="text-gray-400 text-sm">{user?.email}</p>
        </div>

        <button
          onClick={() => setOpenMenu((old) => !old)}
          className="rounded-full"
        >
          <Avatar.Root className="flex items-center justify-center overflow-hidden w-14 h-14 rounded-full">
            <Avatar.Image
              className="w-full h-full object-cover border border-brand-700 rounded-full"
              src={user?.profilePicture}
            />
            <Avatar.Fallback
              className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-900 text-brand-700 font-medium text-base"
              delayMs={600}
            >
              {getAvatarLetters(user?.fullName == null ? '' : user.fullName)}
            </Avatar.Fallback>
          </Avatar.Root>
        </button>
      </div>

      {openMenu ? (
        <Backdrop onClick={handleClose}>
          <Container
            onClick={(e) => e.stopPropagation()}
            ref={menuRef}
            className="bg-white dark:bg-zinc-800 border-l border-zinc-700/10 dark:border-zinc-700/50 shadow-2xl dark:shadow-black shadow-black/10 flex flex-col justify-between"
          >
            <MenuContent onClose={onClose} />
          </Container>
        </Backdrop>
      ) : null}
    </React.Fragment>
  )
}

export default Menu
