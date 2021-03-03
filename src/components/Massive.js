
const { useState } = require("react")
function Massive(){
    const [massive, setMassive] = useState([<li>Apple</li>, <li>Banana</li>]);
    const [list, setList] = useState("");

    return <div className="example-5">
            <ul>{massive}</ul>
            <input type="text" onInput={(event) => setList(event.target.value.trim())}/>
            <button onClick={(event) => setList(massive.push(<li>{list}</li>))}>Add</button>
            <button onClick={(event) => setList(massive.pop(<li>{list}</li>))}>Del</button>
    </div>  
}
export default Massive;
