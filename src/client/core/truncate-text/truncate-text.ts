import styled from '@emotion/styled'

interface TruncateTextProps {
  lines?: number
}

const TruncateText = styled.p<TruncateTextProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines = 1 }) => lines};
  -webkit-box-orient: vertical;
  user-select: none;
`

export default TruncateText
