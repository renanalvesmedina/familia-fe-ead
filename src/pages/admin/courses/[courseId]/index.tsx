import { CourseDetailsPage } from '@features/admin/courses'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default CourseDetailsPage

export const getServerSideProps = withSSRAuth(
  async (ctx) => ({
    props: {
      courseId: ctx.params?.courseId,
    },
  }),
  ['Admin']
)
