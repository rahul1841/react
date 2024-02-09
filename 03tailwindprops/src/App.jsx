import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Rahul",
    age: 20
  }

  let myArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-blue-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="React with Rahul" btnText="Click me" someObj={myObj} someArr={myArr}/>
    <Card username="React with Chai" btnText="Visit me" />
    </>
  )
}

export default App
