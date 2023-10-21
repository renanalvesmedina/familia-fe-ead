import React from 'react'

import { MenuContent } from '@components/menu/menu-content'
import { Header } from '@components/header'

interface UserLayoutProps {
  children: React.ReactNode
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => (
  <div className="w-full min-h-[100vh] bg-white dark:bg-zinc-900">
    <Header />

    <div className="grid grid-cols-6 gap-10 py-14 max-w-[1180px] w-full mx-auto px-6">
      <div className="col-start-1 col-end-7 md:col-end-3 p-6 md:sticky md:top-16 h-fit rounded-lg shadow-lg bg-white dark:bg-zinc-800">
        <MenuContent showProfilePicture />
      </div>

      <div className="col-start-1 md:col-start-3 col-end-7 h-fit rounded-lg shadow-lg bg-white dark:bg-zinc-800">
        {children}
      </div>
    </div>
  </div>
)

export default UserLayout
