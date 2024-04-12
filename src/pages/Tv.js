import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../components/useFetch'

const Tv = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useFetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', "GET");
    return (
        <div className='mx-auto max-w-7xl  p-6 lg:px-8'>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <>
                    <h1>TV</h1>
                    <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:gap-2 max-sm:grid-cols-2'>
                        {
                            data.results.map(telev => {
                                return (
                                    <div
                                        key={telev.id}
                                        className='container flex flex-col justify-center items-center text-center cursor-pointer'
                                        onClick={() => {
                                            navigate(`/tv/tvinfo/${telev.id}`);
                                        }}
                                    >
                                        <img src={"https://image.tmdb.org/t/p/w500/" + telev.poster_path} alt='img' className='h-full' />
                                        <p>{telev.original_name}</p>
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

export default Tv