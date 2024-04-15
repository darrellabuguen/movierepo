import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';

const Result = () => {
    const { mvname } = useParams();
    const navigate = useNavigate();
    const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/search/multi?query=${mvname}&include_adult=false&language=en-US&page=1`, "GET");

    return (
        <div className='mx-auto max-w-7xl  p-6 lg:px-8'>
            {loading &&
                <Loading />
            }
            {error && <div>{error}</div>}
            {data && (
                <>
                    {console.log(data)}
                    <h1>Result for {mvname}</h1>
                    <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:gap-2 max-sm:grid-cols-2'>
                        {
                            data.results.map(movie => {
                                const type = movie.media_type;
                                var img_src = type === "person" ? movie.profile_path : movie.poster_path;
                                var img_title = type === "person" ? movie.original_name : movie.original_title;
                                return (
                                    <div
                                        key={movie.id}
                                        className='container flex flex-col justify-center items-center text-center cursor-pointer'
                                        onClick={() => {
                                            navigate(`/search_info/${movie.id}`);
                                        }}
                                    >
                                        <img src={"https://image.tmdb.org/t/p/w500/" + img_src} alt='img' className='h-full' />
                                        <p>{img_title}</p>
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

export default Result