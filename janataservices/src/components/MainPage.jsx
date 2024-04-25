import React from 'react'
import Hero from './Hero'
import Services from './Services'
function MainPage() {
  return (
   <>
    
    <div className='bg-gray-100 mx-4 py-5 mt-5 rounded-lg '>
      <Hero/>
      </div>
      <div className='bg-gray-100 mx-4 py-5 mt-5 rounded-lg'>
      <Services/>
      </div>
    
   </>
  )
}

export default MainPage
