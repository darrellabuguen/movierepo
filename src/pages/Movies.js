import React from 'react'
import { useNavigate } from 'react-router-dom'
import Random from '../components/Random';
import useFetch from '../components/useFetch'

const Movies = () => {
    const navigate = useNavigate();
    const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, "GET");

    return (
        <div
            className='mx-auto max-w-7xl p-6 lg:px-8 max-sm:px-2'
        >
            {/* <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
                {data.map((isrc) => {
                    ex_id++;
                    return (
                        <div key={ex_id} className='container'>
                            <img src={isrc} alt='img' className='h-full' />
                        </div>
                    )
                })}
            </div> */}
            {loading && <div>Loading...</div>}
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
            <Random />
        </div>
    )
}

export default Movies