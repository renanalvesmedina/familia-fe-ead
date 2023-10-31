import React from 'react'

import { createPortal } from 'react-dom'

import { useBreakpoint } from '@hooks/use-breakpoints'

import { TintedOverlay } from './highlight-overlay.styles'

type Position = 'right' | 'left' | 'top' | 'bottom'

interface HighlightOverlayProps {
  featuresRefs: React.RefObject<HTMLDivElement>[]
  featuresWrappers: React.FC<{
    wrapperRef?: React.RefObject<HTMLDivElement>
    wrapperStyles?: React.CSSProperties
    getDimentions?: (width?: number, height?: number) => void
  }>[]
  position: Position[]
  open: boolean
}

const HighlightOverlay: React.FC<HighlightOverlayProps> = ({
  featuresWrappers,
  featuresRefs,
  position = ['right', 'bottom'],
  open,
}: HighlightOverlayProps) => {
  const { md } = useBreakpoint()
  const isDesktop = md

  const [dimentions, setDimentions] = React.useState<number[]>([0, 0])

  const [webPosition, mobilePosition] = position

  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const element =
    featuresRefs[0].current &&
    document.getElementById(featuresRefs[0]?.current?.id)

  console.log(dimentions)

  const positions = React.useMemo(
    () =>
      ({
        left: {
          left: `-${dimentions[0] + 24}px`,
        },
        right: {
          right: `-${dimentions[0] + 24}px`,
        },
        top: {
          top: `-${dimentions[1] + 24}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        },
        bottom: {
          bottom: `-${dimentions[1] + 24}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        },
      })[isDesktop ? webPosition : mobilePosition],
    [isDesktop, mobilePosition, webPosition, dimentions]
  )

  const Component = featuresWrappers[0]

  const loadFeaturesRefs = React.useCallback(() => {
    for (const ref of featuresRefs) {
      if (ref.current) {
        ref.current.style.zIndex = '10000'
        ref.current.style.position = 'relative'
      }
    }
  }, [featuresRefs])

  const clearFeaturesRefs = React.useCallback(() => {
    for (const ref of featuresRefs) {
      if (ref.current) {
        ref.current.style.zIndex = ''
        ref.current.style.position = ''
      }
    }
  }, [featuresRefs])

  React.useEffect(() => {
    if (open) {
      loadFeaturesRefs()
    } else {
      clearFeaturesRefs()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  return createPortal(
    <TintedOverlay>
      {element
        ? createPortal(
            <Component
              wrapperRef={wrapperRef}
              wrapperStyles={{ ...positions }}
              getDimentions={(width, height) =>
                setDimentions([width!, height!])
              }
            />,
            element
          )
        : null}
    </TintedOverlay>,
    document.body
  )
}

export default HighlightOverlay
