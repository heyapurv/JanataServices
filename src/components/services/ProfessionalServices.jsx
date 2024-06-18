import React from 'react'

const ProfessionalServices = () => {
  return (
    <div>
          <section class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D')] bg-gray-700 bg-blend-multiply h-[600px] ">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ALL FOR ONE, ONE FOR ALL</h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">To Provide a comprehensive overview of the various areas of legal services and addressing a wide range of IT services and also give a information about the services regarding Financial Advisory. This encompasses the range of services aimed at helping clients manage their works and to provide the services to the customers by the people who are professionally skilled in their work. This includes many other services too.  </p>
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
        <h1 className="text-3xl font-bold mb-4 text-center">Professional Services</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Manual Labour */}
          <div className="bg-yellow-300 rounded-lg p-4 justify-center ">
            {/* <img src={logo} alt="" className='rounded-full w-40 h-30 pb-7' /> */}
            <h2 className="text-xl font-bold mb-2">Legal services</h2>
            <ul >
              <li >- Corporate Law</li>
              <li>- Bankruptcy Law</li>
              <li>- Consumer Protection Law</li>
              <li>- Tax Law</li>
              <li>More</li>
            </ul>
          </div>

          {/* Machinery Suppliers */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">IT Services</h2>
            <ul>
              <li>- Software Services</li>
              <li>- Cyber Security Services</li>
              <li>- Cloud Services</li>
              <li>- IT training and education</li>
              <li>- IoT Services</li>
              <li>- Digital Workplace Solutions</li>
              <li>More</li>
            </ul>
          </div>

          {/* Material Supplier */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Financial Advisory</h2>
            <ul>
              <li>- Investment Advisory</li>
              <li>- Tax Advisory</li>
              <li>- Estate and Trust advisory</li>
              <li>- Insurance Advisory</li>
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
          <h3 className="text-xl font-bold mb-2">Legal Services:</h3>
          <p className="text-gray-600">
           Assistance in the formation of corporations, partnerships and your taxes and information regarding consumer protection laws. Handling the dispute regarding taxes and bankruptcy. Providing the information about consumer protection law and to provide the legal services to the client.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">IT Services:</h3>
          <p className="text-gray-600">
            To Provide the services regarding the IT sector such as Software Services, Designing and developing software tailored to the specific needs of an organization and individual. To provide the training and education regarding the IT industry. To provide the Iot services to the customer and to provide the digital solution over it.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Financial Advisory:</h3>
          <p className="text-gray-600">
          Creating and managing the advisory regarding the financial information regarding the investments, taxes, insurances and estate and trust. To provide the services regarding the investment plans or to provide the education in this sector so that people can understant the finance. We provide the transparency in our sector.
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

export default ProfessionalServices
