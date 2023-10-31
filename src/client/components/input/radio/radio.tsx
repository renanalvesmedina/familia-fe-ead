import React from 'react'

import { FieldInputProps } from '../field'
import { twMerge } from 'tailwind-merge'

export interface RadioInputProps extends FieldInputProps<'input'> {
  labelClassName?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  readOnly?: boolean
  checked?: boolean
  error?: boolean
  label: string
  name: string
}

const RadioInput: React.FC<RadioInputProps> = ({
  inputWrapperClassName,
  containerClassName,
  labelClassName,
  defaultValue,
  className,
  readOnly,
  disabled,
  onChange,
  checked,
  onFocus,
  onBlur,
  value,
  label,
  name,
}) => {
  return (
    <div className={containerClassName}>
      <label
        className={twMerge(
          'flex select-none items-center gap-2 rounded-lg border px-4 py-6 border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer ',
          checked &&
            'border-brand-700/60 dark:border-brand-700/40 bg-brand-700/20 dark:bg-brand-700/5',
          inputWrapperClassName
        )}
      >
        <input
          type="radio"
          readOnly={readOnly}
          name={name}
          value={value as never}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          defaultValue={defaultValue}
          className={twMerge(
            'accent-brand-700',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            className
          )}
        />
        <p className={twMerge('text-zinc-800 dark:text-white', labelClassName)}>
          {label}
        </p>
      </label>
    </div>
  )
}

export default RadioInput
