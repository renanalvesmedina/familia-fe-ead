import React from 'react'

import { parseCookies, setCookie } from 'nookies'
import { useHover } from '@hooks/use-hover'

interface ThemeProviderProps {
  children: React.ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextData = {
  themeSwitcherHighlight: boolean
  themeSwitcherRef: React.MutableRefObject<HTMLButtonElement> | null
  theme: Theme
  onThemeSwitch: () => void
}

export const ThemeContext = React.createContext<ThemeContextData>({
  themeSwitcherHighlight: false,
  themeSwitcherRef: null,
  theme: 'dark',
  onThemeSwitch: () => {},
})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('dark')

  const [themeSwitcherRef, isHover] = useHover<HTMLButtonElement>()

  const themeSwitcherHighlight = React.useMemo(() => isHover, [isHover])

  const onThemeSwitch = () =>
    setTheme((old) => (old === 'dark' ? 'light' : 'dark'))

  const { ['theme']: cookieToken } = parseCookies()

  React.useLayoutEffect(() => {
    if (cookieToken) setTheme(cookieToken as Theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useLayoutEffect(() => {
    const bodyCurrent = document.getElementById('page')

    if (theme === 'dark') {
      bodyCurrent?.classList.add('dark')
      setCookie(undefined, 'theme', 'dark', { path: '/' })
    }

    if (theme === 'light') {
      bodyCurrent?.classList.remove('dark')
      setCookie(undefined, 'theme', 'light', { path: '/' })
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ themeSwitcherHighlight, themeSwitcherRef, onThemeSwitch, theme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeSwitcher = () => React.useContext(ThemeContext)
