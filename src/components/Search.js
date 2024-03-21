import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate();
    return (
        <div>
            <input type="search" placeholder='Search movie' id='srch' required />
            <button
                onClick={() => {
                    const srch_val = document.querySelector('#srch').value;
                    if (srch_val !== "") {
                        navigate(`/result/${srch_val}`)
                    }
                }}
            >Search</button>
        </div>
    )
}

export default Search