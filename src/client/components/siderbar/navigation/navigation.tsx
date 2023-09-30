import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { navigationMenus } from './navigation.constants'
import { twMerge } from 'tailwind-merge'

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <ul className="flex flex-col space-y-14 sticky top-0 pt-10 h-fit">
      {navigationMenus.map(({ title, links }) => (
        <li key={title} className="space-y-8">
          <p className="text-gray-400 uppercase text-xs font-semibold">
            {title}
          </p>

          <ul>
            {links.map(({ icon: Icon, ...menu }) => (
              <li key={menu.title}>
                <button
                  onClick={() => navigate(menu.route)}
                  className={twMerge(
                    'text-zinc-200 my-4 flex items-center justify-center gap-x-4 cursor-pointer rounded-lg hover:text-brand-700 active:text-brand-700',
                    pathname.startsWith(menu.route)
                      ? 'text-brand-700'
                      : 'text-white'
                  )}
                >
                  <span>
                    <Icon size={24} />
                  </span>

                  <span className={'text-base font-medium flex-1'}>
                    {menu.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
