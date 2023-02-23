import './App.css';
import { useState, useMemo } from 'react';
import Main from './components/main';




function App() {

    const [text, setText] = useState('');
    const [datas, setDatas] = useState([]);


    return (
        <div className="App">
            <Main 
                datas={datas}
                setDatas={setDatas}
                setText={setText}
                text={text }
            />
        </div>
    );
}



export default App;
