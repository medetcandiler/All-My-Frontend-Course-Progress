import React from 'react';
import '../../../App.css'

function List( {listItem} ){
    return (
        <div>
            <ul>
                {
                    listItem.map( (item,i) => {
                        return(
                            <li key={i}>
                                <strong>Name:</strong>{item.fname}    <strong>Number:</strong>{item.phoneNumber}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List; 