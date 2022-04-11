import classes from './Numbers.module.css'

export default function Numbers(props) {
    let numbersArray = []
    for (let i = 0; i < 10; i++) {
        numbersArray.push(
            <button className={classes.NumButtons} key={i} onClick={() => props.doStuff(props.currResult + i)}>{i}</button>
        )
        if (i === 0) {
            numbersArray.push(
                <button className={classes.NumButtons} key={'.'} onClick={() => props.doStuff(props.currResult + '.')}>{'.'}</button>
            )
            numbersArray.push(
                <button className={classes.NumButtons} key={'='} onClick={() => props.equals(props.currResult)}>{'='}</button>
            )
        }
    }
    return (
        <div className={classes.Numbers}>
            {numbersArray.reverse()}
        </div>
    )
}
