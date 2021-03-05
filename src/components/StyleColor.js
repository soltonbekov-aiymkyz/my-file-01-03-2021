import { useState } from "react";
function StyleColor() {
    const [color,setColor]=useState(16)
return(
    <div className="Style" >
  <span style={{Color: color}}   >Example</span>
    <input
                type="color"
                value={color}
                onInput={(event) => setColor(event.target.value)} />
    </div>
)
}
export default StyleColor;
