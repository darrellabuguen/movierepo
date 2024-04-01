import React from 'react'

const Random = () => {
    const img_src = ['./src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg', './src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg', './src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg'];
    var ex_id = 0;
    return (
        <div>
            <h1
                className='text-2xl font-semibold text-blue-500 dark:text-gray-200'
            >
                Random
            </h1>
            <div className='grid grid-cols-4 gap-6'>
                {img_src.map(image => {
                    ex_id++;
                    return (
                        <div className='h-80' key={ex_id}>
                            <img src={image} alt='img' className='h-full' />
                        </div>
                    )
                })}
            </div>
            <div className='text-right text-blue-500'>
                <button>
                    Load more
                </button>
            </div>
        </div>
    )
}

export default Random