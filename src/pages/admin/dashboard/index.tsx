import { DashboardPage } from '@features/admin/dashboard'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default DashboardPage

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
}, ['Admin'])
