import React from 'react'

import { withProtectedRoute } from '../../../hocs/withProtectedRoute.hoc'
import { MenuProfile } from '../../../components/MenuProfile'
import { Sidebar } from '../../../components/Sidebar'

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-zinc-100">
      <Sidebar menuActived="Dashboard" />

      <div className="w-full">
        <div className="flex px-8 h-20 w-full items-center justify-between shadow bg-white">
          <span className="text-2xl font-bold">Dashboard</span>
          <MenuProfile />
        </div>

        <div className="flex flex-col p-4 mt-4 gap-4">DASHBOARD</div>
      </div>
    </div>
  )
}

export default withProtectedRoute(Dashboard)
