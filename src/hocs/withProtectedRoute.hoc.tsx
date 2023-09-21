import React from 'react'

import { ProtectedRoute } from '../routes/protected.routes'

export const withProtectedRoute =
  (Children: React.FC): React.FC =>
  () => (
    <ProtectedRoute>
      <Children />
    </ProtectedRoute>
  )
