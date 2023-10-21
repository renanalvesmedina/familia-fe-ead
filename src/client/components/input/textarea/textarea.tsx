import React from 'react'

import { container, input, twlabel } from '../field/field.styles'
import { FieldInputProps } from '../field'

export type TextAreaProps = FieldInputProps<'textarea'>

const TextArea: React.FC<TextAreaProps> = ({
  containerClassName,
  renderAfterLabel,
  labelClassName,
  placeholder,
  className,
  rounded,
  variant = 'filled',
  label,
  error,
  ...props
}) => {
  const id = React.useMemo(() => `${props.name}-f`, [props.name])

  return (
    <div className={container(containerClassName)}>
      {label && (
        <label htmlFor={id} className={twlabel(labelClassName)}>
          {label}
          {renderAfterLabel}
        </label>
      )}

      <textarea
        {...props}
        id={id}
        placeholder={placeholder}
        className={input({
          className,
          rounded,
          variant,
          error,
        })}
      />
    </div>
  )
}

export default TextArea
