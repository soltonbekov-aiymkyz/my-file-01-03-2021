// const Person = ({name,age,children}) => {
//     return ( <div style={
//         {
//          boxShadow:"0 0 10px , black",
//          borderRadius:"10px",
//          padding:"15px",
//          paddingTop:"5px",
//          margin:"10px",
//          display:"inline-block",
//         }
//     }>
//         <h2>{ name }</h2>
//         <h4> {age } years old</h4>
//         <h5>{ children }</h5>
//     </div> );
// }
 
// export default Person;

import classes from "./Person.module.css";
const Person = ({ name, age, children }) => {
    return (<div className={classes.Person}>
        <h2>{ name }</h2>
        <h4 className={classes.age}>{ age } years old</h4>
        <h5>{ children }</h5>
      <span className="highlight">Hello</span>
    </div>);
}
export default Person;