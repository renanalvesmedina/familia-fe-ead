import React from 'react'

import { container, input, inputWrapper, twlabel } from './field.styles'
import { InputTypes, useFieldInput } from './field.hook'
import { Keys, MustHaveProps } from '@hocs/with-form'
import { useThemeSwitcher } from '@contexts/theme.context'
import { IMaskInput } from 'react-imask'

export type FieldInputProps<T extends Keys> = MustHaveProps<T> & {
  renderAfterLabel?: React.ReactNode
  renderAfter?: React.ReactNode
  disabled?: boolean
  label?: string
  type?: InputTypes
}

const FieldInput: React.FC<FieldInputProps<'input'>> = ({
  type = 'text',
  inputWrapperClassName,
  containerClassName,
  renderAfterLabel,
  labelClassName,
  placeholder,
  className,
  disabled,
  onChange,
  children,
  rounded = false,
  variant = 'filled',
  value,
  label,
  name,
  error,
  ...props
}) => {
  const { theme } = useThemeSwitcher()

  const filledThemeVariant = {
    dark: 'filled_dark',
    light: 'filled_light',
  }[theme]

  const { masks, id, before, after, realtypes, defaultPlaceholders } =
    useFieldInput({
      name,
      children,
    })

  return (
    <div className={container(containerClassName)}>
      {label && (
        <label htmlFor={id} className={twlabel(labelClassName)}>
          {label}
          {renderAfterLabel}
        </label>
      )}

      <div className={inputWrapper(inputWrapperClassName)}>
        {before}

        <IMaskInput
          id={id}
          type={realtypes[type]}
          name={name}
          mask={(masks[type] as never) || /^.*$/}
          disabled={disabled}
          placeholder={placeholder || defaultPlaceholders[type]}
          className={input({
            rounded,
            error,
            variant:
              variant === 'filled' ? (filledThemeVariant as never) : variant,
            className,
          })}
          onAccept={onChange}
          {...(value !== undefined ? { value } : {})}
          {...(props as any)}
        />

        {after}
      </div>
    </div>
  )
}

export default FieldInput
