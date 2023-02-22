import './App.css';
import { useState, useMemo } from 'react';
import Header from './components/header';


function calculateObject() {
    console.log('Calculating...')
    for (let i = 0; i < 100000; i++) { }
    console.log('Calculating completed.')
    return { name: 'medet' }
}

function App() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');
    const [datas, setDatas] = useState([]);

    const data = useMemo(() => {
        calculateObject()
    },[number])


    // const data = calculateObject()


    return (
        <div className="App">
            <Header
                data={data}
            />
            <h1>{number}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Increase</button>
            <br /><br />

            <form action="#" onSubmit={(e) => {
                setDatas(prev => [...prev, text]);
                e.preventDefault();
                setText('');
            }}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default App;
