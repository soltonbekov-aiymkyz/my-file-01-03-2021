/*
import { useState } from "react";

function InputRange({ value, min, max }) {
    const [number, setNumber] = useState(value ?? 0);
    return (
        <div className="InputRange">
            <input
                type="range"
                min={min}
                max={max}
                value={number}
                onInput={(event) => setNumber(event.target.value)} /> {number}/{max}
        </div>
    );
}
export default InputRange;*/


import { useState } from "react";

function ColorSliders() {
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
    return (
        <div className="ColorSliders"  style={{ backgroundColor: rgb(${r}, ${g}, ${b}) }}>
            <div>
                <input type="range" value={r} min="0" max="255" onInput={({target}) => setR(target.value)} />
            </div>
            <div>
                <input type="range" value={g} min="0" max="255" onInput={({target}) => setG(target.value)} />
            </div>
            <div>
                <input type="range" value={b} min="0" max="255" onInput={({target}) => setB(target.value)} />
            </div>
        </div>
    );
}
export default ColorSliders;