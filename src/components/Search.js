import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const navigate = useNavigate();
    return (
        <div
            className='flex items-center mx-2 lg:px-8 relative'
            style={{
                width: '30rem'
            }}
        >
            <input type="search"
                placeholder='Search'
                id='srch'
                required
                className='h-8 rounded-l-md px-2 w-full text-black'
                onFocus={() => {
                    var option = document.querySelector(".srch-option");
                    option.classList.remove("hidden");

                    var srch = document.getElementById("srch");
                    srch.style.outline = '#0F8BE6 3px solid';
                }}
                onBlur={() => {
                    var option = document.querySelector(".srch-option");
                    option.classList.add("hidden");

                    var srch = document.getElementById("srch");
                    srch.style.outline = 'none';
                }}
            />
            <div className='bg-white absolute top-7 p-2 z-10 hidden srch-option'>
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