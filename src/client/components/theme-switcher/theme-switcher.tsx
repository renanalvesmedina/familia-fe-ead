import React from 'react'

import { useThemeSwitcher } from '@contexts/theme.context'
import { Moon, Sun } from 'phosphor-react'
import { twMerge } from 'tailwind-merge'

const ThemeSwitcher: React.FC = () => {
  const { onThemeSwitch, theme, themeSwitcherRef } = useThemeSwitcher()

  return (
    <button
      ref={themeSwitcherRef}
      onClick={onThemeSwitch}
      data-theme={theme}
      className={twMerge(
        'p-2 rounded-full bg-transparent w-fit transition-all delay-100 outline-none -ml-2',
        'data-[theme=dark]:bg-brand-700/10 data-[theme=light]:bg-indigo-500/20'
      )}
    >
      <div
        data-theme={theme}
        className={twMerge(
          'p-1.5 rounded-full bg-transparent w-fit transition-all text-gray-400',
          'data-[theme=dark]:bg-brand-700/50 data-[theme=light]:bg-indigo-500 text-white dark:text-white'
        )}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </div>
    </button>
  )
}

export default ThemeSwitcher
