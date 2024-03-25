import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const navigate = useNavigate();
    return (
        <div
            className='flex items-center mx-2 lg:px-8'
            style={{
                width: '30rem'
            }}
        >
            <input type="search"
                placeholder='Search'
                id='srch'
                required
                className='h-8 rounded-l-md px-2 w-full text-black'
                onMouseOver={() => {
                    var srch = document.getElementById("srch");
                    srch.style.outline = '#0F8BE6 3px solid';
                }}
                onMouseLeave={() => {
                    var srch = document.getElementById("srch");
                    srch.style.outline = 'none';
                }}
            />
            <button
                onClick={() => {
                    const srch_val = document.querySelector('#srch').value;
                    if (srch_val !== "") {
                        navigate(`/result/${srch_val}`)
                    }
                }}
                className='h-8 bg-white rounded-r-md p-2 hover:bg-zinc-200 text-black flex items-center'
            ><IoSearchOutline className='w-6' /></button>
        </div>
    )
}

export default Search