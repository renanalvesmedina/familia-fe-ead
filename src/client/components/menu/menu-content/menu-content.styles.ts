import styled from '@emotion/styled'

import { keyframes } from '@emotion/react'

const entering = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`

const leaving = keyframes`
  from {
    opacity: 1;
    transform: translateX(0)
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
  z-index: 999;
`

export const Container = styled.div`
  width: 280px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 30px 24px;
  transition: opacity transform 0.25s ease-in-out;
  animation: ${entering} 0.25s ease-in-out;

  &.leaving {
    animation: ${leaving} 0.25s ease-in-out;
  }
`
