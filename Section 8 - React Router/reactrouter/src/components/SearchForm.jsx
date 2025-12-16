import './SearchForm.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchForm = () => {
    const [query, setQuery] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Digite aqui sua busca...'
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type='submit'>Buscar</button>
        </form>
    )
}

export default SearchForm