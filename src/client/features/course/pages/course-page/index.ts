export { default as CoursePage } from './course-page'
export * from './course-page.hook'

export interface Exam {
  correctAnswer: string
  courseId: string
  question: string[]
  answers: {
    id: string
    title: string
  }[]
}
