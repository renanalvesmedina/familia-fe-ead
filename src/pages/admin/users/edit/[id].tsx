import { EditUserPage } from '@features/admin/users'
import { withSSRAuth } from '@hocs/with-ssr-auth'

export default EditUserPage

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const { id } = ctx.params as never
  return {
    props: { userId: id },
  }
}, true)
