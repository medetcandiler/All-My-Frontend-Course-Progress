import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLogging, setIsLogging] = useState(true); 

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(err => console.log(err))
            .finally(() => setIsLogging(false));
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {isLogging && <div>Loading...</div>}
                {users.map( el => {return(
                    <li key={el.id}>
                        <Link to={`/user/${el.id}`}>{el.name}</Link>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Users

