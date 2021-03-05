
import { useState } from "react";
function InputRate() {
    const [number, SetDollar] = useState("");
    return (
        <div className="Name">
            <h1>$ "{number * 85}som"</h1>
            <input
                type="number"
                placeholder="number"
                value={number}
                onInput={(event) => SetDollar(event.target.value)} />
        </div>
    );
}
export default InputRate;

