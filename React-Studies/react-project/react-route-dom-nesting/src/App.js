import React from 'react';
import './App.css';
import {
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import UserRoutes from './components/userRoutes';
import { color } from '@mui/system';

function App() {



    return (
        <>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <NavLink style={({ isActive }) =>  isActive ? {color:'red'} : {}} to='/'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => {return isActive ? {color:'red'} : {}}} to='/about'>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => {return isActive ? {color:'red'} : {}}} to='/users'>USERS</NavLink>
                        </li>
                    </ul>
                    <br />
                    <hr />
                </nav>
                <br />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users/*' element={<UserRoutes />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App
