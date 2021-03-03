import { useState } from "react";
/*
function Switch() {
    let state = true;

    return(
        <div className="Switch">
           <h1>on</h1>
           <button onClick={()=>("hello")}>Toggle</button>
        </div>
    )
}
export default Switch;
*/
//use state bozvrashaet massiv iz dvux elementa
//state hranit sostayanii 
//stete = false
//setState (true)funksii peremennyh my mozem zadavat 


/*
function Switch() {
    let state = false;

    return(
        <div className="Switch">
           <h1>{state ? "on" : "off"}</h1>
           <button onClick={()=>
            ("hello")}>Toggle</button>
        </div>
    )
}
export default Switch;
*/

function Switch({title}) {
    const [state, setState ] = useState(true)
    return(
        <div className="Switch">
           <h1>{title}-{state ? "on" : "off"}</h1>
           <button onClick={()=>
            ("hello")}>Toggle</button>
        </div>
    )
}
export default Switch;

