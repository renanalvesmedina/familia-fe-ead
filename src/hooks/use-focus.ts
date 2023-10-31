import React from 'react'

export function useFocus<T>(): [React.MutableRefObject<T>, boolean] {
  const [value, setValue] = React.useState<boolean>(false)

  const ref: any = React.useRef<T | null>(null)

  const handleFocus = (): void => setValue(true)
  const handleBlur = (): void => setValue(false)

  React.useEffect(
    () => {
      const node: any = ref.current
      if (node) {
        node.addEventListener('focus', handleFocus)
        node.addEventListener('blur', handleBlur)
        return () => {
          node.removeEventListener('focus', handleFocus)
          node.removeEventListener('blur', handleBlur)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  )
  return [ref, value]
}
