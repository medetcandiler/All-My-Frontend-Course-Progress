import {useState} from 'react';
import List from './list'
import Form from './form'


function Contacts(){
    return(
        <div>
            Contact
            <List />
            <Form />
        </div>
    );
}

export default Contacts