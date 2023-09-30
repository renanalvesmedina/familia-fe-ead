import React from 'react'

import { useBreakpoint } from '@hooks/use-breakpoints'
import { UsersModel } from '@models/UsersModel'

import { UsersTable } from '../users-table'
import { UsersList } from '../users-list'

interface UsersDataProps {
  users: UsersModel[]
  isLoading: boolean
}

const UsersData: React.FC<UsersDataProps> = ({ users, isLoading }) => {
  const { lg } = useBreakpoint()

  return !lg ? (
    <UsersList users={users} isLoading={isLoading} />
  ) : (
    <UsersTable users={users} isLoading={isLoading} />
  )
}

export default UsersData
