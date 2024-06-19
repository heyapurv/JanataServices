import React from 'react';
const cate = [
  { name: 'Car On Rent', icon: '🚗' },
  { name: 'Tempos On Rent', icon: '🚚' },
  { name: 'Furnitures On Rent', icon: '🛋️' },
  { name: 'Costumes On Rent', icon: '👗' },
  { name: 'Mini Bus On Rent', icon: '🚌' },
  { name: 'Bus On Rent', icon: '🚌' },
  { name: 'AC On Rent', icon: '❄️' },
];

const Rental = () => {
  const categories = [
    "AC On Rent", "Air Coolers On Rent", "Blazers On Rent", "Bridal Wear On Rent",
    "Bungalows On Rent", "Bus On Rent", "Cameras On Rent", "Car On Rent",
    "Chairs On Rent", "Computers On Rent", "Cooks On Rent", "Costumes On Rent",
    "Cranes On Rent", "DJ Equipments On Rent", "Dead Body Freezer Box On Rent",
    "Farm House On Rent", "Furnitures On Rent", "Generators On Rent",
    "Laptops On Rent", "Mini Bus On Rent", "Mini Trucks On Rent",
    "Motorcycles On Rent", "Offices On Rent", "Passenger Vans On Rent",
    "Projectors On Rent", "Refrigerators On Rent", "Rooms On Rent",
    "Sherwanis On Rent", "Sound Systems On Rent", "Suits On Rent",
    "Tempo Travellers On Rent", "Tempos On Rent", "Trucks On Rent", "Vans On Rent"
  ];

  const popularCategories = [
    "Body Massage Centres", "Cinema Halls", "Schools", "Beauty Spas", "Dermatologists",
    "Hospitals", "Malls", "Gyms", "Beauty Parlours", "Neurologists", "Gynaecologist & Obstetrician Doctors",
    "Tiffin Services", "Travel Agents", "Paying Guest Accommodations", "General Physician Doctors",
    "Dentists", "Orthopaedic Doctors", "Chemists", "Gastroenterologists", "Car Rental", "Salons",
    "Courier Services", "Dance Classes", "Pathology Labs", "Taxi Services", "Cake Shops", "Dharamshalas",
    "Urologist Doctors", "Bakeries", "Bicycle Dealers", "Coffee Shops", "Paediatricians", "Sonography Centres",
    "Yoga Classes", "Hostels", "Cardiologists", "Electrical Shops", "Skin Care Clinics", "Diagnostic Centres",
    "Homeopathic Doctors", "Physiotherapists", "Photo Studios", "Plumbers", "Music Classes", "Electricians",
    "Sports Goods Dealers", "Eye Clinics", "Restaurants", "Carpenters", "Jewellery Showrooms", "Cooks On Hire",
    "Stationery Shops", "Nephrologists", "Caterers", "Interior Designers", "Rehabilitation Center",
    "Drug De Addiction Center", "Grocery Stores", "AC Repair & Services", "Mobile Phone Dealers",
    "Pet Shops", "Dmart", "Packers And Movers", "Psychiatrists", "Cab & Car Rental", "Spa & Salon",
    "Car service", "Lab Test", "On Demand Service", "JdSocial Blog", "JD collections"
  ];

  return (
    <div>
          <div>
      <div className="mt-20">
        <img 
          src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Example" 
          className="w-full h-64 object-cover rounded-lg" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cate.map((category, index) => (
          <div 
            key={index} 
            className="p-4 border rounded-lg shadow-md flex items-center transition duration-200 ease-in-out transform hover:bg-gray-100 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <span className="text-4xl mr-4">{category.icon}</span>
            <span className="text-xl font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
      
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Explore more A to Z</h2>
          <div className="flex flex-wrap">
            {categories.map((category, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-4 py-2 m-2 text-sm transition duration-200 ease-in-out hover:bg-gray-400 hover:text-white cursor-pointer">
                {category}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <div className="flex flex-wrap">
            {popularCategories.map((category, index) => (
              <span key={index} className="text-gray-700 mr-2 mb-2 text-sm transition duration-200 ease-in-out hover:text-blue-500 cursor-pointer">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
