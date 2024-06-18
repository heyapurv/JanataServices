import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Bento from './Bento'
function MainPage() {
  return (
   <>
    
    <div className=' mx-4 py-5 mt-5 rounded-lg '>
      <Hero/>
    </div>
      <Bento/>
    
      {/* <Services/> */}
      

    
   </>
  )
}

export default MainPage
