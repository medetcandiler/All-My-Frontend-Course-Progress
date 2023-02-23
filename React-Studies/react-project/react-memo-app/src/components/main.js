import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Header from './header';



function Main({ text, setText, setDatas }) {
    const [number, setNumber] = useState(0);

    const increment = useCallback(() => {
        return setNumber(prev => prev + 1)
    }, [])

    return (
        <>
            <Header
                increment={ increment}
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


export default React.memo(Main)
