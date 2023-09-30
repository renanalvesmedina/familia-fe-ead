import React from 'react'
import Chart from 'react-apexcharts'
import Calendar from 'react-calendar'

import { TeacherIllustration } from '@assets/illustrations/teacher-illustration'
import { useAuthContext } from '@contexts/auth.context'
import { AdminLayout } from '@layouts/admin-layout'
import { BannerCard } from '@components/banner-card'

import { options, quikAccess, series } from './dashboard-page.constants'
import { QuikAccessCard } from '../../components'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const DashboardPage: React.FC = () => {
  const { user } = useAuthContext()

  const [value, onChange] = React.useState<Value>(new Date())

  return (
    <AdminLayout>
      <div className="space-y-14 w-full pb-32">
        <BannerCard
          title={`Olá, ${user?.fullName}`}
          description="Seja bem-vindo (a) ao painel administrativo do nosso portal de ensino."
          illustration={<TeacherIllustration />}
          colorScheme="indigo"
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
          <div className="space-y-6 col-start-1 col-end-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Agenda
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex-1 border border-zinc-700/50 bg-indigo-900 px-6 py-8 rounded-lg gap-6 flex items-center">
                  <span className="text-4xl font-bold text-white">52</span>
                  <div className="h-full w-0.5 bg-white">.</div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-white">Prova final</p>
                      <time className="text-sm text-gray-400">28/set</time>
                    </div>
                    <p className="text-sm text-white">
                      Comprometidos com a membresia
                      <br />
                      Turma 03
                    </p>
                  </div>
                </div>

                <div className="flex-1 border border-zinc-700/50 bg-aux-400 px-6 py-8 rounded-lg gap-6 flex items-center">
                  <span className="text-4xl font-bold text-white">52</span>
                  <div className="h-full w-0.5 bg-white">.</div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-white">Prova final</p>
                      <time className="text-sm text-gray-400">28/set</time>
                    </div>
                    <p className="text-sm text-white">
                      Comprometidos com a membresia
                      <br />
                      Turma 03
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Calendar
                  onChange={onChange}
                  value={value}
                  className="bg-zinc-800 border-none shadow-2xl rounded-lg w-full text-white py-3 px-4"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Novas matrículas
            </p>

            <div className="bg-zinc-800 px-4 py-6 rounded-lg">
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Taxa de aprovação
            </p>

            <div className="bg-zinc-800 px-4 py-6 rounded-lg">
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default DashboardPage
