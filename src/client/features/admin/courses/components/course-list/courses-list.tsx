import React from 'react'

import { useRouter } from 'next/router'

import { Course } from '../../pages/courses-page/courses-page'

interface CoursesListProps {
  courses?: Course[]
  isLoading?: boolean
}

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const router = useRouter()

  const onCardClick = React.useCallback(
    () => router.push(`/admin/courses/${course.courseId}`),
    [course.courseId, router]
  )

  return (
    <div
      onClick={onCardClick}
      className="flex items-center space-x-3 bg-white shadow-md border border-gray-200 dark:border-transparent dark:bg-zinc-800 px-6 py-4 w-full rounded-lg cursor-pointer"
    >
      <div className="flex flex-col items-start space-y-3 flex-1">
        <div className="flex items-center gap-4">
          <div className="w-24 h-16 relative rounded-md">
            <img
              alt={course.courseName}
              src={course.cardUri}
              className="absolute w-full h-full rounded-md"
            />
          </div>

          <p className="font-medium text-base text-zinc-800 dark:text-white text-left">
            {course.courseName}
          </p>
        </div>
      </div>
    </div>
  )
}

const CoursesList: React.FC<CoursesListProps> = ({ isLoading, courses }) => {
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
      {courses?.map((course) => (
        <CourseCard key={course.courseName} course={course} />
      ))}
    </div>
  )
}

export default CoursesList
