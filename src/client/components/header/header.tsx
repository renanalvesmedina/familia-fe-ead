import React from 'react'
import LOGO from '@assets/images/logo_white.png'

import { useNavigate } from 'react-router-dom'

import { clickByKey } from '@utils'

import { Menu } from '../menu'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const onClick = React.useCallback(() => navigate('/'), [navigate])

  return (
    <header className="flex justify-center items-center w-full border-b border-zinc-700 border-opacity-50">
      <div className="flex items-center max-w-[1180px] w-full h-full gap-10 px-6 py-4">
        <div
          className="min-h-[64px] min-w-[164px] items-center flex cursor-pointer"
          onClick={onClick}
          tabIndex={0}
          onKeyDown={(e) => clickByKey(e, onClick)}
        >
          <img className="h-12" src={LOGO} alt="Igreja Familia" />
        </div>

        <div className="flex items-center pt-4 pr-2 md:gap-5 w-full h-full"></div>

        <div className="flex justify-end items-center gap-5 md:min-w-[380px]">
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
