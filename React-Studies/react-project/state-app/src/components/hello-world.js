import {useState} from 'react';

function Hello(){
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    return(
        <>
            <div className="container">
                <h1>Hello {name ? 'medet' : 'aybissss'}. You are {age ? 26 : 25}</h1>
                <button onClick={() => {
                    setName(!name)
                    setAge(!age)
                }}>Change the person</button>
            </div>
        </>
    )
}
export {
    Hello
}