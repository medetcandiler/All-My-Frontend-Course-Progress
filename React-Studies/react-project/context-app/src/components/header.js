import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import UserContext from '../context/userContext';
import ListItem from './listItem';


function Header() {
    const { theme, setTheme } = useContext(ThemeContext)
    const { user, setUser } = useContext(UserContext)

    return (
        <div className={`nav nav-${theme}`}>
            <h1>Logo</h1>
            <ul className='listItems'>
                <ListItem />
            </ul>
        </div>
    )
}

export default Header