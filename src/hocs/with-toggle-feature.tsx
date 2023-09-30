import React from 'react'

type Options = { display?: boolean }

export const withToggleFeature = (
  children: React.ReactNode,
  replaceContent: React.ReactNode,
  { display }: Options
) => (display ? children : replaceContent)
