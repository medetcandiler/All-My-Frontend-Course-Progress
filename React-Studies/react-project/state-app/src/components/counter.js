import {useState, useEffect} from 'react';

function Counter(){
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        console.log('Component has been mounted')
        setInterval( () => setCounter(prev => prev + 2),1000);

        return () => {
            console.log('component has been unmounted');
        }
    }, []);

    useEffect(() => {
        console.log('counter has been mounted')
    },[counter])

    return(
        <div className="container">
            <h2> {counter} </h2>
            <button > START COUNT</button>
        </div>
    );
}
export default Counter;