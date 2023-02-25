import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';


function Header() {
    const { theme, setTheme} = useContext(ThemeContext)


    return (
        <div className={`nav nav-${theme}`}>
            <h1>Logo</h1>
            <ul className='listItems'>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    )
}

export default Header