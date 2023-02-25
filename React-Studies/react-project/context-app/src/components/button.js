import React from 'react';
import ThemeContext from '../context/themeContext';
import { useContext } from 'react';

function Button({ children }) {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className='button-container'>
            <button className={`button-${theme === 'dark' ? theme : ''}`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{children}</button>
        </div>
    )
}

export default Button
