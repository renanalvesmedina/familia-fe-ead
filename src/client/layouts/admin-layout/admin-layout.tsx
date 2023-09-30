import React from 'react'
import LOGO from '@assets/images/logo_white.png'

import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import {
  UserDetailsProvider,
  useUserDetails,
} from '@contexts/user-details.context'

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
  const navigate = useNavigate()

  const { openUserDetails } = useUserDetails()
  const { lg } = useBreakpoint()

  const onClick = React.useCallback(() => navigate('/'), [navigate])

  return (
    <div className="flex w-full min-h-full bg-zinc-900">
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
                <FamiliaIcon fill="white" />
              </div>
            ) : (
              <div
                className="min-h-[64px] min-w-[164px] items-center flex cursor-pointer"
                onClick={onClick}
                tabIndex={0}
                onKeyDown={(e) => clickByKey(e, onClick)}
              >
                <img className="h-12" src={LOGO} alt="Igreja Familia" />
              </div>
            )}
          </div>

          <Menu />
        </div>

        <div className="flex px-6 gap-36 max-w-[1480px] mx-auto w-full">
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
    <Layout {...props} />
  </UserDetailsProvider>
)

export default AdminLayout
