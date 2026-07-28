import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('yg-theme')
    return stored || 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    if (theme === 'dark') {
      root.classList.add('dark')
      body.classList.remove('light')
    } else {
      root.classList.remove('dark')
      body.classList.add('light')
    }

    localStorage.setItem('yg-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
