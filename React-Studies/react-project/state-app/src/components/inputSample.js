import {useState} from 'react'

export default function Input(){
    const[form, setForm]= useState({fname: '', surName:''});
    // const[surName, setSurName] = useState('');
    // const changeFnc= function(e){
    //     if(e.target.name=='fname'){
    //         setName(e.target.value)
    //     }else{
    //         setSurName(e.target.value)
    //     }
    // }
    const changeFnc2= (e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const removeInput= (e)=>{
        e.preventDefault();
        setForm({fname:'' , surName:''})
    }
   
    // const removeInput= (e)=>{
    //     e.preventDefault();
    //     setName('');
    //     setSurName('')
    // }
    return(
        <div className="container">
            <h1>INPUT STUDY AREA</h1>
            <form action="#" onSubmit={removeInput} >
                <label htmlFor="name">Enter your name:</label>
                <input type="text" name='fname'  value={form.fname} onChange={changeFnc2} /><br />
                <label htmlFor="surName">Enter your Surname:</label>
                <input type="text"  name='surName' value={form.surName} onChange={changeFnc2} />
                <input type="submit" value="DELETE"  />
            </form>
            
            <h1>Hello {form.fname} {form.surName}. Welcome to our website</h1>
        </div>
    )
}