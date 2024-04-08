import React from 'react'
import useFetch from '../components/useFetch'

const About = () => {
    const options = {
        method: `GET`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    };
    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users', options);
    return (
        <div
            className='mx-auto max-w-7xl  p-6 lg:px-8'
        >
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                data.map((user) => {
                    return (
                        <li
                            key={user.id}
                        >
                            {user.name}
                        </li>
                    )
                })
            )}
        </div>
    )
}

export default About