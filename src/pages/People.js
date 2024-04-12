import React from 'react'
import useFetch from '../components/useFetch'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const { data, error, loading } = useFetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', "GET");
    return (
        <div
            className='mx-auto max-w-7xl  p-6 lg:px-8'
        >
            {loading &&
                <div className='animate-pulse grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:gap-2 max-sm:grid-cols-2'>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                    <div className='lg:h-96 sm:h-72 min-h-60 bg-gray-300'></div>
                </div>
            }
            {error && <div>{error}</div>}
            {data && (
                <>
                    <h1>People</h1>
                    <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:gap-2 max-sm:grid-cols-2'>
                        {
                            data.results.map(person => {
                                return (
                                    <div
                                        key={person.id}
                                        className='container flex flex-col justify-center items-center text-center cursor-pointer'
                                        onClick={() => {
                                            navigate(`/people/${person.original_name}/${person.id}`);
                                        }}
                                    >
                                        <img src={"https://image.tmdb.org/t/p/w500/" + person.profile_path} alt='img' className='h-full' />
                                        <p>{person.original_name}</p>
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

export default About