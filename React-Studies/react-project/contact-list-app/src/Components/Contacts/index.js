import {useState, useEffect} from 'react';
import List from './list'
import Form from './form'
import './style.css'

function Contacts(){
    const [contact, setContact] = useState([
        {
            id:0,
            fname: 'Medetcan Diler',
            phoneNumber: 5392344777
        },
        {
            id:1,
            fname: 'Brendan Eich',
            phoneNumber: 5345554433
        },
        {
            id:2,
            fname: 'Tim Berners',
            phoneNumber: 5345666777
        }
    ]);

    return(
        <div className='contacts'>
            <h1>Contacts</h1>
            <List
            contact={contact}
            setContact={setContact}
            />
            <Form
            setContact={setContact}
            // contact={contact}
            />
        </div>
    );
}

export default Contacts




