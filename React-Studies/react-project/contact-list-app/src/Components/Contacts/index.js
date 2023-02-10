import {useState, useEffect} from 'react';
import List from './list'
import Form from './form'
import './style.css'

function Contacts(){
    const [contact, setContact] = useState([
        {
            id:0,
            fname: 'medobis',
            phoneNumber: 4395933495
        },
        {
            id:1,
            fname: 'sahos',
            phoneNumber: 4395933495
        },
        {
            id:2,
            fname: 'demos',
            phoneNumber: 12341234123
        }
    ]);

    return(
        <div className='contacts'>
            <h1>Contacts</h1>
            <List
            contact={contact}
            />
            <Form
            setContact={setContact}
            // contact={contact}
            />
        </div>
    );
}

export default Contacts




