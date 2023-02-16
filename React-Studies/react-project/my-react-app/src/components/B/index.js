import style from './style.module.css'
import React from "react";

const B = () => {
    console.log('B',style)
    return(
        <React.Fragment>
            <h2 className={style.title}>It is my B component as well as A component</h2>
        </React.Fragment>
    )
}

export default B;