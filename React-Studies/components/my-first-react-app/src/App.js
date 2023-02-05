import './App.css';
import {Header ,Indicator} from './newComponents/header'
import { isloggedIn, myPersonalInfo } from './newComponents/user-info';





function App(){
    // return(
    //     React.createElement('div', null, 'hello')
    // )
    return(
        <>s
            <Header />
            <Indicator />
            <p className='myPClass'>
                { isloggedIn ?  myPersonalInfo.fullInfo() : 'giris yapilmadi'}
            </p>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </>
    );
}


export default App;
