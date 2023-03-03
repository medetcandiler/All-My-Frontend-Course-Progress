import { send } from "../socketApi";

function Palette({color, setColor}) {
  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="submit" value="Submit" onClick={()=>send(color)}/>
    </div>
  );
}

export default Palette;
