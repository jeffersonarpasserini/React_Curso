import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Componentes
import MyComponent from './components/MyComponent'
import TitleComponent from './components/TitleComponent'

//Styles
import './App.css'

function App() {
  const n =15
  const [name, setName] = useState('teste')
  const redTittle = false
  return (
      <div>
        {/* css globol */}
        <h1>CSS com React</h1>
        <MyComponent />
        <p>Este paragrafo é do app.jsx</p>

        {/* css in line */}
        <p style={{color: "blue", padding: "25px", borderTop: "20ppx solid red"}}>Este elemento foi utiilzado de forma inline</p>
      
        {/* css inline dinamico */}
        <h2 style={n>10 ? ({color: "purple"}) : ({color: "pink"}) }>
            CSS Dinamico
        </h2>
        <h2 style={name==="teste" ? ({color: "green", backgroundColor: "#000"}) : null }>
            CSS Dinamico 2
        </h2>
        {/* css classe dinamica */}
        <h2 className={redTittle ? "red-tittle" : "tittle"}>
            CSS classe dinamica
        </h2>
        {/* css modules */}
        <TitleComponent />
      </div>
  )
}

export default App
