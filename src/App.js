import { useState } from 'react';

import Buttons from './components/Buttons/Buttons'
import classes from './App.module.css'

const ALLOWED_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '*', '-', '/', '.', ' ', '']

function App() {

  const [result, setResult] = useState('')
  console.log('App: ', result)

  const equals = (result) => {
    setResult(`${Function("return " + result)()}`)
  }
  const clear = () => {
    setResult('')
  }
  const updateResult = (e) => {
    console.log(result, e.target.value)

    if (e.target.value === '') {
      console.log("value = '' " )
    }
    if ((!(ALLOWED_KEYS.includes(e.target.value && e.target.value[e.target.value.length - 1]))) && (e.target.value !== '') ) {
      alert("Use the keys available on the calculator's keypad.")
      console.log("Key not allowed")
      return
    }
    setResult(e.target.value)
  }
  return (
    <div className={classes.App}>
      <div className={classes.Calculator}>
        <h1 className={classes.Title}>De_marauder's Calc</h1>
        <input className={classes.ResultDisplay} onChange={updateResult} value={result} />
        <Buttons equals={equals} clear={clear} currResult={result} doStuff={setResult} />
      </div>
    </div>
  );
}

export default App;
