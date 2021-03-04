import { useState } from "react";


function Name() {
    const [name, setName] = useState("");
    return (
        <div className="Name">
            <h1>Your name is "{name}"</h1>
            <input
                type="text"
                placeholder="Name"
                onInput={(event) => setName(event.target.value.trim())} />
        </div>
    );
}
export default Name;

