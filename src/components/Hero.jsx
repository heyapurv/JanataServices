import React from 'react'
import Gallary from './Gallary'
import ServiceIcons from './ServiceIcons'
const Hero = () => {
  return (
    <div className=''>
        <div>
            <h1 className='text-2xl text-gray-800 font-bold my-4 md:my-2 md:ml-20  ml-2'>All for <span className='text-purple-500'>One</span>, One for <span className='text-purple-500'>All</span>
           
            </h1>
        </div>
      
      <div className='md:h-80 md:mx-20 h-40 mx-2 '>
      <Gallary/>
      </div>
       <ServiceIcons/>
    </div>
  )
}

export default Hero
