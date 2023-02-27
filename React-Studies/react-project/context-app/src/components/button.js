import React from 'react';
import { useTheme } from '../context/themeContext';


function Button({ children }) {
    const { theme, setTheme } = useTheme()

    return (
        <div className='button-container'>
            <button className={`button-${theme === 'dark' ? theme : ''}`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{children}</button>
        </div>
    )
}

export default Button
