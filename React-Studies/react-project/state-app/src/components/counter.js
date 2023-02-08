import {useState} from 'react';

export default function Counter(){
    const[counter, setCounter] = useState(0)
    return(
        <div className="container">
            <h3>{counter}</h3>
            <button onClick={ ()=> setCounter(counter + 1) }>increase</button>
            <button onClick={ ()=> setCounter( counter - 1)}>decrease</button>
        </div>
    )
}