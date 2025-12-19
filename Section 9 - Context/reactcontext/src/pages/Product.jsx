import { Link, useParams } from "react-router-dom"
import './Product.css';
import { useFetch } from "../hooks/useFetch";

const Product = () => {

    // 4 - Rota dinâmica com Parâmetro
    const { id } = useParams();

    // 5 - Carregamento de dados individual
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);

    return (
        <>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro!</p>}
            {loading && <p>Carregando dados...</p>}
            {product && (
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <p>R$ {product.price}</p>
                    {/* 6 - Nested Routes */}
                    <Link to={`/products/${product.id}/info`}>Mais Informações...</Link>
                </div>
            )}
        </>
    )
}

export default Product