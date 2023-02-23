import React, { useMemo } from "react";

function Header({ increment }) {
    console.log("header component re-rendered");


    return (
        <>
            <code>
                Header
            </code>
            <br /><br />
            <button onClick={increment}>Increase</button>
            <hr />
        </>
    );
}

export default React.memo(Header);
