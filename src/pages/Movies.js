import React from 'react'

const Movies = () => {
    const img_src = ['./src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg', './src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg'];
    return (
        <div
            className='mx-auto max-w-7xl  p-6 lg:px-8'
        >
            <h1>Movies</h1>
            <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
                {img_src.map((isrc) => {
                    return (
                        <div className='container'>
                            <img src={isrc} alt='img' className='h-full' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Movies