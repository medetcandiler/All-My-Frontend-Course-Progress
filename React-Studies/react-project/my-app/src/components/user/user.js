import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function User({ users }) {
    const [infos, setInfos] = useState({});
    const [isLogging, setIsLogging] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setInfos(res.data))
            .catch(error => console.log(error))
            .finally(() => setIsLogging(false))
    }, [id])


    return (
        <>
            <h1>User Detail</h1>
                {isLogging && <div>Loading...</div>}
            <code>
                {!isLogging && JSON.stringify(infos)}
            </code>
            <br />
            <Link to={`/user/${parseInt(id) + 1}`}> Next User ({parseInt(id) + 1})</Link>

        </>
    );
}

export default User;