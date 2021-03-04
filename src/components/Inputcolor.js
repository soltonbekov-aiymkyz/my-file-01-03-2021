/*
import { useState } from "react";

function InputTypeColor(params) {
     let [TypeColor] = useState (0);
     return(
         <div>
             <h1>{color}</h1>
             <input  onInput={(color) => (value.color )} />
 </div>
     )
}
export default Color;
*/
/*
import { useState } from "react";

function Color({ value }) {
    const [color, setColor] = useState(value ?? "");
    return (
        <div className="Color">
            <input
                type="text"
                value={color}
                onInput={(event) => setText(event.target.value)} /> {text.color}
        </div>
    );
}
export default Color;
*/

// import { useState } from "react";
const { useState } = require("react")
function Inputcolor({value}){
    const [color, setColor] = useState(value ?? "#000000");
    return <div className="example-5">
            <p>{color}</p>
            <input type="color" onInput={(event) => setColor(event.target.value)}/>
    </div>   
}
export default Inputcolor;
