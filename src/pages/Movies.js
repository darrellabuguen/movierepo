import React from 'react'
import Random from '../components/Random';
import useFetch from '../components/useFetch'

const Movies = () => {
    const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`);

    return (
        <div
            className='mx-auto max-w-7xl  p-6 lg:px-8'
        >
            <h1>Movies</h1>
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
                data.results.map(infos => {
                    return (
                        <p key={infos.id}>{infos.original_title}</p>
                    )
                })
            )}
            <Random />
        </div>
    )
}

export default Movies