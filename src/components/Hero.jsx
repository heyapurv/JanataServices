import { useState } from 'react'
import Gallary from './Gallary'

export default () => {

    const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Customers", path: "javascript:void(0)" },
      { title: "Careers", path: "javascript:void(0)" },
      { title: "Guides", path: "javascript:void(0)" },
      { title: "Partners", path: "javascript:void(0)" },
      { title: "Team", path: "javascript:void(0)" }
  ]
  
    return (
        <>
          
            <section className="my-20 mx-auto md:mx-16 pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-purple-700 font-bold text-4xl xl:text-6xl drop-shadow-lg">
                       Janata Services 
                        
                    </h1>
                    <p className=' text-yellow-500 font-bold text-4xl xl:text-5xl drop-shadow-md'>
                       Shegaon
                    </p>
                    {/* <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p> */}
                    <div>
                        <p className="text-gray-500 py-3">
                            Now Get All Types Of Business, Services & work At One Place Without Going Anywhere.
                            You Can Also Register Your Services Today. 
                        </p>
                        
                           
                            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-purple-500 hover:bg-purple-400 active:bg-purple-400  hover:scale-105 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Register Now!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button>
                     
                    </div>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <Gallary/>
                </div>
            </section>
        </>
    )
}
