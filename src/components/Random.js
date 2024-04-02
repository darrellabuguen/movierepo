import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useEffect, useState } from 'react'

const Trending = () => {
    const img_src = ['./src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg', './src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg'];
    const [contWidth, setWidth] = useState("");
    const [item_gap, setGap] = useState("");
    var ex_id = 0;

    const setWidthAndGap = (width) => {
        let widthh, gap;
        if (width < 750) {
            widthh = "8rem";
            gap = "0.2rem";
        } else {
            widthh = "15rem";
            gap = "1.5rem";
        }
        setWidth(widthh);
        setGap(gap);
    };

    const checkScreen = () => {
        const { innerWidth } = window;
        setWidthAndGap(innerWidth);
    };

    useEffect(() => {
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    });


    return (
        <div className='my-3'>
            <h1
                className='text-2xl font-semibold text-blue-500 dark:text-gray-200'
            >
                Random
            </h1>
            <Splide
                options={{
                    autoWidth: true,
                    gap: item_gap,
                    drag: "free",
                    pagination: false,
                    snap: true,
                }}
            >
                {img_src.map(image => {
                    ex_id++;
                    return (
                        <SplideSlide key={ex_id}>
                            <div className='container'
                                style={{
                                    width: contWidth
                                }}
                            >
                                <img src={image} alt='img' className='h-full max-md:w-64' />
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
            <div className='text-right text-blue-500'>
                <button>
                    View more
                </button>
            </div>
        </div >
    )
}

export default Trending