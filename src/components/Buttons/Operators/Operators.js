import classes from './Operators.module.css'

export default function Operators(props) {
  let opArr = []
  for (let i of [ '+', '*', '/', '-']) {
    opArr.push(
      <button className={(i==='+') ? classes.OpButton + ' ' + classes.Row2 : classes.OpButton} key={i} onClick={() => props.doStuff(props.currResult + i)}>{i}</button>
    )
  }
  return (
    <div className={classes.Operators}>
      {/* <button onClick={() => props.doStuff(props.currResult + '+')}>+</button>
      <button onClick={() => props.doStuff(props.currResult + '-')}>-</button>
      <button onClick={() => props.doStuff(props.currResult + '*')}>*</button>
      <button onClick={() => props.doStuff(props.currResult + '/')}>/</button> */}
      <button className={classes.OpButton} onClick={() => props.clear()}>C</button>
      { opArr }
      {/* <button onClick={() => props.equals(props.currResult)}>=</button> */}
    </div>
  )
}
