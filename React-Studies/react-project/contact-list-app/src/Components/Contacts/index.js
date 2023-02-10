import {useState, useEffect} from 'react';
import List from './list'
import Form from './form'
import Filter from './filter'


function Contacts(){
    const[contact, setContact] = useState([]);

    useEffect(() => {
        console.log(contact)
    },[contact])
    return(
        <div>
            <Filter />
            <List 
            listItem={contact}
            />
            <Form 
            addContact={setContact}
            originalContact={contact}
            />
        </div>
    );
}

export default Contacts