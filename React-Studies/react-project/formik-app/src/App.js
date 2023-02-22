import './App.css';
import SignUp from './components/signUp/signUp';
import Login from './components/login/register';
import { Routes, Route, NavLink } from 'react-router-dom';


function App() {
    return (
        <div className="container">
            <div className="button-box">
                <NavLink to='/login' className={'loginBtn'}>Login</NavLink>
                <NavLink to='register' className={'registerBtn'}>Register</NavLink>
            </div>
            <Routes>
                <Route path='/logIn' element={<SignUp />}/>
                <Route path='/register' element={<Login />}/>
            </Routes>
        </div>
    )
}


export default App;
