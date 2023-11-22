import React from 'react'

import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { NextSeo } from 'next-seo'

import {
  UserDetailsProvider,
  useUserDetails,
} from '@contexts/user-details.context'

import { useThemeSwitcher } from '@contexts/theme.context'
import { useBreakpoint } from '@hooks/use-breakpoints'
import { FamiliaIcon } from '@assets/icons/familia-icon'
import { Navigation } from '@components/siderbar/navigation'
import { clickByKey } from '@utils'
import { Siderbar } from '@components/siderbar'
import { Menu } from '@components/menu'

interface AdminLayoutProps {
  children: React.ReactNode
  renderOnRight?: React.ReactNode
}

const Layout: React.FC<AdminLayoutProps> = ({ children, renderOnRight }) => {
  const { openUserDetails } = useUserDetails()
  const { theme } = useThemeSwitcher()
  const { push } = useRouter()
  const { lg } = useBreakpoint()

  const logoUrl =
    theme === 'dark' ? '/images/logo_white.png' : '/images/logo.png'

  const onClick = React.useCallback(() => push('/'), [push])

  return (
    <div className="flex w-full h-[100vh] bg-white dark:bg-zinc-900 lg:overflow-hidden">
      <div
        className={twMerge(
          'w-full space-y-8 transition-all',
          openUserDetails ? 'md:pr-[540px]' : 'pr-0'
        )}
      >
        <div className="flex px-6 py-6 w-full items-center justify-between max-w-[1480px] mx-auto">
          <div className="flex items-center gap-4 relative">
            {!lg ? <Siderbar /> : null}

            {!lg ? (
              <div
                className="cursor-pointer"
                onClick={onClick}
                tabIndex={0}
                onKeyDown={(e) => clickByKey(e, onClick)}
              >
                <FamiliaIcon fill={theme === 'light' ? 'black' : 'white'} />
              </div>
            ) : (
              <div
                className="min-h-[64px] min-w-[164px] items-center flex cursor-pointer"
                onClick={onClick}
                tabIndex={0}
                onKeyDown={(e) => clickByKey(e, onClick)}
              >
                <img className="h-12" src={logoUrl} alt="Igreja Familia" />
              </div>
            )}
          </div>

          <Menu />
        </div>

        <div className="flex px-6 gap-36 max-w-[1480px] mx-auto w-full bg-white dark:bg-zinc-900">
          {lg ? <Navigation /> : null}

          <div className="w-full">{children}</div>
        </div>
      </div>

      {renderOnRight}
    </div>
  )
}

const AdminLayout: React.FC<AdminLayoutProps> = (props) => (
  <UserDetailsProvider>
    <NextSeo title="Dashboard" />
    <Layout {...props} />
  </UserDetailsProvider>
)

export default AdminLayout
