import React from 'react'
import avatar from '@assets/images/avatarDefault.png'

import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Pencil } from 'phosphor-react'

import { useUserDetails } from '@contexts/user-details.context'
import { TruncateText } from '@core/truncate-text'
import { UsersModel } from '@models/UsersModel'

interface ListUsersProps {
  users?: UsersModel[]
  isLoading?: boolean
}

const CardUser: React.FC<{ user: UsersModel }> = ({ user }) => {
  const navigate = useNavigate()

  const { onOpenUserDetails } = useUserDetails()

  const isAdmin = user.profile?.includes('Admin')

  const onRowClick = React.useCallback(
    () => onOpenUserDetails(user.userId),
    [onOpenUserDetails, user.userId]
  )

  const onEditClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation()
      navigate(`/admin/users/edit/${user.userId}`)
    },
    [navigate, user.userId]
  )

  return (
    <div
      onClick={onRowClick}
      className="flex items-center space-x-3 bg-zinc-800 px-6 py-4 w-full rounded-lg cursor-pointer"
    >
      <div className="avatar">
        <div className="mask mask-circle w-8 h-8">
          <img
            alt={user.fullName}
            src={user.photoUri == undefined ? avatar : user?.photoUri}
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-3 flex-1">
        <div
          className={twMerge(
            'py-1 px-2 rounded-full border text-xs text-white',
            isAdmin
              ? 'bg-brand-700/20 border-brand-700/50'
              : 'bg-indigo-700/20 border-indigo-700/70'
          )}
        >
          {isAdmin ? 'Administrador' : 'Estudante'}
        </div>

        <div className="flex flex-col items-start">
          <TruncateText className="font-medium text-base text-white text-left">
            {user.fullName}
          </TruncateText>

          <TruncateText className="font-medium text-[10px] sm:text-sm text-gray-400 text-left">
            {user.email}
          </TruncateText>
        </div>
      </div>

      <button
        onClick={onEditClick}
        className="bg-zinc-700/0 p-3 rounded-full text-sm text-brand-600 flex gap-2 items-center hover:bg-zinc-700/40 active:bg-zinc-700/40 transition"
      >
        <Pencil size={16} />
      </button>
    </div>
  )
}

const ListUsers: React.FC<ListUsersProps> = ({ isLoading, users }) => {
  return isLoading ? (
    <div className="flex flex-col w-full space-y-4">
      {[0, 1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-zinc-700/30 animate-pulse h-14 w-full rounded-lg"
        />
      ))}
    </div>
  ) : (
    <div className="w-full space-y-4">
      {users?.map((user) => <CardUser key={user.userId} user={user} />)}
    </div>
  )
}

export default ListUsers
