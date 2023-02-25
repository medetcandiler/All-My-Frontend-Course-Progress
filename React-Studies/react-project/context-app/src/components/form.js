import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';
import ListItem from './listItem';

function Form() {
    const [form, setForm] = useState('')
    const { user, setUser } = useContext(UserContext)

    function handleChange(e) {
        setForm(e.target.value)
    }

    function handleSubmit() {
        if (form === '') {
            return false
        } else {
            setUser(prev => [...prev, form])
            setForm('')
        }

    }

    return (
        <div className='form'>
            <form action="#" onSubmit={handleSubmit}>
                <input onChange={handleChange} value={form} />
                <input type="submit" value='submit' />
                <ul>
                    <ListItem />
                </ul>
            </form>
        </div>
    )
}

export default Form
