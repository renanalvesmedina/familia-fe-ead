import React, { ElementType } from 'react'

import { stripTags } from '@utils'
import { cx } from '@emotion/css'

export interface RichTextProps {
  as?: ElementType
  className?: string
  children?: React.ReactNode
}

const RichText: React.FC<RichTextProps> = ({ children, ...props }) => (
  <div
    {...props}
    className={cx('rich-text', props.className)}
    dangerouslySetInnerHTML={{ __html: stripTags(children, ['script']) }}
  />
)

export default RichText
