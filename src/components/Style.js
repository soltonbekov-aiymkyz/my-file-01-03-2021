import { useState } from "react";

function Style() {
    const [size,setSize]=useState(16)
return(
    <div className="Style" >
  <span style={{fontSize: size+"px"}}   >Example</span>
    <input
                type="number"
                value={size}
                onInput={(event) => setSize(event.target.value)} />
    </div>
)
}
export default Style;
