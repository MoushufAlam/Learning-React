import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// this way to pass if used <MyApp/>
function MyApp(){
  return (
    <h1>
      Hello world !
    </h1>
  )
}

// to use this Use : anotherElement
//since this is treated as object it is passed without ()
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const username = "Moushuf Alam"

// to pass this use functional method without ()
const reactElement = React.createElement(
  'a', //first one is tag
  {href:'https://google.com',target:'_blank'}, //object
  'Click me to visit google', // innerText
  //now goes the evaluation statement
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
