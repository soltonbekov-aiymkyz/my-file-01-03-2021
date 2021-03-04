import { useState } from "react";

function Inputlength(params) {
     let [a, b] = useState (0);
     return(
         <div>
             <h1>{a}</h1>
             <input  onInput={(e) => b(e.target.value.length )} />
 
 </div>
     )
}
export default Inputlength;

/*
import { useState } from "react";

function InputLength({ value }) {
    const [text, setText] = useState(value ?? "");
    return (
        <div className="InputLength">
            <input
                type="text"
                value={text}
                onInput={(event) => setText(event.target.value)} /> {text.length}
        </div>
    );
}
export default InputLength;
*/