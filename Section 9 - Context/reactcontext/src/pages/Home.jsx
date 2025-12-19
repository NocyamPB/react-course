import './Home.css';
//import { useContext } from 'react';
//import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

// 4 - Refatorando com custom hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - Context mais complexo
import { TitleColorContext } from '../context/TitleColorContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
    const { counter } = useCounterContext();

    // 5 - Context mais complexo
    const { color, dispatch } = useTitleColorContext();

    // 6 - Alterando context mais complexos
    const setTitleColor = (newColor) => {
        dispatch({ type: newColor });
    }

    return (
        <div>
            <h1 style={{ color }}>Loja de Produtos</h1>
            <p>Seja bem-vindo à nossa loja!</p>
            <p>Número de clientes que já visitaram nossa loja: {counter}</p>
            {/* 3 - Alterando o context */}
            <ChangeCounter />
            {/* 6 - Alterando context mais complexos */}
            <button onClick={() => setTitleColor('RED')}>Red</button>
            <button onClick={() => setTitleColor('BLUE')}>Blue</button>
            <button onClick={() => setTitleColor('GREEN')}>Green</button>
        </div>
    )
}

export default Home