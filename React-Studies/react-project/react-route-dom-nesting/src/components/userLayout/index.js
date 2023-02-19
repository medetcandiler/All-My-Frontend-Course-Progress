import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


function UserLayout() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        }
        getData()
    }, [])

    return (
        <>
            <div>
                <br />
                <ul>
                    {users.map(el => (
                        <li key={el.id}>
                            <Link to={`/users/${el.id}`}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <hr />
            <br />
            <Outlet context={ users } />
        </>
    )
}

export default UserLayout;
