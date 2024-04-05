import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const navigate = useNavigate();
    const [options, openOptions] = useState(false);
    return (
        <div
            className='flex items-center mx-2 lg:px-8 relative max-sm:static'
            style={{
                width: '30rem'
            }}
        >
            <input type="search"
                placeholder='Search'
                id='srch'
                required
                autoComplete='off'
                className='h-8 rounded-l-md px-2 w-full text-black'
                onFocus={() => {
                    var srch = document.getElementById("srch");
                    srch.style.outline = '#0F8BE6 2px solid';
                    openOptions(true);
                }}
                onBlur={() => {
                    var srch = document.getElementById("srch");
                    srch.style.outline = 'none';
                    openOptions(false);
                }}
            />

            <div className={`absolute top-0 opacity-0 bg-white shadow-lg ring-1 ring-gray-900/5 p-2 rounded-md z-10 max-sm:left-0 max-sm:w-full max-sm:top-12 delay-75 duration-100
            ${options ? 'translate-y-9 max-sm:translate-y-2 opacity-100 pointer-events-auto' : 'translate-y-0 opacity-0 pointer-events-none'}
            `}
                onFocus={() => {
                    openOptions(true);
                }}
                onBlur={() => {
                    openOptions(false);
                }}
            >
                <div className='flex gap-2 items-center'>
                    <input id='safe' type="checkbox" name="safe" />
                    <label htmlFor="safe" className='text-black'>Safe search</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input id='region'
                        type="text"
                        name="region"
                        className=' outline-blue-500 border rounded-md text-black px-2'
                    />
                    <label htmlFor="region" className='text-black'>Region</label>
                </div>
            </div>
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