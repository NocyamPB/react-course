import './ChangeCounter.css';
// 3 - Alterando context
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Adicionar cliente</button>
        </>
    )
}

export default ChangeCounter