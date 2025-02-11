import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge2 from './components/Challenge2'
import Challenge from './components/Challenge'

//styles
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleShowChallenge = () => {
    alert(`Soma de Valores 10 e 20: ${10 + 20}`);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <div>
        <button onClick={handleShowChallenge}>Soma de Valores 10 e 20</button>
      </div>
      <Challenge2 />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
