import {useState} from 'react'
import Gallery from './components/gallery';
import {Hello} from './components/hello-world';
import {Friend} from './components/friends';
import Form from './components/form-sample'
import Counter from './components/counter'

function App() {
    const[address, setAddress] = useState({
        title:'istanbul',
        zip:3434,
        country:'turkiye'
    })
   return(
    <>
        <Counter />
        <br />
        <hr />
        <br />
        <Gallery />
        <hr />
        <Hello />
        <br />
        <hr />
        <Friend />
        <hr />
        <Form />
        <hr />
        <h2>Address</h2>
        <div>
            {address.country} / {address.title} / {address.zip}
            <br />
            <button  onClick={()=> setAddress({...address, zip: 454545, title:'ankara'})}>Change Address Title</button>
        </div>
    </>
   )
}

export default App;

