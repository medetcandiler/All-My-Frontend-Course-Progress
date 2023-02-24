import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import { useState } from 'react';

function Button() {
    const data = useContext(ThemeContext)
    return (
        <div>
            <button onClick={() => data.setTheme(data.theme === 'dark' ? 'light' : 'dark')}>Button - ({data.theme})</button>
        </div> 
    )
}

export default Button
