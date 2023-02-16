import React from "react";
import { useState, useEffect } from "react";


const firstFormValue= {fname: '', phoneNumber:''}

function Form( { setContact   }){
    const [form, setForm] = useState(firstFormValue)


    function changeValue(e){
        setForm({...form, [e.target.name]:e.target.value});
    }

//    useEffect( () => {
//     setForm(firstFormValue)
//    },[contact]) 
   
    function submitValue(e  ){
        e.preventDefault();
        if(form.fname === '' | form.phoneNumber === ''){
            alert(' You have got to write sth. Please do not be blank name and phobe number')
        }else {
            setContact((prev)=>[...prev, form])
            // setForm(firstFormValue)
        }
        
    }

    return(
        <div>
            <form action="#" onSubmit={submitValue}>
                <div>
                    <input 
                    placeholder="Full Name:" 
                    name="fname"
                    onChange={changeValue}
                    value={form.fname}
                    />
                    </div>
                <div>
                    <input 
                    placeholder="Phone Number:" 
                    name='phoneNumber'
                    onChange={changeValue}
                    value={form.phoneNumber}
                    />
                </div>
                <div className="btn-container">
                    <input className="btn" type="submit" value="ADD CONTACT" />
                </div>
            </form>
        </div>
    )
}

export default Form;






