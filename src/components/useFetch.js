import { useState, useEffect } from "react"

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

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
    }, [url, options]);

    return { data, loading, error }
}

export default useFetch