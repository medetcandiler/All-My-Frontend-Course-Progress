const isloggedIn= true 

const myPersonalInfo= {
    fname: 'medet',
    lname: 'diler',
    age : 27,
    languages: ['en', 'tr'],
    fullInfo : function(){
        return `my name is ${this.fname} ${this.lname}...`
    }
}



export {isloggedIn, myPersonalInfo}
