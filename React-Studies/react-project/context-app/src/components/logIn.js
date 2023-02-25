import { useContext, useState } from 'react';
import LogUserContext from '../context/loginContext';
import ThemeContext from '../context/themeContext';

function LogIn() {
    const { data, setData } = useContext(LogUserContext)
    const { theme } = useContext(ThemeContext)
    const [loading , setLoading ] = useState(true)

    function handleLogIn(){
        setLoading(false)
        setTimeout(() => {
            setData({
                name:'medet',
                lname:'diler',
                age:27,
                id:23
            });
            setLoading(true)
        }, 2000)
    }

    function handleLogOut(){
        setLoading(false)
        setTimeout(() => {
            setData(null);
            setLoading(true)
        },2000)
    }

    return (
        <div className='logIn'>
            {
                !data && <button onClick={handleLogIn} className={`button-${theme}`}>{loading ? 'Log In' : 'Loading...'}</button>
            }
            <br />
            { data === null ? '' : JSON.stringify(data) }
            <br /><br />
            {
                data && <button onClick={handleLogOut} className={`button-${theme}`}> {loading ? 'Log out' : 'Loading...'} </button>
            }
        </div>
    )
}

export default LogIn
