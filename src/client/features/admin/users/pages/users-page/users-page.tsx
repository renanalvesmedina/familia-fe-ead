import React from 'react'
import toast from 'react-hot-toast'

import { Plus, RefreshCw } from 'lucide-react'
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
      <div className="flex items-center justify-between sticky top-0 pt-10 pb-6 px-2 bg-white dark:bg-zinc-900 z-40">
        <span className="flex items-center gap-2">
          <p className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-white">
            Gestão de usuários
          </p>
          {isLoading || isRefetching || isFetching ? (
            <Loader className="text-brand-600" />
          ) : null}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="flex justify-center gap-1 text-white bg-zinc-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-zinc-700/90 active:bg-zinc-700/90 transition"
          >
            <RefreshCw size={20} />
            <span className="max-lg:hidden">Refresh</span>
          </button>

          <button
            onClick={() => push('/admin/users/create')}
            className="flex justify-center gap-1 text-zinc-800 bg-brand-700 font-medium rounded-lg text-sm p-4 text-center hover:bg-brand-700/90 active:bg-brand-700/90 transition"
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
