import { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setDatas(res.data))
            .catch(err => console.log('err',err))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <h2>Users</h2>
            {isLoading && <div>Loading...</div>}
            {datas.map( el => <div key={el.id}>{el.name}</div>)}
        </>
    )
}

export default Users;