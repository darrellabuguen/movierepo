import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

const Upcoming = () => {
    return (
        <div>
            <Splide
                options={{
                    pagination: true,
                    rewind: true,
                    autoplay: true,
                    pause: false,
                    interval: 6000
                }}
            >
                <SplideSlide>
                    <img src="./src/images/2147803976.jpg" alt='img' className=' h-full w-full' />
                </SplideSlide>
                <SplideSlide>
                    <img src="./src/images/2148470173.jpg" alt='img' className=' h-full w-full' />
                </SplideSlide>
                <SplideSlide>
                    <img src="./src/images/copy-space-movie-time-with-popcorn.jpg" alt='img' className=' h-full w-full' />
                </SplideSlide>
                <SplideSlide>
                    <img src="./src/images/pxfuel.jpg" alt='img' className=' h-full w-full' />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Upcoming