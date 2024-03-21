import React from 'react'
import { useParams } from 'react-router-dom'

const Result = () => {
    const { mvname } = useParams();
    return (
        <div>Result for {mvname}</div>
    )
}

export default Result