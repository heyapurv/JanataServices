import React from 'react'





const HomeServices = () => {
  return (
    <>


      <section class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D')] bg-gray-700 bg-blend-multiply h-[600px] ">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ALL FOR ONE, ONE FOR ALL</h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Indian cuisine is a vibrant blend of spices and regional diversity. Enjoy North India's rich butter chicken, South India's tangy dosas, East India's fish curry, and West India's spicy Goan dishes. Savor street food like chaat and vada pav, and indulge in sweets like gulab jamun and jalebi. Every meal is a sensory feast!</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Card */}
      <div className="container mx-auto p-4 justify-center ">
        <h1 className="text-3xl font-bold mb-4 text-center">Home Services</h1>
        <div className="grid grid-cols-3 gap-4">
          {/*Home Cleaning*/}
          <div className="bg-yellow-300 rounded-lg p-4 justify-center ">
            {/* <img src={logo} alt="" className='rounded-full w-40 h-30 pb-7' /> */}
            <h2 className="text-xl font-bold mb-2">Home Cleaning</h2>
            <ul >
              <li >- Regular Cleaning</li>
              <li>- Deep Cleaning</li>
              <li>- Post-construction cleaning</li>
              <li>- Specialty cleaning</li>
              <li>More</li>
            </ul>
          </div>

          {/* Handyman Services */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2"> Handyman Services</h2>
            <ul>
              <li>- General repairs</li>
              <li>- Home improvement</li>
              <li>- Minor electrical and plumbing</li>
              <li>- Specialized Services</li>
              <li>More</li>
            </ul>
          </div>

          {/*  Interior Design */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2"> Interior Design</h2>
            <ul>
              <li>- 3D Renderings</li>
              <li>- Virtual Design</li>
              <li>- Full-Service Design</li>
              <li>- Sustainable Design</li>
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
          <h3 className="text-xl font-bold mb-2">Home Cleaning:</h3>
          <p className="text-gray-600">
          Home cleaning services take the burden of housework off
          your shoulders. They offer customizable cleaning options,
          from one-time deep cleans to regular maintenance. Professionals
          tackle tasks like dusting, mopping, vacuuming, sanitizing surfaces,
          and tidying up. 
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Handyman Services:</h3>
          <p className="text-gray-600">
          Handyman services are your one-stop shop for fixing up your home.
          They're your knight in shining armor for those to-do lists filled
          with odd jobs and minor repairs. From leaky faucets and wonky
          shelves to creaky doors and tired walls, handymen can tackle a
          wide range of tasks, keeping your home functioning smoothly and looking its best.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Interior Design:</h3>
          <p className="text-gray-600">
          Interior design services transform your space from concept to
          livable reality. Designers can manage your entire project,
          from space planning and choosing furniture to crafting a sustainable
          or universally accessible environment.
          </p>
        </div>

        {/* Many More */}
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Many more...
        </button>
      </div>


      {/* footer */}
     


    </>
  )
}

export default HomeServices