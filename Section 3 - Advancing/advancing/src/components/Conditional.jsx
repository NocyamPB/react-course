import { useState } from "react";

const Conditional = () => {
    
    const [x] = useState(true);
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Isso vai renderizar?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso.</p>}
            <h2>IF Ternário</h2>
            {name === "João" ? (
                <div>
                    <p>O nome é João.</p>
                </div>
            ) : (
                <div>
                    <p>O nome não foi encontrado.</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Mudar nome</button>
        </div>
    )
}

export default Conditional