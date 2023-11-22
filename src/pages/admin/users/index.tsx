import { withSSRAuth } from '@hocs/with-ssr-auth'
import { UsersPage } from '@features/admin/users'

export default UsersPage

export const getServerSideProps = withSSRAuth(
  async () => ({ props: {} }),
  ['Admin']
)
