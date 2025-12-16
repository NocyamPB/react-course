import './Search.css';
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Search = () => {
    const [searchParams] = useSearchParams();
    
    const url = "http://localhost:3000/products?" + searchParams;
    console.log(url);

    const {data: items, error} = useFetch(url);

    return (
        <div>
            <h2>Resultados disponíveis</h2>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>R$ {item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search