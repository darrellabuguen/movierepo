import { Link } from "react-router-dom"
import { FaPhotoFilm } from "react-icons/fa6";

const Navigation = () => {
    return (
        <nav className="p-4 bg-indigo-500 text-white">
            <ul className="flex gap-4 items-center">
                <li className="flex-1"><Link to="/">
                    <span
                        className="flex"
                    >MovieRepo <FaPhotoFilm fill="white" /></span>
                </Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/movies">Movies</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation