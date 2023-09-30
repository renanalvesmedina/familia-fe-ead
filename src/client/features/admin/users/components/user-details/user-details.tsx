import React from 'react'
import toast from 'react-hot-toast'
import avatar from '@assets/images/avatarDefault.png'

import { useQuery } from 'react-query'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import { X } from 'phosphor-react'

import { calculateProgressPercentage } from '@utils'
import { UserHistoryModel } from '@models/UserHistoryModel'
import { PhoneToWhatsapp } from '@core/phone-to-whatsapp'
import { CopyToClipboard } from '@core/copy-to-clipboard'
import { useUserDetails } from '@contexts/user-details.context'
import { EditUserModel } from '@models/EditUserModel'
import { ProgressBar } from '@components/progress-bar'
import { api } from '@services/api'

const putUser = async (userId?: string) =>
  api
    .get<EditUserModel>(`/v1/User/details?UserId=${userId}`)
    .then((res) => res.data)

const getUserHistory = async (userId?: string) =>
  api
    .get<UserHistoryModel[]>(`/v1/student/history?studentId=${userId}`)
    .then((res) => res.data)

const Component: React.FC = () => {
  const { userId, onCloseUserDetails, openUserDetails } = useUserDetails()

  const { data: user } = useQuery(['user', userId], () => putUser(userId), {
    staleTime: 1000 * 60 * 1, // 1 minutes
    onError: (err: any) => {
      toast.error(err.response.data.errors[0].message)
    },
  })

  const { data: history } = useQuery(
    ['user-history', userId],
    () => getUserHistory(userId),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (err: any) => {
        toast.error(err.response.data.errors[0].message)
      },
    }
  )

  const getProgressColor = React.useCallback((percentage: number) => {
    if (percentage <= 25) return 'text-red-500 bg-red-500/5 border-red-500'

    if (percentage > 25 && percentage <= 75)
      return 'text-brand-700 bg-brand-700/5 border-brand-700'

    if (percentage > 75)
      return 'text-emerald-500 bg-emerald-500/5 border-emerald-500'
  }, [])

  return (
    <div
      className={twMerge(
        'overflow-y-auto z-50 space-y-16 bg-zinc-900 fixed top-0 right-0 bottom-0 md:max-w-[540px] transition-all pb-20 px-12 border-l border-zinc-700/60 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-700/50 scrollbar-track-rounded-lg scrollbar-track-zinc-700/30',
        openUserDetails ? 'translate-x-0 w-full' : 'translate-x-[100%] w-0'
      )}
    >
      {openUserDetails ? (
        <React.Fragment>
          <div className="flex items-center justify-between sticky top-0 left-12 right-12 bg-zinc-900 pt-8 pb-2">
            <p className="text-white font-medium text-xl">Perfil do usuário</p>

            <button
              type="button"
              onClick={onCloseUserDetails}
              className="text-white p-3 rounded-full hover:bg-aux-400/50 active:bg-aux-400/50 transition-all"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="h-36 w-36 rounded-full bg-zinc-700">
              <img
                src={user?.photoUri == undefined ? avatar : user?.photoUri}
                alt=""
                className="rounded-full w-full h-full object-cover object-center border border-brand-700"
              />
            </div>

            <span className="flex items-center justify-center flex-col">
              <p className="text-white font-medium text-lg">{user?.fullName}</p>

              <p className="text-gray-400 text-sm">
                {user?.email ? <CopyToClipboard value={user?.email} /> : null}
              </p>
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Informações
            </p>

            <div className="w-full grid grid-cols-3 gap-6 col-start-2 col-end-6 bg-zinc-800 rounded-lg px-6 py-6 border border-zinc-700/50">
              <span className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm text-gray-400">Telefone:</p>
                <p className="text-white font-medium">
                  {user?.phone ? (
                    <PhoneToWhatsapp value={user.phone} iconPosition="right" />
                  ) : null}
                </p>
              </span>

              <span className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm text-gray-400">Sexo:</p>
                <p className="text-white font-medium">
                  {user?.gender === 'M' ? 'Masculino' : 'Feminino'}
                </p>
              </span>

              <span className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm text-gray-400">Perfil:</p>
                <p className="text-white font-medium">
                  {user?.profile?.includes('Admin')
                    ? 'Administrador'
                    : 'Estudante'}
                </p>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Cursos matriculados
            </p>

            <div className="space-y-8">
              {history?.[0]?.history?.slice(0, 1).map((his) => (
                <div
                  key={his.viewDate}
                  className="flex items-center justify-between gap-10 px-6 pt-6 pb-8 relative bg-zinc-800 rounded-lg border border-zinc-700/50"
                >
                  <div className="flex flex-col space-y-6 w-full">
                    <p className="text-white font-medium text-lg">
                      {his.course}
                    </p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">
                            Matriculado em:
                          </p>
                          <p className="text-sm text-white">
                            {format(new Date(his.viewDate), 'dd/MM/yyyy')}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">Progresso:</p>
                          <p className="text-sm text-white">
                            8 de 8 aulas concluídas
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">
                            Última aula assistida:
                          </p>
                          <p className="text-sm text-white">{his.class}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">Data:</p>
                          <p className="text-sm text-white">
                            {format(new Date(his.viewDate), 'dd/MM/yyyy')}
                          </p>
                        </div>

                        <span
                          className={twMerge(
                            'text-xs px-2 py-1 rounded-full w-fit border whitespace-nowrap',
                            getProgressColor(calculateProgressPercentage(7, 8))
                          )}
                        >
                          {calculateProgressPercentage(7, 8) + '%'} Concluído
                        </span>
                      </div>
                    </div>
                  </div>

                  <ProgressBar completed={7} total={8} />
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  )
}

const UserDetails: React.FC = () => {
  const { userId } = useUserDetails()

  return userId ? <Component /> : null
}

export default UserDetails
