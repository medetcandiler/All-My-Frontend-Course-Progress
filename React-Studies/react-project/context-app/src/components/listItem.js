import React, { useContext } from 'react';
import { useUser } from '../context/userContext';


function ListItem() {
    const { user, setUser } = useUser()

    return (
        <>
            {
                user.map( (el, i) => {return (
                    <li key={i}>
                        {el}
                    </li>
                )})
            }
        </>
    )
}

export default ListItem;
