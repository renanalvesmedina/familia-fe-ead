import { withProtectedRoute } from '@hocs/withProtectedRoute'
import { EditUserPage } from '@features/admin/users'

export default withProtectedRoute(() => <EditUserPage />)
