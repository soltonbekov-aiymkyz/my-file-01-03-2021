import { useState } from "react";
function Number() {
    const [number, setNumber] = useState(``)
    return (
        <div className="num">
            <h1>this number is  "{number}"</h1>
<input 
type="number"
placeholder="Number"
onInput={(event) => setNumber(event.target.value.trim())} />
</div>
    )
}
export default Number ;


