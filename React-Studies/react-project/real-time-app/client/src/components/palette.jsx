import { useState } from "react";
import { send } from "../socketApi";

function Palette({activeColor}) {
  const [color, setColor] = useState("#020202");
  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="submit" value="Submit" onClick={()=>send(color)}/>
    </div>
  );
}

export default Palette;
