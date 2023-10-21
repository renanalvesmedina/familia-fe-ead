import { UserProfilePage } from '@features/user'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default UserProfilePage

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
