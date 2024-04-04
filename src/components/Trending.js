import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";
import useLayout from './useLayout';

const Trending = () => {
    const img_src = ['./src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg', './src/images/2147803976.jpg', './src/images/2148470173.jpg', './src/images/copy-space-movie-time-with-popcorn.jpg', './src/images/pxfuel.jpg'];
    const { contWidth, contHeight, item_gap } = useLayout();
    var ex_id = 0;

    return (
        <div className='my-3'>
            <h1
                className='text-2xl font-semibold text-blue-500 dark:text-gray-200'
            >
                Trending Now
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
                                    width: contWidth,
                                    height: contHeight
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