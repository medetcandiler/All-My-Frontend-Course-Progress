import React, { useContext } from 'react';
import UserContext from '../context/userContext';


function ListItem() {
    const { user, setUser } = useContext(UserContext)

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
