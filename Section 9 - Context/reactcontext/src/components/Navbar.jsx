// 2 - Links com React Router
import { Link, NavLink } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        {/* A maior diferença entre a tag <a> e o Link é que o Link não atualiza a página, somente troca os componentes renderizados. A tag <a> atualiza a página sim.
        A diferença entre Link e NavLink é que o NavLink adiciona uma classe CSS ao elemento ativo. */}
        <NavLink to="/" 
          //className={({isActive}) => isActive ? 'active-link' : 'not-active-link'}
        >Início</NavLink>
        <NavLink to="/shop">Loja</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar