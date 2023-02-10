import { useState } from 'react';
import Contacts from '..';


function List( {contact} ){
    const [mouseClick, setMouseClick] = useState(false)
    const [filter, setFilter] = useState('')

    function showNumber(){
        setMouseClick(!mouseClick)
    }


    const filtered = contact.filter( (item, i) => {
        return (
            Object.keys(item).some ( (key) => {
                return(
                    item[key].toString().toLowerCase().includes(filter.toLowerCase())
                )
            })
        )
    } )

    return (
        <div>
            <br />
            <i>Too see numbers click on names </i><br /><br />
            <input 
            placeholder='Serch For Data' 
            value={filter}
            onChange={ (e) => setFilter(e.target.value)}
            />            
            <ul className='list'>
                {
                    filtered.map( (item, i) =>{
                        return(
                            <li 
                            key={i}
                            onClick={showNumber}
                            >
                                {mouseClick ? <span className='false'>{item.fname} : {item.phoneNumber} </span> : <span className='false'>{item.fname}
                                 </span>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List; 








