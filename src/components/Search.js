import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    const navigate = useNavigate();
    return (
        <div
            className='flex items-center h-6'
        >
            <input type="search"
                placeholder='Search movie'
                id='srch'
                required
                className='rounded-l-xl p-2 outline-offset-0 outline-blue-200 text-black border border-gray-200'
            />
            <button
                onClick={() => {
                    const srch_val = document.querySelector('#srch').value;
                    if (srch_val !== "") {
                        navigate(`/result/${srch_val}`)
                    }
                }}
                className='bg-zinc-400 rounded-r-xl p-2 text-white border border-zinc-400'
            ><CiSearch className='w-6 h-6' /></button>
        </div>
    )
}

export default Search