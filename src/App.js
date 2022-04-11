import { useState } from 'react';

import Buttons from './components/Buttons/Buttons'
import classes from './App.module.css'

function App() {

  const [result, setResult] = useState('')
  console.log('App: ', result)

  const equals = (result) => {
    setResult(Function(result))
  }
  const clear = (result) => {
    setResult('')
  }
  return (
    <div className={classes.App}>
      <div className={classes.Calculator}>
        <h1 className={classes.Title}>De_marauder's Calc</h1>
        <input className={classes.ResultDisplay} onChange={(e)=>setResult(e.target.value)} value={result} />
        <Buttons equals={equals} clear={clear} currResult={result} doStuff={setResult} />
      </div>
    </div>
  );
}

export default App;
