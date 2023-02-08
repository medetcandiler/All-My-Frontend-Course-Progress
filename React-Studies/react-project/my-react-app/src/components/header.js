import { useState } from "react";
import PropTypes from 'prop-types';

function Header(){
    return(
        <nav>
            <h2>welcome my first react header component I will create whole page by using a lot of component in the future. Wait for that and I am aware of that you cannot wait... </h2>
        </nav>
    );
}

function Indicator({date, personal}){
    return(
        <div className="container">
            <div>
                {date} {personal.fullInfo()}  
                <h2>{new Date().getFullYear()}</h2>
            </div>
        </div>
    );
}



const myPersonalInfo={
    fname: 'medet', 
    lname: 'diler',
    age: 27 ,
    fullInfo: function(){
        return `I am ${this.fname} ${this.lname}. I am ${this.age}`
    }

}
export {
    Indicator,
    Header,
    myPersonalInfo,
}

Indicator.propTypes={
    date: PropTypes.number,
    personal: PropTypes.shape({
        fname: PropTypes.string
    })
}

