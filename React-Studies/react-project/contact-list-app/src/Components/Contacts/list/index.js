import React from 'react';


function List( {listItem} ){
    return (
        <div>
            {listItem.map( (item, i) => {
                return (
                    <div key={i}> Name:{item.fname} Number:{item.phoneNumber}</div>
                )
            })}
        </div>
    )
}

export default List; 