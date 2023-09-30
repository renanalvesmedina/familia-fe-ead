import React from 'react'
import toast from 'react-hot-toast'

import { ArrowsClockwise, Plus } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { AdminLayout } from '@layouts/admin-layout'
import { UsersModel } from '@models/UsersModel'
import { Loader } from '@core/loader'
import { api } from '@services/api'

import { UserDetails, UsersData } from '../../components'

const UsersPage: React.FC = () => {
  const { push } = useRouter()

  const {
    data: users,
    isLoading,
    refetch,
    isRefetching,
    isFetching,
  } = useQuery(
    ['users'],
    () => api.get<UsersModel[]>('/v1/User').then((response) => response.data),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (error: any) =>
        toast.error(error.response.data.errors[0].message),
    }
  )

  return (
    <AdminLayout renderOnRight={<UserDetails />}>
      <div className="flex items-center justify-between sticky top-0 pt-10 pb-6 bg-zinc-900 z-40">
        <span className="flex items-center gap-2">
          <p className="text-xl md:text-2xl font-medium text-white">
            Gestão de usuários
          </p>
          {isLoading || isRefetching || isFetching ? (
            <Loader className="text-brand-600" />
          ) : null}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="flex justify-center gap-1 text-white bg-zinc-700/50 font-medium rounded-lg text-sm px-4 py-2 text-center shadow hover:bg-zinc-700 active:bg-zinc-700 transition"
          >
            <ArrowsClockwise size={20} />
            <span className="max-lg:hidden">Refresh</span>
          </button>

          <button
            onClick={() => push('/admin/users/create')}
            className="flex justify-center gap-1 text-white bg-indigo-700/60 font-medium rounded-lg text-sm px-4 py-2 text-center shadow hover:bg-indigo-700 active:bg-indigo-700 transition"
          >
            <Plus size={20} />
            <span className="max-lg:hidden">Novo Usuário</span>
          </button>
        </div>
      </div>

      <UsersData users={users || []} isLoading={isLoading} />
    </AdminLayout>
  )
}

export default UsersPage
