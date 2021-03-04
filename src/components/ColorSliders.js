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

/*
import { useState } from "react";

function ColorSliders() {
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
    return (
        <div className="ColorSliders"  style={{ backgroundColor: rgb(${r}, ${g}, ${b}) }}>
            <div >
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
export default ColorSliders;*/

import { useState } from "react";

function ColorSliders({ valueA, valueG, valueB }) {
    const [number1, setNumber1] = useState(valueA ?? "");
    const [number2, setNumber2] = useState(valueG ?? "");
    const [number3, setNumber3] = useState(valueB ?? "");
    return (
        <div className="ColorSliders" style = {{backgroundColor: `rgb(${number1}, ${number2}, ${number3})`, padding: 10 + "px"}}>
            <input
                type="range"
                min = {0}
                max = {255}
                value = {number1}
                onInput={(event) => setNumber1(event.target.value)} />
            <br></br>
            <input
                type="range"
                min = {0}
                max = {255}
                value = {number2}
                onInput={(event) => setNumber2(event.target.value)} />
                <br></br>
            <input
                type="range"
                min = {0}
                max = {255}
                value = {number3}
                onInput={(event) => setNumber3(event.target.value)} />
        </div>
    );
};
export default ColorSliders;