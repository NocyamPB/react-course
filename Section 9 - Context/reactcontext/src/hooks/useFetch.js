import {useState, useEffect} from 'react';

// 4 - Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    // 5 - Refatorando o post
    const [method, setMethod] = useState(null);
    const [config, setConfig] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - Estado de loading
    const [loading, setLoading] = useState(false);

    // 8 - Tratando erros
    const [error, setError] = useState(null);

    // 9 - Desafio - Deletando um produto
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        }
        if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setItemId(data);
            setMethod(method);
        }
    };

    useEffect(() => {
        const fetchData = async () => {

            // 6 - Loading
            setLoading(true);

            // 8 - Tratando erros
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.log(error.message);
                setError('Houve algum erro ao carregar os dados!');
            }

            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    // 5 - Refatorando o post
    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (method === 'POST') {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                json = await res.json();
            }
            if (method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);
                json = await res.json();
            }
            setCallFetch(json);
        };
        httpRequest();
    }, [method, config, url]);

    return { data, httpConfig, loading, error };
}