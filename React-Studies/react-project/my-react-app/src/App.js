import './App.css';
import React from 'react';
import A from './components/A'
import B from './components/B'
// import {Header ,Indicator, myPersonalInfo} from './components/header'
// import Car from './components/props'
// import User from './components/user'


// const address={
//     title: 'Kartal/Istanbul',
//     zip: 34862,
//     country: 'Turkiye'
// }
// const friends= [
//     {   
//         id:1,
//         name:'medet'
//     },
//     {
//         id:2,
//         name: 'aybis'
//     },
//     {
//         id:3,
//         name: 'jhon'
//     }



// const car={
//     cars: ['toyota', 'mercedes', 'bmw'],
//     model: 'SUV'
// }
// const numbers=[30, 40, 50, 60, 100]

function App(){
    return(
        <React.Fragment>
            <A />
            <B />
        </React.Fragment>
    );
}


export default App;