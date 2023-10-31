import React from 'react'

import { useBreakpoint } from '@hooks/use-breakpoints'
import { UsersModel } from '@models/UsersModel'

import { UsersTable } from '../users-table'
import { UsersList } from '../users-list'

interface UsersDataProps {
  isLoading: boolean
  users: UsersModel[]
}

const UsersData: React.FC<UsersDataProps> = ({ users, isLoading }) =>
  useBreakpoint().lg ? (
    <UsersTable users={users} isLoading={isLoading} />
  ) : (
    <UsersList users={users} isLoading={isLoading} />
  )

export default UsersData
