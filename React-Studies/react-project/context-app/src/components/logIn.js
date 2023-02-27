import { useContext, useState } from 'react';
import { useLogUser } from '../context/loginContext';
import {useTheme} from '../context/themeContext';

function LogIn() {
    const { data, setData } = useLogUser()
    const { theme } = useTheme()
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
<button className={`button-${theme}`} onClick={handleLogOut}>Log Out</button>
    return (
        <div className='logIn'>
            {
                data ? <button className={`button-${theme}`} onClick={handleLogOut}>{loading ? 'Log Out' : 'Loading...'}</button> : <button className={`button-${theme}`} onClick={handleLogIn}>{loading ? 'Log In' : 'Loading...'}</button>
            }
            <br /><br />
            { data === null ? '' : JSON.stringify(data) }
        </div>
    )
}

export default LogIn
