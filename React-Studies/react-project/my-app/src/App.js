import './App.css';
import React from "react";
import Home from './components/Home/home';
import About from './components/about-us/about-us';
import Users from './components/users/users';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link className='link' to="/">Home</Link>
                            {/* <a href="/Home">Home</a> */}
                        </li>
                        <li>
                            <Link className='link' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='link' to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
