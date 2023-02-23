import { memo } from 'react'

function List({ users }) {
    console.log('list component has been Re-rendered')
    return (
        <>
            <ul style={{listStyle:'none', display:'flex', justifyContent:'center', margin:'1rem 5rem'}}>
                {
                    users.map(el => {return(
                        <li style={{border:'1px solid black', padding:'1rem'}} key={el.id}>
                            {el.name}
                        </li>
                    )})
                }
            </ul>
        </>
    )
}

export default memo(List);
