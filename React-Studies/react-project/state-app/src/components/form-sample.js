import {useState} from 'react';

export default function Form(){
    const[form, setForm] = useState({firstName: 'empty' , lastName:'empty'})

    function changeValue(e){
        setForm({ [e.target.name]:e.target.value})
    }

    // const[lastName, setLastName] = useState('empty')
    // function changeFname(e){
    //     setFirstName(e.target.value)
    // }
    // function changeLname(e){
    //     setLastName(e.target.value)
    // }
    return (
        <>
            <form action="#" onSubmit={ () => setForm('')}>
                <label htmlFor="fname">First Name: </label>
                <input onChange={changeValue} type="text" name="firstName" value={form.firstName} id="fname" /><br />
                <label htmlFor="lname">Last Name: </label>
                <input onChange={changeValue}  type="text" name="lastName" id="lname" value={form.lastName} /><br />
                <input type="submit" value="RESET" />
                <h3>Your First Name: <i>{form.firstName}</i> </h3>
                <h3>Your Last Name: <i>{form.lastName}</i> </h3>
            </form>
        </>
    )
}