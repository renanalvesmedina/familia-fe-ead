import { withProtectedRoute } from '@hocs/withProtectedRoute'
import { DashboardPage } from '@features/admin/dashboard'

export default withProtectedRoute(() => <DashboardPage />)
