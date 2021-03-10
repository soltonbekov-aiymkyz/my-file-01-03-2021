
import classes from "./Button.module.css";

const Button = ({ children }) => {
    return (<div className={classes.Button}>
        <button>Submit</button>
    </div>);
}
export default Button;
