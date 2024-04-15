import React from 'react'
import useFetch from '../components/useFetch'
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const { data, loading, error } = useFetch();
    const navigate = useNavigate();

    return (
        <div
            className='mx-auto max-w-7xl p-6 lg:px-8 max-sm:px-2'
        >
            {loading &&
                <Loading />
            }
            {error && <div>{error}</div>}
            {data && (
                <>
                    <h1>Movies</h1>
                    <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:gap-2 max-sm:grid-cols-2'>
                        {
                            data.results.map(movie => {
                                return (
                                    <div
                                        key={movie.id}
                                        className='container flex flex-col justify-center items-center text-center cursor-pointer'
                                        onClick={() => {
                                            navigate(`/movies/movieinfo/${movie.id}`);
                                        }}
                                    >
                                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt='img' className='h-full' />
                                        <p>{movie.original_title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )}
        </div>
    )
}

export default Info