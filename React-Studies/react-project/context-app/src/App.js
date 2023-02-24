import './App.css';
import ThemeContext from './context/themeContext';
import React from 'react';
import { ThemeProvider } from './context/themeContext';
import Button from './components/button';



 
function App() {
    
    return (
        <div className='container'>
            <ThemeProvider>
                <Button />
            </ThemeProvider>
        </div>
    );
}

export default App;
