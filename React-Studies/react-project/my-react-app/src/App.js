import './App.css';
import React from 'react';
// import {Header ,Indicator, myPersonalInfo, isLoggedIn} from './newComponents/header'
import Car from './components/props'
import User from './components/user'


const address={
    title: 'Kartal/Istanbul',
    zip: 34862,
    country: 'Turkiye'
}
const friends= [
    {   
        id:1,
        name:'medet'
    },
    {
        id:2,
        name: 'trying'
    },
    {
        id:3,
        name: 'jhon'
    }

]

const car={
    cars: ['toyota', 'mercedes', 'bmw'],
    model: 'SUV'
}
const numbers=[30, 40, 50, 60, 100]

function App(){
    return(
        <React.Fragment>
            <User 
            lname='diler'
            age={'27'}
            address={address}
            friends={friends}
            />
            <Car 
            owner={false}
            car={car}
            score={numbers}
            // isCarExist={false}
            />
        </React.Fragment>
    );
}


export default App;