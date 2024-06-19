import React from 'react';
const categories = [
  { name: 'Schools', icon: '🏫' },
  { name: 'Colleges', icon: '🎓' },
  { name: 'Coaching Centers', icon: '📚' },
  { name: 'Language Classes', icon: '🗣️' },
  { name: 'Dance Classes', icon: '💃' },
  { name: 'Music Classes', icon: '🎵' },
  { name: 'Art Classes', icon: '🎨' },
];

const Education = () => {
  return (
    <div>
      <div>
        <div className="mt-20">
          <img src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D://imhttps://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3Dages.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D://images.unsplash.https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fHwwcom/photo-1491841550275-ad7854e35ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHwwttps://plus.unsplash.com/premium_photo-1661292112163-2710d94d6c5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGtleXxlbnwwfHwwfHx8MA%3D%3Dhttps://plus.unsplash.com/premium_photo-1663100543835-b869b64ab435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGtleXxlbnwwfHwwfHx8MA%3D%3Dttps://images.unsplash.com/photo-1575908539614-ff89490f4a78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtleXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-64 object-cover rounded-lg' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md flex items-center transition duration-200 ease-in-out transform hover:bg-gray-100 hover:shadow-lg cursor-pointer"
            >
              <span className="text-4xl mr-4">{category.icon}</span>
              <span className="text-xl font-semibold">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative flex items-center mb-8">
          <input
            type="text"
            placeholder="Search All Category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          <svg className="absolute right-3 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l2 2m0-2l2 2M21 21l-6-6m-4 4a7 7 0 1114-14 7 7 0 01-14 14z" />
          </svg>
        </div>

        {/* Main Categories */}
        <div className="space-y-4">
          {[
            { name: 'Schools', icon: 'M16 12H8m0 0l4-4m-4 4l4 4' },
            { name: 'Colleges', icon: 'M12 12h8m-8 0v8m0-8V4m0 8H4' },
            { name: 'Hobbies', icon: 'M6 18L18 6M6 6l12 12' },
            { name: 'Coaching', icon: 'M9 12l2 2 4-4M7 8h.01M7 16h.01M17 8h.01M17 16h.01' },
            { name: 'Vocational Training', icon: 'M12 8c1.656 0 3 1.343 3 3s-1.344 3-3 3-3-1.343-3-3 1.344-3 3-3-3z' }
          ].map((category, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-200">
              <svg className="w-6 h-6 mr-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.icon} />
              </svg>
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Popular Categories */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              'Body Massage Centres', 'Cinema Halls', 'Schools', 'Beauty Spas', 'Dermatologists',
              'Hospitals', 'Malls', 'Gyms', 'Beauty Parlours', 'Estate Agents', 'Banquet Halls',
              'ENT Doctors', 'Book Shops', 'Bike On Rent', 'Sexologist Doctors', 'Neurologists',
              'Gynaecologist & Obstetrician Doctors', 'Tiffin Services', 'Travel Agents',
              'Paying Guest Accommodations', 'General Physician Doctors', 'Dentists',
              'Orthopaedic Doctors', 'Chemists', 'Motor Training Schools', 'Gastroenterologists',
              'Car Rental', 'Salons', 'Courier Services', 'Dance Classes', 'Pathology Labs',
              'Taxi Services', 'Cake Shops', 'AC Repair & Services', 'Mobile Phone Dealers',
              'Pet Shops', 'Dmart', 'Packers And Movers', 'Psychiatrists', 'Dharamshalas',
              'Urologist Doctors', 'Bakeries', 'Bicycle Dealers', 'Coffee Shops',
              'Paediatricians', 'Sonography Centres', 'Yoga Classes', 'Hostels',
              'Cardiologists', 'Electrical Shops', 'Skin Care Clinics', 'Diagnostic Centres',
              'Homeopathic Doctors', 'Physiotherapists', 'Photo Studios', 'Plumbers',
              'Music Classes', 'Electricians', 'Sports Goods Dealers', 'Shoe Dealers',
              'Hair Stylists', 'Gift Shops', 'Ophthalmologists', 'Eye Clinics', 'Restaurants',
              'Carpenters', 'Jewellery Showrooms', 'Cooks On Hire', 'Stationery Shops',
              'Nephrologists', 'Caterers', 'Interior Designers', 'Rehabilitation Center',
              'Drug De Addiction Center', 'Grocery Stores', 'AC Repair', 'Hotels', 'Cab & Car Rental',
              'Spa & Salon', 'Car service', 'Lab Test', 'On Demand Service', 'JdSocial Blog',
              'JD collections'
            ].map((category, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md shadow hover:bg-gray-200 hover:shadow-md transition duration-200">
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Side Buttons */}
        <div className="fixed right-0 flex flex-col items-center gap-2 mt-8 mr-4">
          <button className="px-4 py-2 text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600 hover:shadow-md transition duration-200">Advertise</button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 hover:shadow-md transition duration-200">Free Listing</button>
        </div>
      </div>
    </div>
  );
};

export default Education;
