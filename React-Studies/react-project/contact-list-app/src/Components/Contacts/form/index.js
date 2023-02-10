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
            return false
        }else {
            addContact([...originalContact ,form])
            
        }
    }
    return(
        <div>
            <form action="#" onSubmit={submitValue}>
                <div>
                    <input name="fname" placeholder="Full Name:" onChange={changeInput} value={form.fname}/>
                </div>
                <div>
                    <input name="phoneNumber" placeholder="Phone Number:" onChange={changeInput} value={form.phoneNumber}/>
                </div>
                <input type="submit" value="ADD" />
            </form>
        </div>
    )
}

export default Form;
















// const[form , setForm] = useState({ fname: '', number: ''});

//     function changeValue(e){
//         setForm({ ...form , [e.target.name] : e.target.value });
//     }
//     function submitValue(e){
//         e.preventDefault();
//         if(!(isNaN(form.fname)) && isNaN(form.number)){
//             alert('write only character as your first name and write only numbers as a phone number')
//         }else console.log(form);
//     }





// <div>
//             <form action="#" onSubmit={submitValue} >
//                 <h2>{Object.values(form)}</h2>
//                 <input name="fname" placeholder="Name:"  onChange={changeValue} autoComplete='off'/><br />
//                 <input name="number"  placeholder="Phone Number:" onChange={changeValue} autoComplete='off'/><br />
//                 <input type="submit" value="Add" />
//             </form>
//         </div>