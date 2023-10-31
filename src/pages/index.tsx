import { UserDashboardPage } from '@features/user'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default UserDashboardPage

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
