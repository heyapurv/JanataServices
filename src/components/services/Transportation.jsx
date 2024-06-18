import React from 'react'

const Transportation = () => {
  return (
    <div>
      <section class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D')] bg-gray-700 bg-blend-multiply h-[600px] ">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ALL FOR ONE, ONE FOR ALL</h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">We Specialized in providing comprehensive transport solutions tailored to meet the diverse needs of our clients. we ensure that your goods and people get where they need to go-safely, on time, and cost-effectively. We offer customized transportation solutions to meet your specific requirements</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Order Now!!
            </a>
          </div>
        </div>
      </section>

      {/* Card */}
      <div className="container mx-auto p-4 justify-center ">
        <h1 className="text-3xl font-bold mb-4 text-center">Transport Services</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Vehicle Services*/}
          <div className="bg-yellow-300 rounded-lg p-4 justify-center ">
            {/* <img src={logo} alt="" className='rounded-full w-40 h-30 pb-7' /> */}
            <h2 className="text-xl font-bold mb-2">Vehicle services</h2>
            <ul >
              <li >- Truck Services</li>
              <li>- Auto Services</li>
              <li>- Load Vehicle</li>
              <li>- Van Services</li>
              <li>More</li>
            </ul>
          </div>

          {/* Passenger Transport */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Passenger Transport</h2>
            <ul>
              <li>- Auto</li>
              <li>- Bus</li>
              <li>- Train</li>
              <li>- Taxi</li>
              <li>More</li>
            </ul>
          </div>

          {/* Specialized Transport*/}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Specialized Transport</h2>
            <ul>
              <li>- Medical Transport</li>
              <li>- School Transport</li>
              <li>- Tourism Transport</li>
              <li>- Executive Transport</li>
              <li>More</li>
            </ul>
          </div>
        </div>

        {/* Other Categories */}
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Other Categories...
        </button>

        {/* Descriptions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Vehicle Services:</h3>
          <p className="text-gray-600">
            Local, Regional and Long-haul trucking for a variety of goods. Efficient and cost-effective rail transport for bulk goods. Seamless transfer of goods across multiple modes of transportaion. Fast and secure services are provided.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Passenger Transport:</h3>
          <p className="text-gray-600">
            Reliable bus and shuttle services for urban and suburban areas. Comfortable and efficient travel options for domestic passengers. Convenient and accessible ride-sharing and taxi services. Private buses and vehicles for groups and special events also available.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Specialized Transport:</h3>
          <p className="text-gray-600">
          Safe and Timely medical transportation services. Secure and dependable school bus services. Customized transportation solutions for tourists and leisure travelers. High-end transportation options for executives and special occasions. All this services provided in your single call.
          </p>
        </div>

        {/* Many More */}
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Many more...
        </button>
      </div>

    </div>
  )
}

export default Transportation
