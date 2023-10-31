import { withSSRAuth } from '@hocs/with-ssr-auth'
import { ClassPage } from '@features/course'

export default ClassPage

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const { courseId, classId } = ctx.params as never

  return {
    props: { courseId, classId },
  }
})
