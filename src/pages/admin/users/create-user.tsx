import { withProtectedRoute } from '@hocs/withProtectedRoute'
import { CreateUserPage } from '@features/admin/users'

export default withProtectedRoute(() => <CreateUserPage />)
