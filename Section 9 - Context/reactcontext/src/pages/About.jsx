//import { useContext } from 'react';
//import { CounterContext } from '../context/CounterContext';

// 5 - Context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

// 4 - Refatorando com custom hook
import { useCounterContext } from '../hooks/useCounterContext';

const About = () => {

  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();
  
  return (
    <div>
      <h1 style={{ color }}>Sobre nós</h1>
      <h3>Número de clientes que já visitaram nossa loja: {counter}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at incidunt adipisci doloremque est natus, qui assumenda quae dolorum soluta nostrum repellendus, autem numquam corporis perferendis iusto. Quasi, voluptas eum.</p>
    </div>
  )
}

export default About