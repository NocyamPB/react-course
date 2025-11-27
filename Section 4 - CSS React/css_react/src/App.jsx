import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'
import Title from './components/Title'

function App() {
  const n = 15
  const [name, setName] = useState('Matheus')
  const redTitle = true

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MyComponent />
      <p>Este é o parágrafo do App. Note como ele pega regras CSS do MyComponent</p>

      {/* CSS inline */}
      <p style={{ color: 'red', backgroundColor: 'yellow', padding: '10px', borderTop: '2px solid red', borderBottom: '2px solid red' }}>Este é o parágrafo com CSS inline. Evitar este tipo de CSS.</p>

      {/* CSS inline  dinâmico */}

      <h2 style={
        n > 10 ? { color: 'purple' } : { color: 'pink' }
      }>CSS Inline Dinâmico - Número</h2>

      <h2 style={
        n < 10 ? { color: 'purple' } : { color: 'pink' }
      }>CSS Inline Dinâmico - Número</h2>

      <h2 style={
        name === 'Matheus' ? { color: 'blue' } : null
      }>CSS Inline Dinâmico - Nome</h2>

      {/* CSS Classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título tem Classe Dinâmica</h2>
      <h2 className={!redTitle ? 'red-title' : 'title'}>Este título tem Classe Dinâmica</h2>

      {/* CSS Modules */}
      <Title />
      <h1 className='my_title'> Este Título não consegue utilizar CSS Modules pois o módulo é scoped </h1>
    </>
  )
}

export default App
