import { withProtectedRoute } from '@hocs/withProtectedRoute'
import { EnrollmentsPage } from '@features/admin/enrollments'

export default withProtectedRoute(() => <EnrollmentsPage />)
