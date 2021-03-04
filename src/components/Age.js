
import { useState } from "react";
function Age() {
    const [age, setAge] = useState("");
    return (
        <div className="Age">
            <h1>Your age  is "{age}"</h1>
            <input
                type="number"
                value="number"
                placeholder="number"
              //  onInput={(event) => setAge(event.target.value.trim())} />
                onInput={(event) => setAge(event.target.value)} />
        </div>
    );
}
export default Age;

