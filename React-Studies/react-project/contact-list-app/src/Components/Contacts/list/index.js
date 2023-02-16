import { useState } from 'react';



function List( {contact} ){
    const [filter, setFilter] = useState('');
    const [showNumber, setShowNumber ] = useState(true);
   
    

    const filtered = contact.filter( item => {
        return (
            Object.keys(item).some ( (key) => 
                item[key].toString().toLowerCase().includes(filter.toLowerCase()))
        )})
    
    

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
                        return <li 
                        key={i}
                        onClick={() => setShowNumber(!showNumber)}>
                            {
                                showNumber ? <span className='single'>{item.fname}</span> : 
                                <span className='double'>
                                     {item.fname} <i>{item.phoneNumber}</i>
                                </span>
                            }
                        </li>
                    })
                }
            </ul>
            <p className="contactAmount">Total Contact ({filtered.length})</p>
        </div>
    )
}

export default List; 





// {mouseClick ? 
//     <span className='false'>
//         {item.fname} : {item.phoneNumber} 
//         <i onClick={() => deleteContact(item.id)} class="fa-solid fa-xmark"></i>
//     </span> 
//     : 
//     <span className='false'>
//         {item.fname}
//     </span>}


