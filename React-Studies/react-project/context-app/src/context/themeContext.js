import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('themeState')));
    console.log(theme)


    useEffect(() => {
        localStorage.setItem('themeState', JSON.stringify(theme))
    }, [theme])

    const values = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext;