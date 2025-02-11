import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForms from './components/MyForms'

function App() {
  

  return (
      <div>
        <h2>Forms</h2>
        <MyForms user={{ name: "Josias", 
                        email: "josias@gmail.com", 
                        bio: " fsjf slksaj lajflkasjf jdfa aslkdj lkasj sadl jsdlkfj skljf alskj lsdjflksrueljfalj akljfadklsjf klaj alkjflksadjfklas jf lkajlkfjalfkj alkfja aklsj kl", 
                        role: "user" }}/>
      </div>
  )
}

export default App
