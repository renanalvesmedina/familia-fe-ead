import React from 'react'

import { useRouter } from 'next/router'

import { clickByKey } from '@utils'

import { Menu } from '../menu'

const Header: React.FC = () => {
  const { push } = useRouter()

  const onClick = React.useCallback(() => push('/'), [push])

  return (
    <header className="flex justify-center items-center w-full border-b border-zinc-700 border-opacity-50">
      <div className="flex items-center max-w-[1180px] w-full h-full gap-10 px-6 py-4">
        <div
          className="min-h-[64px] min-w-[164px] items-center flex cursor-pointer"
          onClick={onClick}
          tabIndex={0}
          onKeyDown={(e) => clickByKey(e, onClick)}
        >
          <img
            className="h-12"
            src="/images/logo_white.png"
            alt="Igreja Familia"
          />
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
