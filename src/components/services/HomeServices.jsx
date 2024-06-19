import React from 'react'





const HomeServices = () => {
  return (
    <>
 <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
       
        

      <div className="mt-20">
      <img
       src="https://images.unsplash.com/photo-1615874694520-474822394e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww"
       alt="Home Decor"
       style={{ height: 400, width: '100%' }}
       className="w-full h-64 object-cover rounded-lg"
       />
      </div>

       <div className="mt-16 grid grid-cols-3 gap-8">
         <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
         <i className="fas fa-couch fa-2x text-blue-500"></i>
         <h3 className="mt-4 text-lg font-semibold text-blue-500">Furnitures</h3>
         </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-home fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Furnishing</h3>
        </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-lightbulb fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Lamps & Lighting</h3>
        </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-utensils fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Kitchen & Dining</h3>
        </a>
        <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
        <i className="fas fa-utensils fa-2x text-blue-500"></i>
        <h3 className="mt-4 text-lg font-semibold text-blue-500">Housekeeping</h3>
        </a>
       <a href="#" className="bg-gray-100 rounded-lg p-4 text-center">
       <i className="fas fa-user-tie fa-2x text-blue-500"></i>
       <h3 className="mt-4 text-lg font-semibold text-blue-500">Interior Designers</h3>
       </a>
      </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <p className="text-gray-600">
            Body Massage Centres | Cinema Halls | Schools | Beauty Spas | Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate Agents |
            Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |  Doctors | Neurologists | Gynaecologist & Obstetrician Doctors | Tiffin Services |
            Travel Agents | Paying Guest Accommodations | General Physician Doctors | Dentists | Orthopaedic Doctors | Chemists | Motor Training Schools |
            Gastroenterologists | Car Rental | Salons | Courier Services | Dance Classes | Pathology Labs | Taxi Services | Cake Shops | AC Repair & Services |
            Mobile Phone Dealers | Pet Shops | Dmart | Packers And Movers | Psychiatrists | Dharamshalas | Urologist Doctors | Bakeries | Bicycle Dealers |
            Coffee Shops | Paediatricians | Sonography Centres | Yoga Classes | Hostels | Cardiologists | Electrical Shops | Skin Care Clinics | Diagnostic Centres |
            Homeopathic Doctors | Physiotherapists | Photo Studios | Plumbers | Music Classes | Electricians | Sports Goods Dealers | Shoe Dealers | Hair Stylists |
            Gift Shops | Ophthalmologists | Car Repair & Services | Ayurvedic Doctors | Eye Clinics | Restaurants | Carpenters | Jewellery Showrooms |
            Cooks On Hire | Stationery Shops | Nephrologists | Caterers | Interior Designers | Rehabilitation Center | Drug De Addiction Center | Grocery Stores |
            AC Repair | Hotels | Cab & Car Rental | Spa & Salon | Car service | Lab Test | On Demand Service | JdSocial Blog | JD collections
          </p>
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
    </>
  )
}

export default HomeServices