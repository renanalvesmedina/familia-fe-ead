import { withSSRAuth } from '@hocs/with-ssr-auth'
import { CoursePage } from '@features/course'

export default CoursePage

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const { courseId } = ctx.params as never

  return {
    props: { courseId },
  }
})
