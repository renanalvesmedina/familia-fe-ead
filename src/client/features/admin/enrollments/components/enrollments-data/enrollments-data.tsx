import React from 'react'

import { useBreakpoint } from '@hooks/use-breakpoints'
import { Enrollment } from '@models/enrollment.model'

import { EnrollmentsTable } from './enrollments-table'
import { EnrollmentsList } from './enrollments-list'

export interface EnrollmentsDataProps {
  enrollments?: Enrollment[]
  isLoading?: boolean
  selectedRows: Enrollment[]
  setSelectedRows: React.Dispatch<React.SetStateAction<Enrollment[]>>
}

const EnrollmentsData: React.FC<EnrollmentsDataProps> = (props) =>
  useBreakpoint().lg ? (
    <EnrollmentsTable {...props} />
  ) : (
    <EnrollmentsList {...props} />
  )

export default EnrollmentsData
