import './App.css';
import Header, {Indicator} from './newComponents/header'

const myPersonalInfo= {
    fname: 'medet',
    lname: 'diler',
    age : 27,
    languages: ['en', 'tr'],
    fullInfo : function(){
        return `my name is ${fname} ${lname}...`
    }
}

const { fname, lname, fullInfo} = myPersonalInfo;
const isloggedIn =true;

function App(){
    // return(
    //     React.createElement('div', null, 'hello')
    // )
    return(
        <>
            <Header />
            <Indicator />
            <p className='myPClass'>
                { isloggedIn ?  fullInfo() : 'giris yapilmadi'}
            </p>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </>
    );
}


export default App;
