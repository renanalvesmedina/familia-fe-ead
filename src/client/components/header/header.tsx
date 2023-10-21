/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { useRouter } from 'next/router'

import { useThemeSwitcher } from '@contexts/theme.context'
import { clickByKey } from '@utils'
import { Container } from '@core/container'

import { Menu } from '../menu'

const Header: React.FC = () => {
  const { theme } = useThemeSwitcher()
  const { push } = useRouter()

  const logoUrl = React.useMemo(
    () => (theme === 'dark' ? '/images/logo_white.png' : '/images/logo.png'),
    [theme]
  )

  const onClick = React.useCallback(() => push('/'), [push])

  return (
    <header
      className="
        flex justify-center items-center w-full
        border-b border-zinc-700 border-opacity-10 dark:border-opacity-50
      "
    >
      <Container className="flex items-center h-full gap-10 px-6 py-4">
        <div
          className="min-h-[64px] min-w-[164px] items-center flex cursor-pointer"
          onClick={onClick}
          tabIndex={0}
          onKeyDown={(e) => clickByKey(e, onClick)}
        >
          <img className="h-12" src={logoUrl} alt="Igreja Familia" />
        </div>

        <div className="flex items-center pt-4 pr-2 md:gap-5 w-full h-full"></div>

        <div className="flex justify-end items-center gap-5 md:min-w-[380px]">
          <Menu />
        </div>
      </Container>
    </header>
  )
}

export default Header
