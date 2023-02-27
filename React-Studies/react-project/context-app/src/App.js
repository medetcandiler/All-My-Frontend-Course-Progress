import './App.css';
import React from 'react';
import Header from './components/header';
import { ThemeProvider } from './context/themeContext';
import Button from './components/button';
import { UserProvider } from './context/userContext';
import Form from './components/form';
import { LogUserProvider } from './context/loginContext';
import LogIn  from './components/logIn';


function App() {

    return (
        <div className='container'>
            <ThemeProvider>
                <UserProvider>
                    <LogUserProvider>
                        <Header />
                        <Form />
                        <Button>Theme Changer</Button>
                        <LogIn />
                    </LogUserProvider>
                </UserProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
