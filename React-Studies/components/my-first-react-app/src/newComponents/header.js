function Header(props){
    return(
        <nav>
            <h2>welcome my first react header component I will create whole page by using a lot of component in the future. Wait for that and I am aware of that you cannot wait... </h2>
        </nav>
    );
}

function Indicator(){
    return(
        <div className="container">
            <p>
                {new Date().getFullYear()}
            </p>
        </div>
    );
}

const isLoggedIn =  false

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
    isLoggedIn
}