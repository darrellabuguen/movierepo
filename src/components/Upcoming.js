import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

const Upcoming = () => {
    return (
        <div>
            <Splide
                options={{
                    pagination: false
                }}
            >
                <SplideSlide>
                    <img src="./src/images/2147803976.jpg" alt='img' className='h-full' />
                </SplideSlide>
                <SplideSlide>
                    <img src="./src/images/2148470173.jpg" alt='img' />
                </SplideSlide>
                <SplideSlide>
                    <img src="./src/images/copy-space-movie-time-with-popcorn.jpg" alt='img' />
                </SplideSlide>
                <SplideSlide>
                    <img src="./src/images/pxfuel.jpg" alt='img' />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Upcoming