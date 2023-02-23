import React, { useEffect, useMemo, useState } from 'react';
import Header from './header';



function Main({ text, setText, setDatas }) {
    const [number, setNumber] = useState(0);

    const data = useMemo(() => {
        return getDataFromSomeWhere(number)
    },[number])
    return (
        <>
            <Header
                data={data}
            />
            <h1>{number}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Increase</button>
            <br /><br />
            <hr />
            <form action="#" onSubmit={(e) => {
                setDatas(prev => [...prev, text]);
                e.preventDefault();
                setText('');
            }}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </>
    )
}

function getDataFromSomeWhere(param){
    console.log('calculating...');
    for(let i=0 ; i < 100000000 ; i++){}
    console.log('calculated')
    return{
        name: 'medet',
        param
    }
}

export default React.memo(Main)
