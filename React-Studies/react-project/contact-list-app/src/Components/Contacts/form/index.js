import React from "react";
import { useState, useEffect } from "react";

function Form(){
    const[form , setForm] = useState({ fname: '', number: ''});

    function changeValue(e){
        setForm({ ...form , [e.target.name] : e.target.value });
    }
    function submitValue(e){
        e.preventDefault();
        if(!(isNaN(form.fname)) && isNaN(form.number)){
            alert('write only character as your first name and write only numbers as a phone number')
        }else console.log(form);
    }
    return(
        <div>
            <form action="#" onSubmit={submitValue} >
                <h2>{Object.values(form)}</h2>
                <input name="fname" placeholder="Name:"  onChange={changeValue} autoComplete='off'/><br />
                <input name="number"  placeholder="Phone Number:" onChange={changeValue} autoComplete='off'/><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form;