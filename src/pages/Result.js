import React from 'react'
import { useParams } from 'react-router-dom'

const Result = () => {
    const { mvname } = useParams();
    return (
        <div className='mx-auto max-w-7xl  p-6 lg:px-8'>
            Result for {mvname}
        </div>
    )
}

export default Result