import React from 'react'

import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { Pencil } from 'phosphor-react'

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
  const { push } = useRouter()

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

  return (
    <div className="w-full pb-20">
      {isLoading ? (
        <div className="flex flex-col w-full space-y-1">
          {[0, 1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-zinc-700/30 animate-pulse h-20 w-full rounded-sm"
            />
          ))}
        </div>
      ) : (
        <table className="table table-auto w-full relative">
          <thead className="border-b border-zinc-700 border-opacity-50 w-full">
            <tr className="w-full">
              <th className="bg-zinc-800 rounded-none text-gray-500 text-xs tracking-wider sticky top-24 py-6 px-8">
                Nome
              </th>
              {xl ? (
                <th className="bg-zinc-800 rounded-none text-gray-500 text-xs tracking-wider sticky top-24 py-6 px-8">
                  Email
                </th>
              ) : null}
              <th className="bg-zinc-800 rounded-none text-gray-500 text-xs tracking-wider sticky top-24 py-6 px-8">
                Perfil
              </th>
              <th className="bg-zinc-800 rounded-none text-sm sticky top-24 py-6 px-8"></th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => {
              const isAdmin = user.profile?.includes('Admin')

              const onRowClick = () => onOpenUserDetails(user.userId)

              const onEditClick = (
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                e.stopPropagation()
                push(`/admin/users/edit/${user.userId}`)
              }

              return (
                <tr
                  key={user.userId}
                  onClick={onRowClick}
                  onMouseEnter={() => handlePrefetchUser(user.userId)}
                  tabIndex={0}
                  onKeyDown={(e) => clickByKey(e, onRowClick)}
                  data-active={user.userId === selectedUserId}
                  className="select-none bg-zinc-800 hover:bg-zinc-700/20 data-[active=true]:bg-zinc-700/20 transition-colors cursor-pointer outline-none focus-within:bg-zinc-700/30"
                >
                  <td className="bg-[inherit] border-zinc-700 border-opacity-50 py-6 px-8">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-8 h-8">
                          <img
                            alt={user.fullName}
                            src={
                              user.photoUri == undefined
                                ? '/images/avatarDefault.png'
                                : user?.photoUri
                            }
                          />
                        </div>
                      </div>
                      <span>
                        <p className="font-medium text-base text-white">
                          {user.fullName}
                        </p>
                        {!xl ? (
                          <p className="text-sm text-gray-400 font-light">
                            {user?.email}
                          </p>
                        ) : null}
                      </span>
                    </div>
                  </td>
                  {xl ? (
                    <td className="bg-[inherit] border-zinc-700 border-opacity-50 font-light text-sm text-gray-400 py-6 px-8">
                      {user?.email}
                    </td>
                  ) : null}
                  <td className="bg-[inherit] border-zinc-700 border-opacity-50 font-medium text-xs text-white w-full uppercase py-6 px-8">
                    <span
                      className={twMerge(
                        ' py-1 px-2 rounded-full border',
                        isAdmin
                          ? 'bg-brand-700/20 border-brand-700/50'
                          : 'bg-indigo-700/20 border-indigo-700/70'
                      )}
                    >
                      {isAdmin ? 'Administrador' : 'Estudante'}
                    </span>
                  </td>
                  <td className="bg-[inherit] border-zinc-700 border-opacity-50 py-6 px-8">
                    <button
                      onClick={onEditClick}
                      className="bg-zinc-700/0 px-3 py-1 rounded-full text-sm text-brand-700 flex gap-2 items-center hover:bg-zinc-700/40 active:bg-zinc-700/40 transition"
                    >
                      Editar
                      <Pencil size={14} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default UsersTable
