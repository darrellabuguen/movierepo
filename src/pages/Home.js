import React from 'react'
import Search from '../components/Search'

const Home = () => {
    return (
        <div className='mx-auto max-w-7xl  p-6 lg:px-8'>
            <div className='flex justify-between items-center'>
                Home content
                <Search />
            </div>
        </div>
    )
}

export default Home