import React from 'react'

import { defaultTheme, StylesConfig, ThemeConfig } from 'react-select'
import { useThemeSwitcher } from '@contexts/theme.context'
import { SelectInputProps } from './select'
import { GroupBase } from 'react-select'
import { Option } from '@utils'

export const useSelectInput = <T>({
  placeholder,
  disabled,
  rounded,
  ...props
}: SelectInputProps<T>) => {
  const { theme } = useThemeSwitcher()

  const color =
    theme === 'dark' ? '#FFFFFF' : 'rgb(24 25 25 / var(--tw-text-opacity))'

  const background = theme === 'dark' ? 'rgb(63 63 70)' : '#FFFFFF'

  const themeColors = React.useMemo<ThemeConfig>(
    () => ({
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
      },
    }),
    []
  )

  const styles = React.useMemo<
    StylesConfig<Option<T>, false, GroupBase<Option<T>>> | undefined
  >(
    () => ({
      control: (style, state) => ({
        ...style,
        ...(rounded ? { paddingRight: 8 } : {}),
        ...(state.isDisabled
          ? {
              backgroundColor: 'transparent',
              cursor: 'not-allowed',
            }
          : {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              cursor: 'pointer',
            }),
        borderRadius: rounded ? 10000 : 6,
        fontFamily: 'Roboto',
        border: 'none',
      }),
      indicatorSeparator: () => ({}),
      menu: (style) => ({
        ...style,
        background,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }),
      menuList: (style) => ({
        ...style,
        padding: 0,
        borderRadius: rounded ? '16px' : '3px',
        background,
      }),
      placeholder: (style) => ({
        ...style,
        marginLeft: 8,
        fontFamily: 'Roboto',
        fontWeight: 500,
      }),
      singleValue: (style) => ({
        ...style,
        fontWeight: 500,
        paddingLeft: 8,
        fontFamily: 'Roboto',
        color,
      }),
      input: (style) => ({
        ...style,
        padding: 20,
      }),
      option: (style) => ({
        ...style,
        background,
        color,
        paddingLeft: 16,
        paddingRight: 16,
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: 14,
        cursor: 'pointer',
        ':hover': {
          filter: theme === 'dark' ? 'brightness(1.5)' : 'brightness(0.9)',
        },
        ':active': {
          filter: theme === 'dark' ? 'brightness(1.5)' : 'brightness(0.9)',
        },
      }),
    }),
    [rounded, background, color, theme]
  )

  const commonProps = React.useMemo(
    () => ({
      ...props,
      placeholder: placeholder || 'Selecione...',
      isDisabled: disabled,
      theme: themeColors,
      styles,
    }),
    [props, placeholder, disabled, themeColors, styles]
  )

  return { commonProps }
}
