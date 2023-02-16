import React from 'react';
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';

const User = () => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( data => setDatas(data))
        .catch(err => console.log(err))
        .finally(setIsLoading(false))
    },[])


    return (
        <>
            <div>
                <h1>Users</h1>
                { isLoading && <div>Loading...</div>}
                {datas.map( (el, i) => {
                        return(
                            <div key={el.id}>
                                {el.name}
                            </div>
                            )})}
            </div>
        </>
    );
}

export default User;