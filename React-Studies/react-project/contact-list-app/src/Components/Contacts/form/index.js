import React from "react";
import { useState, useEffect } from "react";

const formEntries={fname:'' , phoneNumber:''}

function Form({ addContact, originalContact}){
    const[form, setForm] = useState(formEntries);

    useEffect(() => {
        setForm(formEntries)
    },[originalContact])

    function changeInput(e){
        setForm({...form, [e.target.name]:e.target.value});
    }

    function submitValue(e){
        e.preventDefault();
        if(!(isNaN(form.fname)) || isNaN(form.phoneNumber)){
            alert('write your Name using only characters and your number using only number ')
        }else {
            addContact([...originalContact ,form])
            
        }
    }
    return(
        <div>
            <form action="#" onSubmit={submitValue}>
                <div>
                    <input 
                    name="fname"
                    placeholder="Full Name:" 
                    onChange={changeInput} 
                    value={form.fname}/>
                </div>
                <div>
                    <input name="phoneNumber" 
                    placeholder="Phone Number:" 
                    onChange={changeInput} 
                    value={form.phoneNumber}/>
                </div>
                <input 
                type="submit" 
                value="ADD" />
            </form>
        </div>
    )
}

export default Form;

