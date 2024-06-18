import React from 'react'

const Automobile = () => {
  return (
    <div>
      <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1631972241361-330c704b90f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-500 bg-blend-multiply  h-[300px] sm:h-[400px] lg:h-[500px] ">
  <div className="bg-gradient-to-b from-transparent to-gray-900 h-full">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        AutoMobile Services 
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        We service all types of vehicles, from cars and trucks to SUVs and motorcycles. Whether you need routine maintenance like oil changes or more complex repairs, our qualified technicians can get you back on the road quickly.
      </p>
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
  </div>
</section>

      
{/* Card */}
<div className="container mx-auto p-4 justify-center">
  <h1 className="text-black text-3xl font-bold mb-4 text-center">Automobile Services Categories</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Vehicle Sales */}
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
      <img src="https://plus.unsplash.com/premium_photo-1661956487605-1544bcd9b29e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vehicle Sales" className="w-48 h-36 pb-7" />
      <h2 className="text-xl font-bold mb-2 text-black">Vehicle Sales</h2>
      <ul className="text-center text-black">
        <li><a href="#">- Pre-Sale Inspection</a></li>
        <li><a href="#">- Detailing and Reconditioning</a></li>
        <li><a href="#">- Vehicle History Report</a></li>
        <li><a href="#">- Marketing and Advertisement</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>

    {/* Vehicle Maintenance and Repair */}
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
      <img src="https://plus.unsplash.com/premium_photo-1663090144512-3d150b6c5561?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vehicle Maintenance and Repair" className="w-48 h-36 pb-7" />
      <h2 className="text-xl font-bold mb-2 text-black">Vehicle Maintenance and Repair</h2>
      <ul className="text-center text-black">
        <li><a href="#">- Oil Change and Filter Replacement</a></li>
        <li><a href="#">- Tire Services</a></li>
        <li><a href="#">- Fluid Top-Off and Inspection</a></li>
        <li><a href="#">- Multi-Point Inspection</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>

    {/* Vehicle Rental Services */}
    <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
      <img src="https://images.unsplash.com/photo-1590504805643-bb1f94cde7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhaWxlciUyMHRydWNrfGVufDB8fDB8fHww" alt="Vehicle Rental Services" className="w-48 h-36 pb-7" />
      <h2 className="text-xl font-bold mb-2 text-black">Vehicle Rental Services</h2>
      <ul className="text-center text-black ">
        <li><a href="#">- Wide Variety of Vehicles</a></li>
        <li><a href="#">- Flexible Rental Options</a></li>
        <li><a href="#">- Convenient Pick-Up and Drop-Off</a></li>
        <li><a href="#">- 24/7 Roadside Assistance</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>
  </div>



        {/* Other Categories */}
        <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Other Categories...
        </button>

        {/* Descriptions */}
<div className="flex flex-col space-y-8">
  {/* Vehicle Sales */}
  <div className="bg-white shadow-md p-4 rounded">
    <h3 className="text-black text-xl font-bold mb-2">Vehicle Sales</h3>
    <p className="text-gray-600">
      Sell your car faster and with confidence! We offer pre-sale inspections, professional detailing, and vehicle history reports to showcase your cars condition.  Let us handle the marketing to reach a wider audience of potential buyers.
    </p>
  </div>

  {/* Vehicle Maintenance and Repair */}
  <div className="bg-white shadow-md p-4 rounded">
    <h3 className="text-black text-xl font-bold mb-2">Vehicle Maintenance and Repair</h3>
    <p className="text-gray-600">
      Keep your car running smoothly! We offer routine maintenance like oil changes and tire rotations, along with expert repairs for all vehicle types by our certified technicians. Schedule your service online today! 
    </p>
  </div>

  {/* Vehicle Rental Services */}
  <div className="bg-white shadow-md p-4 rounded">
    <h3 className="text-black text-xl font-bold mb-2">Vehicle Rental Services</h3>
    <p className="text-gray-600">
      Find your perfect ride! We offer a wide variety of cars, trucks, and SUVs for daily, weekly, or monthly rentals.  Choose convenient pick-up and drop-off options, and enjoy peace of mind with 24/7 roadside assistance.  Book your adventure today!
    </p>
  </div>
</div>
        {/* Many More */}
        <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Many more...
        </button>
      </div>

     <div className="mt-16 md:flex md:flex-wrap">
  <h2 className="text-black text-2xl font-bold mb-4 w-full underline underline-offset-2 ">Popular Categories</h2>
  <ul className="text-gray-600 flex flex-wrap justify-center  ">
    {
      [
        "Body Massage Centres |", "Cinema Halls |", "Schools |", "Beauty Spas |", "Dermatologists |", "Hospitals |", "Malls |", "Gyms |", "Beauty Parlours |", "Estate Agents |",
        "Banquet Halls |", "ENT Doctors |", "Book Shops |", "Bike On Rent |", "Sexologist Doctors |", "Neurologists |", "Gynaecologist & Obstetrician Doctors", "Tiffin Services",
        "Travel Agents|", "Paying Guest Accommodations |", "General Physician Doctors |", "Dentists |", "Orthopaedic Doctors |", "Chemists |", "Motor Training Schools |",
        "Gastroenterologists |", "Car Rental |", "Salons |", "Courier Services |", "Dance Classes |", "Pathology Labs |", "Taxi Services |", "Cake Shops |", "AC Repair & Services |",
        "Mobile Phone Dealers |", "Pet Shops", "Dmart |", "Packers And Movers |", "Psychiatrists |", "Dharamshalas |", "Urologist Doctors |", "Bakeries |", "Bicycle Dealers |",
        "Coffee Shops |", "Paediatricians |", "Sonography Centres |", "Yoga Classes |", "Hostels |", "Cardiologists |", "Electrical Shops |", "Skin Care Clinics |", "Diagnostic Centres |",
        "Homeopathic Doctors |", "Physiotherapists |", "Photo Studios |", "Plumbers |", "Music Classes |", "Electricians |", "Sports Goods Dealers |", "Shoe Dealers |", "Hair Stylists |",
        "Gift Shops |", "Ophthalmologists |", "Car Repair & Services |", "Ayurvedic Doctors |", "Eye Clinics |", "Restaurants |", "Carpenters |", "Jewellery Showrooms |",
        "Cooks On Hire |", "Stationery Shops |", "Nephrologists", "Caterers |", "Interior Designers |", "Rehabilitation Center |", "Drug De Addiction Center |", "Grocery Stores |",
        "AC Repair |", "Hotels |", "Cab & Car Rental |", "Spa & Salon |", "Car service |", "Lab Test |", "On Demand Service |", "JdSocial Blog |", "JD collections"
      ].map((category, index) => (
        <li key={index} className="mr-4 mb-2">
          <a href="#" className="text-gray-600 hover:text-gray-900">{category}</a>
        </li>
      ))
    }
  </ul>
</div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Follow us on</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-gray-200 rounded-full p-2">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>

        

      </div>
    </div>
    </div>
  )
}

export default Automobile
