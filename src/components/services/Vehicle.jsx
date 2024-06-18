
const Vehicle = () => {
  return (
    <>


      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply h-[600px] ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ALL FOR ONE, ONE FOR ALL</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">We service all types of vehicles, from cars and trucks to SUVs and motorcycles. Whether you need routine maintenance like oil changes or more complex repairs, our qualified technicians can get you back on the road quickly.!</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Card */}
      <div className="container mx-auto p-4 justify-center ">
        <h1 className="text-3xl font-bold mb-4 text-center">Automobile Services</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Indian Food */}
          <div className="bg-yellow-300 rounded-lg p-4 justify-center ">
            {/* <img src={logo} alt="" className='rounded-full w-40 h-30 pb-7' /> */}
            <h2 className="text-xl font-bold mb-2">Vehicle Sales</h2>
            <ul >
              <li><a href="">- Pre-Sale Inspection</a></li>
              <li><a href="">- Detailing ad Reconditioning</a></li>
              <li><a href="">- Vehicle History Report</a></li>
              <li><a href="">- Marketing and Advertisement</a></li>
              <li><a href="">More</a></li>
            </ul>
          </div>

          {/* Modern Cuisines */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Vehicle Maintainance and Repair</h2>
            <ul>
              <li><a href="">- Oil Change and Filter Replacement</a></li>
              <li><a href="">- Tire Services</a></li>
              <li><a href="">- Fluid Top-Off and Inspection</a></li>
              <li><a href="">- Multi-Point Inspection</a></li>
              <li><a href="">More</a></li>
            </ul>
          </div>

          {/* Deserts */}
          <div className="bg-yellow-300 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Vehicle Rental Services</h2>
            <ul>
              <li><a href="">- Wide Variety of Vehicles</a></li>
              <li><a href="">- Flexible Rental Options</a></li>
              <li><a href="">- Convenient Pick-Up and Drop-Off</a></li>
              <li><a href="">- 24/7 Roadside Assistance</a></li>
              <li><a href="">More</a></li>
            </ul>
          </div>
        </div>

        {/* Other Categories */}
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Other Categories...
        </button>

        {/* Descriptions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Vehicle Sales:</h3>
          <p className="text-gray-600">
          Sell your car faster and with confidence! We offer pre-sale inspections, professional detailing, and vehicle history reports to showcase your cars condition.  Let us handle the marketing to reach a wider audience of potential buyers.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Vehicle Maintainance and Repair:</h3>
          <p className="text-gray-600">
          Keep your car running smoothly! We offer routine maintenance like oil changes and tire rotations, along with expert repairs for all vehicle types by our certified technicians. Schedule your service online today! 
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Vehicle Rental Services:</h3>
          <p className="text-gray-600">
          Find your perfect ride! We offer a wide variety of cars, trucks, and SUVs for daily, weekly, or monthly rentals.  Choose convenient pick-up and drop-off options, and enjoy peace of mind with 24/7 roadside assistance.  Book your adventure today!
          </p>
        </div>

        {/* Many More */}
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Many more...
        </button>
      </div>


     


    </>
  )
}

export default Vehicle;
