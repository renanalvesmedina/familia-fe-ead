import { CreateUserPage } from '@features/admin/users'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default CreateUserPage

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
}, ['Admin'])
