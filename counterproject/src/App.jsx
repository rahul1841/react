import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter, setCounter] = useState(0)

const addvalue = () => {
  if(counter < 20 ){
  setCounter(counter+1)
  }
  else{
    setCounter(0)
  }
}

const removevalue = () => {
  if(counter > 0 ){
  setCounter(counter-1)
  }
  else{
    setCounter(20)
  }
}

  return (
    <>

    <h1>Simple React Counter Project</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addvalue}>Add value</button>
    <br/>
    <br/>
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
