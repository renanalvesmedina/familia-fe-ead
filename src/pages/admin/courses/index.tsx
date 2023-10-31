import { CoursesPage } from '@features/admin/courses'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default CoursesPage

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
}, true)
