import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };
        setTimeout(() => {
            fetch(url, options, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data from the server')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetching aborted');
                    } else {
                        setLoading(false);
                        setError(err.message);
                    }
                });

            return () => abortCont.abort();
        }, 1000);
    }, [url]);

    return { data, loading, error }
}

export default useFetch