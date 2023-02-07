import {useState} from 'react';

export default function Counter(){
    const[counter, setCounter] = useState(0)
    let increaser = ()=> setCounter(counter + 1);
    let decreaser = ()=> setCounter( counter - 1);
    return(
        <>
            <h1>Welcome to our counter app!</h1>
            <h3>{counter }</h3>
            <button onClick={increaser}>Start counter</button><br /><br />
            <button onClick={decreaser}>Stop counter</button>
        </>
    )
}