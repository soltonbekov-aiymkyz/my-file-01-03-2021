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
