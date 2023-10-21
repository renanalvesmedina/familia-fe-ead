import React from 'react'

export const usePasswordInput = () => {
  const [hidden, setHidden] = React.useState(true)

  const toggleHidden = React.useCallback((e: any) => {
    e.preventDefault()

    setHidden((h) => !h)
  }, [])

  return { hidden, toggleHidden }
}
