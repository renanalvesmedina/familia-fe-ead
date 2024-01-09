export interface CourseModel {
  courseName: string
  workload: string
  courseCardUri: string
  description: string
  isEnabled: boolean
  examDate: string
  createdOn: string
  integrationKey: string
  studentsCourse: {
    studentId: string
    studentName: string
    phone: string
  }[]
}

export interface EditCourseModel {
  courseId: string
  courseName: string
  workload: string
  cardUri: string
  description: string
  integrationKey: string
  examDate: string
  isEnabled: boolean
}
