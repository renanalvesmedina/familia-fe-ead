import React from 'react'

import { PublicRoute } from '@routes/public.routes'

export const withPublicRoute =
  (Children: React.FC): React.FC =>
  () => (
    <PublicRoute>
      <Children />
    </PublicRoute>
  )
