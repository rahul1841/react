import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
