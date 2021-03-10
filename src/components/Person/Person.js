import classes from "./Person.module.css";
import "./App.css"
const Person = ({ name, age, children }) => {
    return (<div className={classes.Person}>
        <h2 className={classes.name}>{ name }</h2>
        <h4 className={classes.age}>{ age } years old</h4>
        <h5 className={classes.hoby}>{ children  }</h5>
      <span className="highlight">Hello</span>
    </div>);
}
export default Person;