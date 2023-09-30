import { withProtectedRoute } from '@hocs/withProtectedRoute'
import { CoursesPage } from '@features/admin/courses'

export default withProtectedRoute(() => <CoursesPage />)
