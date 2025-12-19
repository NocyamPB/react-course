import './App.css'

// 1 - Configuração do React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {

  return (
    <div>
        <h1>React Router</h1>

        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />

            <Route path='/products/:id' element={<Product />} />
            <Route path='/products/:id/info' element={<Info />} />
            <Route path='/search' element={<Search />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App