import React from 'react'

import Select, { MultiValue, SingleValue } from 'react-select'

import { AsyncPaginate } from 'react-select-async-paginate'

import { AsyncLoadOptions, Option } from '@utils'
import { useThemeSwitcher } from '@contexts/theme.context'

import { container, input, twlabel } from '../field/field.styles'
import { FieldInputProps } from '../field/field'
import { useSelectInput } from './select.hook'

export type SelectInputProps<T> = Omit<
  FieldInputProps<'input'>,
  'onChange' | 'value' | 'defaultValue' | 'ref'
> & {
  name: string
  value?: Option<T>
  options?: Option<T>[]
  defaultValue?: Option<T>
  loadOptions?: AsyncLoadOptions<T>
  onChange?: (v: SingleValue<Option<T>> | MultiValue<Option<T>>) => void
}

const SelectInput = <T,>({
  variant = 'filled',
  ...props
}: React.PropsWithChildren<SelectInputProps<T>>) => {
  const { theme } = useThemeSwitcher()

  const filledThemeVariant = {
    dark: 'filled_dark',
    light: 'filled_light',
  }[theme]

  const { commonProps } = useSelectInput(props)

  const inputClassName = input({
    className: props.className,
    variant: variant === 'filled' ? (filledThemeVariant as never) : variant,
    rounded: props.rounded,
    error: props.error,
    padding: false,
  })

  return (
    <div className={container(props.containerClassName)}>
      {props.label && (
        <label className={twlabel(props.labelClassName)}>{props.label}</label>
      )}

      {props.options && (
        <Select
          {...commonProps}
          options={props.options}
          className={inputClassName}
        />
      )}

      {props.loadOptions && (
        <AsyncPaginate
          {...commonProps}
          loadOptions={props.loadOptions}
          cacheUniqs={[props.loadOptions]}
          className={inputClassName}
        />
      )}
    </div>
  )
}

export default SelectInput
