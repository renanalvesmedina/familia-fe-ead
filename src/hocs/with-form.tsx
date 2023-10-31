/* eslint-disable react/display-name */

import React from 'react'

import { useField, UseFieldConfig } from 'react-final-form'
import { twMerge } from 'tailwind-merge'

export type Keys = keyof JSX.IntrinsicElements

export type SharedFieldInputProps<T extends Keys> = React.ComponentProps<T> & {
  inputWrapperClassName?: string
  containerClassName?: string
  labelClassName?: string
  className?: string
  variant?: 'bordeless' | 'filled' | 'outlined' | 'filled_dark' | 'filled_light'
  rounded?: boolean
}

export type MustHaveProps<T extends Keys> = Omit<
  SharedFieldInputProps<T>,
  'type'
> & {
  name: string
  error?: boolean
  defaultValue?: unknown
}

export const withForm = <T, K extends Keys>(
  Component: React.FC<T & MustHaveProps<K>>,
  options?: UseFieldConfig<unknown, unknown>
) => {
  return ({
    radioValue,
    ...props
  }: Omit<
    T & MustHaveProps<K>,
    'error' | 'value' | 'onChange' | 'onBlur' | 'onFocus'
  > & { radioValue?: string }) => {
    const { input, meta } = useField(props.name, {
      defaultValue: props.defaultValue,
      subscription: {
        value: true,
        touched: true,
        error: true,
        modified: true,
        submitFailed: true,
      },
      ...(radioValue ? { type: 'radio', value: radioValue } : {}),
      ...options,
    })

    return (
      <div className={twMerge('space-y-4', props.containerClassName)}>
        {/* @ts-ignore */}
        <Component
          {...props}
          {...input}
          containerClassName="w-full"
          error={
            meta.touched && (meta.modified || meta.submitFailed) && meta.error
          }
        />

        {meta.touched && (meta.modified || meta.submitFailed) && meta.error && (
          <p className="text-red-500 text-sm font-medium">
            {meta.error.value || meta.error}
          </p>
        )}
      </div>
    )
  }
}
