import './App.css';
import React from 'react';
import Header from './components/header';
import { ThemeProvider } from './context/themeContext';
import Button from './components/button';


function App() {

    return (
        <div className='container'>
            <ThemeProvider>
                <Header />
                <Button>Theme Changer</Button>
            </ThemeProvider>
        </div>
    );
}

export default App;
