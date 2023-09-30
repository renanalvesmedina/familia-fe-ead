import { withProtectedRoute } from '@hocs/withProtectedRoute'
import { UsersPage } from '@features/admin/users'

export default withProtectedRoute(() => <UsersPage />)
