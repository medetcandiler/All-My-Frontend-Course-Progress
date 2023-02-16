import style from './style.module.css'
import React from "react";


const A = () => {
    console.log('A',style)
    return(
        <React.Fragment>
            <h1 className={style.title}>Here is my A component.</h1>
        </React.Fragment>
    )
}

export default A;