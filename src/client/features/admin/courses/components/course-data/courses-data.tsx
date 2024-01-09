import React from 'react'

import { useBreakpoint } from '@hooks/use-breakpoints'

import { CoursesTable } from '../course-table'
import { CoursesList } from '../course-list'
import { Course } from '../../pages/courses-page/courses-page'

interface CoursesDataProps {
  isLoading: boolean
  courses: Course[]
}

const CoursesData: React.FC<CoursesDataProps> = ({ courses, isLoading }) =>
  useBreakpoint().lg ? (
    <CoursesTable courses={courses} isLoading={isLoading} />
  ) : (
    <CoursesList courses={courses} isLoading={isLoading} />
  )

export default CoursesData
