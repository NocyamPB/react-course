import { useState } from 'react'

const ManageData = () => {
    let n = 10;
    console.log(n);

    const [x, setX] = useState(10);
    console.log(x);

    return (
        <div>
            <h2>Manage Data</h2>

            <div>
                <p>Valor: {n}</p>
                <button onClick={() => ( n = 15 )}>Mudar Valor</button>
            </div>

            <div>
                <p>Valor: {x}</p>
                <button onClick={() => setX(x + 1)}>Adicionar ao Valor</button>
            </div>
        </div>
    )
}

export default ManageData