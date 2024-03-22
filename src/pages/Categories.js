import React from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {
    const { category } = useParams();
    return (
        <div className='mx-auto max-w-7xl  p-6 lg:px-8'>
            <h1>{category}</h1>
        </div>
    )
}

export default Categories