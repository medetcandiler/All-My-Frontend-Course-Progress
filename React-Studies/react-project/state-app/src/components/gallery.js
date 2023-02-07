import sculptureList from './sculpture';
import {useState} from 'react';

export default function Gallery(){
    const[ index , setIndex] = useState(0)
    const[ showMore, setShowMore] = useState(false)
    let sculpture =sculptureList[index]

    return(
        <>
            <button onClick={() => setIndex(index + 1)}>Next</button>
            <h1><i>{sculpture.name}</i> by {sculpture.artist} </h1>
            <h3> ({index+1} of {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} /><br />
            <button onClick={()=> setShowMore(!showMore)}>{ showMore ? 'hide' : 'show'} details</button>
            <p>{ showMore && sculpture.description }</p>
        </>
    )
}