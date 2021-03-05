
import { useState } from "react";
function Rotate() {
    
    const [rotate , setRotate] = useState(0);
    return (
        <div className="Rotate"  style={{ transform: `rotate(360dg)`,padding:14 + "px" }}>
            <div>
                <input type="range" value={Rotate} min="0" max="255" onInput={({target}) => setRotate(target.value)} />
            </div>
        </div>
    );
}
export default Rotate;





import { useState } from "react";
function Rotate() {
    
    const [rotate , setRotate] = useState(0);
    return (
        <div className="Rotate"  style={{    transform: `rotate(360dg)`,padding:14 + "px" }}>
            <div>
                <input type="range" value={Rotate} min="0" max="255" onInput={({target}) => setRotate(target.value)} />
            </div>
        </div>
    );
}
export default Rotate;


