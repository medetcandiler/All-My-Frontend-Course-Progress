import {useState} from 'react';

export default function Form(){
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    return (
        <>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value) } />
                <input type="text" placeholder="Last Name" value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                <h1>Hi {firstName} {lastName}</h1>
                <button onClick={() => {
                    setFirstName('');
                    setLastName('')
                }} >Reset</button>
            </form>
        </>
    )
}