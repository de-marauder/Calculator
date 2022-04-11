import Numbers from "./Numbers/Numbers"
import Operators from "./Operators/Operators"

import classes from './Buttons.module.css'

const Buttons = (props) => {
    console.log(props.currResult)
    return (
        <div className={classes.Buttons}>
            <Numbers equals={props.equals} currResult={props.currResult} doStuff={props.doStuff} />
            <Operators  clear={props.clear} currResult={props.currResult} doStuff={props.doStuff} />
        </div>
    )
}

export default Buttons