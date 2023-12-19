import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}