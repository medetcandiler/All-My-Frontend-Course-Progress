import {useState} from 'react'; 



function Friend(){
    const[friends, setFriends] = useState(['ahmet', 'mehmet'])
    return(
        <div className="container">
            <h1>Friends</h1>
            {friends.map((item, i) => {
                return(
                    <div key={i}>{item}</div>
                )
            })}
            <button onClick={() => setFriends([...friends, 'medet'])}>Add new friend</button>
        </div>
    )
}
export{
    Friend
}

