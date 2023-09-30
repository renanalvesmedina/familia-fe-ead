import React from 'react'

import { getAvatarLetters } from '@services/utils'
import { useAuthContext } from '@contexts/auth.context'
import { MenuContent } from './menu-content'

import * as Avatar from '@radix-ui/react-avatar'

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false)

  const { user, userName, profilePicture } = useAuthContext()

  const onClose = React.useCallback(() => setOpenMenu(false), [])

  return (
    <React.Fragment>
      <div className="flex items-center">
        <div className="mr-4 text-right max-lg:hidden">
          <p className="font-medium text-white">{userName}</p>
          <p className="text-gray-400 text-sm">{user?.email}</p>
        </div>

        <button
          onClick={() => setOpenMenu((old) => !old)}
          className="rounded-full"
        >
          <Avatar.Root className="flex items-center justify-center overflow-hidden w-14 h-14 rounded-full">
            <Avatar.Image
              className="w-full h-full object-cover border border-brand-700 rounded-full"
              src={profilePicture}
            />
            <Avatar.Fallback
              className="flex items-center justify-center w-full h-full bg-gray-900 text-brand-700 font-medium text-base"
              delayMs={600}
            >
              {getAvatarLetters(userName == null ? '' : userName)}
            </Avatar.Fallback>
          </Avatar.Root>
        </button>
      </div>

      {openMenu ? <MenuContent onClose={onClose} /> : null}
    </React.Fragment>
  )
}

export default Menu
