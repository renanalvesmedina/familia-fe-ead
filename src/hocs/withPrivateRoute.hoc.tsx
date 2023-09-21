import React from 'react'

import { PrivateRoute } from '../routes/private.routes'

export const withPrivateRoute =
  (Children: React.FC): React.FC =>
  () => (
    <PrivateRoute>
      <Children />
    </PrivateRoute>
  )
