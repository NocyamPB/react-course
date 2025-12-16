import { useState, useEffect } from 'react';
import './App.css';

// 4 - Custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);

  // 4 - Utilizando o custom hook
  const { data:items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 1 - Resgatando dados da API
  //useEffect(() => {
  //    async function fetchData() {
  //      const res = await fetch(url);
  //      const data = await res.json();
  //      setProducts(data);
  //    }
  //    fetchData();
  //}, []);

  // 2 - Adicionando dados na API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    
    //const res = await fetch(url, {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify(product),
    //});
    // 3 - Carregando dinâmico após o POST
    //const addedProduct = await res.json();
    //setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando o post
    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  }

  // 9 - Desafio - Deletando um produto
  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="main-container">
      <h1>Lista de Produtos</h1>

      {/* 6 - Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && 
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price} <button onClick={() => handleDelete(product.id)}>X</button>
          </li>
        ))}
      </ul>}
      
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* 7 - State de loading no post */}
          {loading ? <button disabled>Aguarde</button> : <button type="submit">Adicionar Produto</button>}
        </form>
      </div>
    </div>
  )
}

export default App
