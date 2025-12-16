import { useParams } from "react-router-dom";
import './Info.css';

const Info = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Mais Informações do produto: {id}</h2>
            <p>Aqui estão mais informações sobre o produto.</p>
        </div>
    )
}

export default Info