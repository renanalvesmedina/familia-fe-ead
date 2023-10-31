import React from 'react'
import Image from 'next/image'

import { useQueryClient } from 'react-query'
import { twMerge } from 'tailwind-merge'

import { useUserDetails } from '@contexts/user-details.context'
import { useBreakpoint } from '@hooks/use-breakpoints'
import { EditUserModel } from '@models/EditUserModel'
import { UsersModel } from '@models/UsersModel'
import { clickByKey } from '@utils'
import { api } from '@services/api'

interface UsersTableProps {
  users?: UsersModel[]
  isLoading?: boolean
}

const UsersTable: React.FC<UsersTableProps> = ({ isLoading, users }) => {
  const { xl } = useBreakpoint()
  const { onOpenUserDetails, userId: selectedUserId } = useUserDetails()

  const queryClient = useQueryClient()

  const handlePrefetchUser = React.useCallback(
    async (userId?: string) =>
      queryClient.prefetchQuery(
        ['user', userId],
        async () =>
          api
            .get<EditUserModel>(`/v1/User/details?UserId=${userId}`)
            .then((response) => response.data),
        {
          staleTime: 1000 * 60 * 10, // 10 minutes
        }
      ),
    [queryClient]
  )

  if (isLoading)
    return (
      <div className="bg-zinc-700/30 animate-pulse h-[60vh] w-full rounded-lg" />
    )

  return (
    <div className="w-full relative overflow-y-auto h-[60vh] rounded-lg shadow-xl scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-rounded-lg scrollbar-track-gray-500/50 dark:scrollbar-track-zinc-700/50">
      <table className="table table-auto w-full relative">
        <thead className="border-b border-zinc-700/10 dark:border-zinc-700/40 border-opacity-50 w-full">
          <tr className="w-full">
            <th className="bg-white dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
              Nome
            </th>
            {xl ? (
              <th className="bg-white dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
                Email
              </th>
            ) : null}
            <th className="bg-white dark:bg-zinc-800 text-gray-500 text-xs tracking-wider sticky top-0 py-6 px-8">
              Perfil
            </th>
            <th className="bg-white dark:bg-zinc-800 text-sm sticky top-0 py-6 px-8"></th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => {
            const isAdmin = user.profile?.includes('Admin')

            const userProfileUri = !user.photoUri
              ? '/images/avatarDefault.png'
              : user?.photoUri

            const onRowClick = () => onOpenUserDetails(user.userId)

            return (
              <tr
                key={user.userId}
                onClick={onRowClick}
                onMouseEnter={() => handlePrefetchUser(user.userId)}
                tabIndex={0}
                onKeyDown={(e) => clickByKey(e, onRowClick)}
                data-active={user.userId === selectedUserId}
                className="select-none bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700/20 data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-zinc-700/20 transition-colors cursor-pointer outline-none focus-within:bg-gray-100 dark:focus-within:bg-zinc-700/30"
              >
                <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 border-opacity-50 py-6 px-8">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-8 h-8 relative">
                        <Image
                          alt={user.fullName!}
                          src={userProfileUri}
                          fill
                          className="absolute w-full h-full"
                        />
                      </div>
                    </div>
                    <span>
                      <p className="font-medium text-base text-zinc-800 dark:text-white">
                        {user.fullName}
                      </p>
                      {!xl ? (
                        <p className="text-sm text-gray-500 font-light">
                          {user?.email}
                        </p>
                      ) : null}
                    </span>
                  </div>
                </td>
                {xl ? (
                  <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 font-light text-sm text-gray-500 py-6 px-8">
                    {user?.email}
                  </td>
                ) : null}
                <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 font-medium text-xs w-fit uppercase py-6 px-8">
                  <div
                    className={twMerge(
                      'py-1 px-3 rounded-full border w-full text-center',
                      isAdmin
                        ? 'text-zinc-800 dark:text-white bg-brand-700 dark:bg-brand-700/20 border-brand-700/50'
                        : 'text-white bg-zinc-700 dark:bg-zinc-700/20 border-zinc-700/70'
                    )}
                  >
                    {isAdmin ? 'Administrador' : 'Estudante'}
                  </div>
                </td>
                <td className="bg-[inherit] border-zinc-700/10 dark:border-zinc-700/40 py-6 px-8 w-full"></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
