import './App.css';
import Header from './components/header';
import { useState, useEffect} from 'react';
import secondImage from './assests/second-image.jpeg';
import firstImage from './assests/first-image.jpeg';
import axios from 'axios';
import List from './components/list';


function App() {
    const [number, setNumber] = useState(0);
    const [navbar, setNavbar] = useState(true);
    const [users, setUsers ] = useState([]);
    const [inputData, setInputData] = useState('');
    const [filtered, setFiltered ] = useState('');

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        } 
        getData();
    }, []);


    const handleChange = (e) => {
        setInputData(e.target.value);
        setFiltered(inputData)
    }

    const handleClick = () => {
        ;
    }

    const filteredList = users.filter( user => {
        return user.name.toLowerCase().includes(filtered.toLowerCase())
    })


    return (
        <div className="App">
            <Header img={navbar ? firstImage : secondImage} />

            <h4> The Amount of People Who Visited the Page ({number})</h4>
            <div style={{display:'flex', justifyContent:'center', gap:'5px', marginBottom:'2rem'}}>
                <button onClick={() => setNavbar(!navbar)}>Change the background of nav-bar</button>
                <button onClick={() => setNumber(prev => prev + 1)}>Increase</button>
            </div>
            <hr /><br />
            <form action="#">
                <input onChange={handleChange} value={inputData}/>
                <input onClick={handleClick} type='button' value='Filter' />
            </form>
            <List 
                users={filteredList}
            />
            <br /><hr />
        </div>
    );
}

export default App;
