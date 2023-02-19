import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function User() {
    const [user, setUser ] = useState({})



    const { id } = useParams()
    
    useEffect( () => {
        const getData = async () => {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(data)
        }
        getData()
    },[user])

    return (
        <div>
            <h1>User id: {user.id} </h1>
            <strong>User: {user.name} </strong><i></i>
            <br />
            <strong>User email : {user.email}</strong><i></i>
            <br /><br />
            <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
        </div>
    )
}

export default User;


