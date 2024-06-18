import React from 'react'





const Wedding = () => {
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
        <h1 className="text-3xl font-bold mb-4 text-center">Wedding</h1>
        <div className="grid grid-cols-3 gap-4">
          {/*Venue rental Services*/}
          <div className="bg-yellow-300 rounded-lg p-4 justify-center ">
            {/* <img src={logo} alt="" className='rounded-full w-40 h-30 pb-7' /> */}
            <h2 className="text-xl font-bold mb-2"> Venue rental Services</h2>
            <ul >
              <li >- Partial Packages</li>
              <li>- Outdoor Venues</li>
              <li>- Restaurant Venues</li>
              <li>- Unique Venue</li>
              <li>More</li>
            </ul>
          </div>

          {/* Catering Services */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2"> Catering Services </h2>
            <ul>
              <li>- Plated Dinners</li>
              <li>- Buffets</li>
              <li>- Food Stations</li>
              <li>- Cocktail Receptions</li>
              <li>More</li>
            </ul>
          </div>

          {/*   Entertainment services */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">  Entertainment services </h2>
            <ul>
              <li>- Musical Entertainment</li>
              <li>- Performers</li>
              <li>- Interactive Activities</li>
              <li>- Lighting & Special Effects</li>
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
          <h3 className="text-xl font-bold mb-2">Venue rental Services:</h3>
          <p className="text-gray-600">
          Venue rental services connect you with ideal event spaces
          for your special occasion.  They offer a variety of locations,
          from banquet halls and ballrooms to art galleries, gardens,
          or unique historical sites.  These services can help you find
         spaces that match your guest list size, desired theme, and budget.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Catering Services :</h3>
          <p className="text-gray-600">
          Catering services take the stress out of feeding your event.
          They provide delicious food and drinks, from appetizers to
          desserts.  They can handle everything: menu planning, preparation,
          delivery, set up, and even service staff. 
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Entertainment services:</h3>
          <p className="text-gray-600">
          Entertainment services add pizzazz to any event, from
          weddings to corporate functions. Live music, DJs, and
          performers like magicians or dancers create a fun atmosphere.
          Interactive activities like photo booths or games get guests
          mingling.
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

export default Wedding