import {useState} from 'react'
// import Gallery from './components/gallery';
// import {Hello} from './components/hello-world';
// import {Friend} from './components/friends';
// import Form from './components/form-sample'
import Counter from './components/counter'


function App() {
    const[isVisible, setIsVisible] = useState(true)

   return(
    <div className="container">
        {isVisible && <Counter />}
        <button onClick={()=> setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>

    </div>
   )
}

export default App;

