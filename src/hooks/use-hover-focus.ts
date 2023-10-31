import React from 'react'

export function useHoverFocus<T>(): [
  React.MutableRefObject<T>,
  { isHover: boolean; isFocus: boolean },
] {
  const [isHover, setHover] = React.useState<boolean>(false)
  const [isFocus, setFocus] = React.useState<boolean>(false)

  const ref: any = React.useRef<T | null>(null)

  const handleMouseOver = (): void => setHover(true)
  const handleMouseOut = (): void => setHover(false)

  const handleFocus = (): void => setFocus(true)
  const handleBlur = (): void => setFocus(false)

  React.useEffect(
    () => {
      const node: any = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)
        node.addEventListener('focus', handleFocus)
        node.addEventListener('blur', handleBlur)
        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
          node.removeEventListener('focus', handleFocus)
          node.removeEventListener('blur', handleBlur)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  )
  return [ref, { isHover, isFocus }]
}
