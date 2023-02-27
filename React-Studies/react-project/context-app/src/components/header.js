import { useTheme } from '../context/themeContext';
import { useUser } from '../context/userContext';
import ListItem from './listItem';


function Header() {
    const { theme, setTheme } = useTheme()
    const { user, setUser } = useUser()

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