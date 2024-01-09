import React from 'react'
import toast from 'react-hot-toast'

import { Filter, Plus, RefreshCw } from 'lucide-react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { filterUsers, filterUsersByRoles, sanitizeSearchTerms } from '@utils'
import { AdminLayout } from '@layouts/admin-layout'
import { UsersModel } from '@models/UsersModel'
import { Loader } from '@core/loader'
import { Field } from '@components/input'
import { api } from '@services/api'

import { UserDetails, UsersData } from '../../components'

const UsersPage: React.FC = () => {
  const { push } = useRouter()

  const [profileSelected, setProfileSelected] = React.useState<
    'Student' | 'Admin' | null
  >(null)

  const [filteredUsers, setFilteredUsers] = React.useState<UsersModel[] | null>(
    null
  )

  const {
    data: users,
    isLoading,
    refetch,
    isRefetching,
    isFetching,
  } = useQuery(
    ['users'],
    () =>
      api
        .get<UsersModel[]>('/v1/User?start=0&limit=9999')
        .then((response) => response.data),
    {
      staleTime: 1000 * 60 * 1, // 1 minutes
      onError: (error: any) =>
        toast.error(error.response.data.errors?.[0].message),
    }
  )

  const onFilterUsers = (term: string) => {
    const searchTerms = sanitizeSearchTerms(term)
    const filterUsersBySearch = filterUsers(searchTerms, users!)

    if (searchTerms) {
      setFilteredUsers(filterUsersBySearch)
    } else {
      setFilteredUsers(null)
    }
  }

  const onFilterUsersByRoles = (role: 'Student' | 'Admin') => {
    const filterArticlesBySearch = filterUsersByRoles(role, users!)

    setFilteredUsers(filterArticlesBySearch)
  }

  React.useEffect(() => {
    if (!profileSelected) {
      setFilteredUsers(null)
    } else {
      onFilterUsersByRoles(profileSelected)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileSelected])

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

        <div className="flex items-center gap-4">
          <button
            onClick={() => refetch()}
            className="flex justify-center gap-1 text-white bg-zinc-800 font-medium rounded-lg text-sm p-4 text-center hover:bg-zinc-800/90 active:bg-zinc-800/90 transition"
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

      <div className="flex items-center justify-between mb-6 px-2 gap-4">
        <Field
          name="searchUsers"
          variant="filled"
          placeholder="Pesquisar..."
          className="py-4"
          containerClassName="w-full"
          onChange={(e) => onFilterUsers(e as never as string)}
        />

        <button
          type="button"
          className="flex justify-center gap-1 text-white bg-zinc-800 font-medium rounded-lg text-sm p-4 text-center hover:bg-zinc-800/90 active:bg-zinc-800/90 transition"
          onClick={() => {
            if (!profileSelected) setProfileSelected('Student')
            if (profileSelected === 'Student') setProfileSelected('Admin')
            if (profileSelected === 'Admin') setProfileSelected(null)
          }}
        >
          <Filter size={20} />
          <span className="max-lg:hidden whitespace-nowrap">
            Filtrar por perfis
          </span>
        </button>
      </div>

      <div className="mb-4 text-zinc-500">
        <p>
          Total de{' '}
          <strong className="text-zinc-800 dark:text-white">
            {users?.length}
          </strong>{' '}
          usuários
        </p>
      </div>

      <UsersData users={filteredUsers || users || []} isLoading={isLoading} />
    </AdminLayout>
  )
}

export default UsersPage
