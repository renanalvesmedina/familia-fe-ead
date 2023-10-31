import { EnrollmentsPage } from '@features/admin/enrollments'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default EnrollmentsPage

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
}, true)
