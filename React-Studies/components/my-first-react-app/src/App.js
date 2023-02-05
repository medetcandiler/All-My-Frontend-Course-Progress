import './App.css';
import React from 'react';
// import {Header ,Indicator, myPersonalInfo, isLoggedIn} from './newComponents/header'
import {comment, Comment, formatDate} from './newComponents/hello-kitty'
import User from './newComponents/user'


const address={
    title: 'Kartal/Istanbul',
    zip: 24334,
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

function App(){
    return(
        <React.Fragment>
            <Comment 
                date={comment.date}
                text ={comment.text}
                author={comment.author}
            />
            <User 
            fname='medetcan'
            lname='diler'
            age={'27'}
            isLoggedIn={true}
            address={address}
            friends={friends}
            />
        </React.Fragment>
    );
}


export default App;
