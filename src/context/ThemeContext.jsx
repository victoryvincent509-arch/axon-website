import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'

const STORAGE_KEY = 'axon-theme'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  useLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const initial = stored === 'light' || stored === 'dark' ? stored : 'dark'
    setTheme(initial)
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
