import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div>
      <h1>Formulários em React</h1>
      <MyForm user={{name: "João", email: "joao@example.com", bio: "Desenvolvedor", role: "admin"}}/>
    </div>
  )
}

export default App
