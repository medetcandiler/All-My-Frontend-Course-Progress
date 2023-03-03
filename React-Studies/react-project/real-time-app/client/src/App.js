import './App.css';
import Palette from './components/palette';
import { init, subscribe } from './socketApi';
import { useEffect, useState } from 'react';


function App() {
  const [color, setColor ] = useState('#020202')

  useEffect(() => {
    init();

    subscribe((color)=>{
      setColor(color);
    });
  }, [])

  return (
    <div className="container" style={{backgroundColor:`${color}`}}>
      <Palette color={color} setColor={setColor} />
    </div>
  );
}

export default App;
