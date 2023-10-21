import React from 'react'
import Image from 'next/image'

import { twMerge } from 'tailwind-merge'

import { useUserDetails } from '@contexts/user-details.context'
import { TruncateText } from '@core/truncate-text'
import { UsersModel } from '@models/UsersModel'

interface UsersListProps {
  users?: UsersModel[]
  isLoading?: boolean
}

const UserCard: React.FC<{ user: UsersModel }> = ({ user }) => {
  const { onOpenUserDetails } = useUserDetails()

  const isAdmin = React.useMemo(
    () => user.profile?.includes('Admin'),
    [user.profile]
  )

  const userProfileUri = React.useMemo(
    () => (!user.photoUri ? '/images/avatarDefault.png' : user.photoUri),
    [user.photoUri]
  )

  const onCardClick = React.useCallback(
    () => onOpenUserDetails(user.userId),
    [onOpenUserDetails, user.userId]
  )

  return (
    <div
      onClick={onCardClick}
      className="flex items-center space-x-3 bg-white shadow-md border border-gray-200 dark:border-transparent dark:bg-zinc-800 px-6 py-4 w-full rounded-lg cursor-pointer"
    >
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

      <div className="flex flex-col items-start space-y-3 flex-1">
        <div
          className={twMerge(
            'py-1 px-3 rounded-full border text-xs',
            isAdmin
              ? 'text-zinc-800 dark:text-white bg-brand-700 dark:bg-brand-700/20 border-brand-700/50'
              : 'text-white bg-zinc-700 dark:bg-zinc-700/20 border-zinc-700/70'
          )}
        >
          {isAdmin ? 'Administrador' : 'Estudante'}
        </div>

        <div className="flex flex-col items-start">
          <TruncateText className="font-medium text-base text-zinc-800 dark:text-white text-left">
            {user.fullName}
          </TruncateText>

          <TruncateText className="font-medium text-sm text-gray-400 text-left">
            {user.email}
          </TruncateText>
        </div>
      </div>
    </div>
  )
}

const UsersList: React.FC<UsersListProps> = ({ isLoading, users }) => {
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
    <div className="w-full space-y-4 mb-20">
      {users?.map((user) => <UserCard key={user.userId} user={user} />)}
    </div>
  )
}

export default UsersList
