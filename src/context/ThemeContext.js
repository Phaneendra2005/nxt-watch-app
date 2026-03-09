import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
})

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
