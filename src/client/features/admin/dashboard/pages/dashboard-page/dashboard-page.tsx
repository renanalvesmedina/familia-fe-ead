import React from 'react'
import dynamic from 'next/dynamic'

import { TeacherIllustration } from '@assets/illustrations/teacher-illustration'
import { useThemeSwitcher } from '@contexts/theme.context'
import { useAuthContext } from '@contexts/auth.context'
import { getFirstName } from '@utils'
import { AdminLayout } from '@layouts/admin-layout'
import { BannerCard } from '@components/banner-card'

import {
  welcolmeAdminText,
  quikAccess,
  options,
  series,
} from './dashboard-page.constants'

import { QuikAccessCard } from '../../components'
import { ScheduleCard } from '../../components/schedule-card'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const DashboardPage: React.FC = () => {
  const { theme } = useThemeSwitcher()
  const { user } = useAuthContext()

  return (
    <AdminLayout>
      <div className="space-y-14 w-full pb-28">
        <BannerCard
          title={`Olá, ${getFirstName(user?.fullName)}`}
          description={welcolmeAdminText}
          illustration={<TeacherIllustration />}
          colorScheme="indigo"
          rounded={true}
        />

        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Acessos rápidos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quikAccess.map((item) => (
              <QuikAccessCard
                key={item.title}
                title={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Agenda
            </p>

            <div className="space-y-6">
              <ScheduleCard
                title="Prova final"
                date="2023-10-02"
                description={`Comprometidos com a membresia\n\n Turma 03`}
                highlight
              />

              <ScheduleCard
                title="Encerramento de turma"
                date="2023-10-02"
                description={`Comprometidos com a membresia\n\n Turma 03`}
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Novas matrículas
            </p>

            <div className="bg-white border border-zinc-700/10 dark:bg-zinc-800 px-4 py-6 rounded-lg">
              <Chart
                options={options(theme === 'dark')}
                series={series}
                type="area"
                height={190}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default DashboardPage
