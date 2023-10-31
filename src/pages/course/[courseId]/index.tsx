import { withSSRCourseEnrollment } from '@hocs/with-ssr-course-enrollment'
import { CoursePage } from '@features/course'

export default CoursePage

export const getServerSideProps = withSSRCourseEnrollment(async (ctx) => {
  const { courseId } = ctx.params as never

  return {
    props: { courseId },
  }
})
