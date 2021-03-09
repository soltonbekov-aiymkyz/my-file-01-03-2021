
import Switch from "./components/Switch";
import Counter from "./components/Counter";
import Name from "./components/Name";
import Inputlength from "./components/InputLength";
import Inputcolor from "./components/Inputcolor";
import InputRange from "./components/InputRange";
import InputRate from "./components/InputRate";
import Temps from "./components/Temps";
import Style from "./components/Style";
import StyleColor from "./components/StyleColor";
import Hooki from "./components/Hooki";
import Age from "./components/Age";
import Number from "./components/Number";
import ColorSliders from "./components/ColorSliders";
function App() {
  return (
    <div className="App">
      { <h1 style={{ color: "red" }}  >hello</h1>}
      <Switch title="wi fi" />
      <Counter />
      <Name />
      <Inputlength />
      <Inputcolor />
      { <InputRange min={0} max={10} value={3} />}
      <InputRate />
      <Temps />
      <Style />
      <StyleColor />
      <Hooki />
      <Age />
      <Number />
      <ColorSliders />
    </div>
  )
};
export default App;
