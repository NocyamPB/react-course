import './App.css'

// 1 - Configuração do React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {

  return (
    <div>
        <h1>React Router</h1>

        <BrowserRouter>
          {/* 2 - Links com React Router */}
          <Navbar />
          {/* 9 - Search Params */}
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - Rota dinâmica com Parâmetro */}
            <Route path='/products/:id' element={<Product />} />
            {/* 6 - Nested Routes */}
            <Route path='/products/:id/info' element={<Info />} />
            {/* 9 - Search params */}
            <Route path='/search' element={<Search />} />
            {/* 10 - Redirect */}
            <Route path='/company' element={<Navigate to="/about" />} />
            {/* 7 - No match route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
