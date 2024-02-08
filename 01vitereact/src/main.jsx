import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
      <h1>CuStom App</h1>
    </div>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherOne = "chai aur chai"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me to visit google',
  anotherOne
)



ReactDOM.createRoot(document.getElementById('root')).render(

    //<App />
   //< MyApp/>
    //reactElement
    //anotherElement
    reactElement

   // <App />
    




)
