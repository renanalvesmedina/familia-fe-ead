import { withSSRCourseEnrollment } from '@hocs/with-ssr-course-enrollment'
import { ClassPage } from '@features/course'

export default ClassPage

export const getServerSideProps = withSSRCourseEnrollment(async (ctx) => {
  const { courseId, classId } = ctx.params as never

  return {
    props: { courseId, classId },
  }
})
