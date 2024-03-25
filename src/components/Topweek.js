import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";
import React from 'react'

const Topweek = () => {
    return (
        <div className='my-3'>
            <h1
                className='text-2xl font-semibold text-blue-500 dark:text-gray-200'
            >
                Top 10 movies of the week
            </h1>
            <Splide
                options={{
                    perPage: 4,
                    gap: 30,
                    drag: "free"
                }}
            >
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/2147803976.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/2148470173.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/copy-space-movie-time-with-popcorn.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/pxfuel.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/2147803976.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/2148470173.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/copy-space-movie-time-with-popcorn.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='container h-80'>
                        <img src="./src/images/pxfuel.jpg" alt='img' className='h-full' />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Topweek